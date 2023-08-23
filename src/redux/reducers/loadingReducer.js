import { RECEIVE_TRANSACTIONS } from "../types/transactionsTypes";
import { RECEIVE_SESSION, RECEIVE_SESSION_ERROR } from "../types/sessionTypes";
import { FINISH_LOADING, SET_LOADING } from "../types/uiTypes";
import { RECEIVE_ACCOUNTS } from "../types/accountTypes";

const defaultState = {
	isLoading: true,
};

const loadingReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SET_LOADING:
			return { isLoading: true };
		case FINISH_LOADING:
		case RECEIVE_TRANSACTIONS:
		case RECEIVE_SESSION:
		case RECEIVE_SESSION_ERROR:
		case RECEIVE_ACCOUNTS:
			return { isLoading: false };
		default:
			return state;
	}
};

export default loadingReducer;
