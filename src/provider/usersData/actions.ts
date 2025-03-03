import { createAction } from 'redux-actions';
import { IUserStateContext,IUserProfile } from './contexts';

export enum UserActionsEnums {
    DeleteUser = 'DELETE_USER',
    UpdateUser = 'UPDATE_USER',
}

//sate and type of field we are mani....
export const deleteUser = createAction<IUserStateContext, IUserProfile>(UserActionsEnums.DeleteUser,(p:IUserProfile)=>({user:p}));

export const updateUser = createAction<IUserStateContext, IUserProfile>(UserActionsEnums.UpdateUser, (p:IUserProfile)=>({user:p}));


