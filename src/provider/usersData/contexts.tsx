import { createContext } from "react";

export interface IUserProfile {
  id: string;
  role: string;
  username: string;
}

export interface IUserStateContext {
  user: IUserProfile|null;
}

export interface IUserActionsContext {
  updateUSer?: (id:string) => Promise<void>;
  deleteUser?: (id:string) => Promise<void>;
}

export const USER_CONTEXT_INITAL_STATE: IUserStateContext = {
  user:null
};


export const UserStateContext = createContext<IUserStateContext>(USER_CONTEXT_INITAL_STATE);
export const UserActionsContext = createContext<IUserActionsContext|undefined>(undefined);