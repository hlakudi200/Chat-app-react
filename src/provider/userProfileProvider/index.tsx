import React, { useContext} from "react";
import supabase from "../../config/client";
import { useAuth } from "../authprovider/authProvider";
import { deleteUserAction, updateUserAction,fetchUserAction } from "./actions";
import useThunkReducer from "react-hook-thunk-reducer";
import reducer from "./reducer";
import {
  UserProfileActionsContext,
  UserProfileStateContext,
  USER_CONTEXT_INITAL_STATE,
  IUserProfile,
} from "./contexts";

export const UserProfileProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { user } = useAuth();
  const [state, dispatch] = useThunkReducer(reducer, USER_CONTEXT_INITAL_STATE);
  
  const fetchUserProfile = async (userId: string|undefined) => {
    await supabase
      .from("profile")
      .select('id,role,username')
      .eq("id", userId)
      .single()
      .then((response) => {
       return(dispatch(fetchUserAction({id:response.data?.id,role:response.data?.role,username:response.data?.username})))
      });
      
  };

  const updateUserProfile = async (userProfile: IUserProfile,userId: string) => {
    const { error } = await supabase
      .from("profile")
      .update({ role: userProfile.role, username: userProfile.username })
      .eq("id", userId);
    if (error) throw error;
    dispatch(updateUserAction(userProfile));
  };

  const deleteUserProfile = async (userProfile: IUserProfile) => {
    const { error } = await supabase
      .from("profile")
      .delete()
      .eq("id", user?.id);
    if (error) throw error;
    dispatch(deleteUserAction(userProfile));
  };

  const value = { updateUserProfile, deleteUserProfile, fetchUserProfile };

  return (
    <UserProfileStateContext.Provider value={state}>
      <UserProfileActionsContext.Provider value={value}>
        {children}
      </UserProfileActionsContext.Provider>
    </UserProfileStateContext.Provider>
  );
};

export const useUserStateProfile = () => {
  const context = useContext(UserProfileStateContext);

  if (!context) {
    throw new Error("useUserProfile must be within  userProfileProvider");
  }

  return context;
};

export const useUserProfileAction = () => {
  const context = useContext(UserProfileActionsContext);
  if (!context) {
    throw new Error(
      "UserProfileActionsContext must be within userProfileProvider "
    );
  }
  return context;
};
