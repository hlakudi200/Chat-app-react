import React, { useEffect, useState } from "react";
import { IUserProfile } from "./contexts";
import supabase from "../../config/client";
import { User } from "@supabase/supabase-js";
import { useAuth } from "../authprovider/authProvider";

const UserProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [userProfile, setUserProfile] = useState<IUserProfile | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const { session } = useAuth();

  useEffect(() => {
    setUser(session?.user ?? null);
    const fetchUser = async (userId: string | undefined) => {
      const userData = await supabase
        .from("profile")
        .select()
        .eq("id", userId)
        .single();
      if (userData) {
        setUserProfile(userData.data);
      }
    };

    fetchUser(user?.id);
  }, []);
 
  
  

  return <div></div>;
};

export default UserProfileProvider;
