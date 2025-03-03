import { handleActions } from "redux-actions";
import { IUserProfile, IUserStateContext,USER_CONTEXT_INITAL_STATE} from "./contexts";
import { UserActionsEnums } from './actions';

const reducer = handleActions<IUserStateContext, any>({

    [UserActionsEnums.DeleteUser]: (state: IUserStateContext, action: ReduxActions.Action<IUserProfile>) => {
        const { payload } = action;
        return {...state,payload};
    },
    [UserActionsEnums.UpdateUser]: (state: IUserStateContext, action: ReduxActions.Action<IUserProfile>) => {
        const { payload } = action;
        return {...state,id:payload}; //the payload is what is required to perform an action 
    }
}
,USER_CONTEXT_INITAL_STATE);

export default reducer;