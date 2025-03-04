import { createContext } from "react";

export interface IUserProfile {
  id: string;
  role: string;
  username: string;
}

export interface IUserStateContext {
  userProfile: IUserProfile|null;
}

export interface IUserActionsContext {
  updateUserProfile: (userProfile:IUserProfile,userId:string) => Promise<void>;
  deleteUserProfile: (userProfile:IUserProfile) => Promise<void>;
  fetchUserProfile:  (userId:string|undefined)=>Promise<void>
}

export const USER_CONTEXT_INITAL_STATE: IUserStateContext = {
  userProfile:null
};


export const UserProfileStateContext = createContext<IUserStateContext>(USER_CONTEXT_INITAL_STATE);
export const UserProfileActionsContext = createContext<IUserActionsContext|undefined>(undefined);