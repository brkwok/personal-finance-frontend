import { RECEIVE_ACCOUNTS, RECEIVE_ACCOUNTS_ERRORS } from "../types/accountTypes";
import { CLEAR_ERRORS } from "../types";

const initialState = {
	message: null,
};

const accountsErrorsReducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_ACCOUNTS_ERRORS:
			return { ...state, message: action.payload.message };
		case CLEAR_ERRORS:
    case RECEIVE_ACCOUNTS:
			return initialState;
		default:
			return state;
	}
};

export default accountsErrorsReducer;
