import { createAction } from 'redux-actions';
import { IUserStateContext, IUserProfile } from './contexts';

export enum UserProfileActionsEnums {
    DeleteUser = 'DELETE_USER',
    UpdateUser = 'UPDATE_USER',
    fetchUser = 'FETCH_USER',
}

//sate and type of field we are mani....
export const deleteUserAction = createAction<IUserStateContext, IUserProfile>(UserProfileActionsEnums.DeleteUser, (p: IUserProfile) => ({ userProfile: p }));

export const updateUserAction = createAction<IUserStateContext, IUserProfile>(UserProfileActionsEnums.UpdateUser, (p: IUserProfile) => ({ userProfile: p }));

export const fetchUserAction = createAction<IUserStateContext, IUserProfile>(UserProfileActionsEnums.UpdateUser, (p: IUserProfile) => ({ userProfile: p }));
