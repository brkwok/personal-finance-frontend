import {
	RECEIVE_ACCOUNTS,
	RECEIVE_ACCOUNTS_ERRORS,
} from "../types/accountTypes";

const initialState = {};

const accountsReducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_ACCOUNTS:
			return action.payload || {};
		case RECEIVE_ACCOUNTS_ERRORS:
			return initialState;
		default:
			return state;
	}
};

export default accountsReducer;
