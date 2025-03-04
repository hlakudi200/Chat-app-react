// src/context/AuthContext.tsx
import React, { createContext, useContext, useState, useEffect, useMemo } from "react";
import supabase from "../../config/client";
import { Session, User } from "@supabase/supabase-js";

//context

//add forgot password
interface AuthContextType {
  user: User | null;
  session: Session | null;
//StateContext 


//action Context 
  signIn: (email: string, password: string) => Promise<void>;
  singUp:(    email: string,
    password: string,
    role: string,
    username: string)=>Promise<void>
  signOut: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);


//index
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user ?? null);
      setLoading(false);
    });

    return () => subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
  };
  const singUp = async (
    email: string,
    password: string,
    role: string,
    username: string
  ) => {
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;

    const userData = data.user;

    if (userData) {
      const { error: profileError } = await supabase
        .from("profile")
        .insert({ id: userData.id, role: role, username: username });
      if (profileError) throw error;
    }
  };
  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  };

  const value=useMemo(()=>({ user, session, signIn, singUp,signOut }),[])
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook to use the auth context
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
};
