import { handleActions } from "redux-actions";
import { IUserStateContext,USER_CONTEXT_INITAL_STATE} from "./contexts";
import {UserProfileActionsEnums } from './actions';

const reducer = handleActions<IUserStateContext, IUserStateContext>({

    [UserProfileActionsEnums.DeleteUser]: (state, action) => {
        const { payload } = action;
        return {...state,...payload};
    },
    [UserProfileActionsEnums.UpdateUser]: (state, action) => {
        const { payload } = action;
        return {...state,...payload}; 
    },
    [UserProfileActionsEnums.fetchUser]:(sate,action)=>{
        const {payload}=action;
        return {...sate,...payload}
    }


}
,USER_CONTEXT_INITAL_STATE);

export default reducer;