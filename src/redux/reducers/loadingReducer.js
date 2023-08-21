import { RECEIVE_TRANSACTIONS } from "../types/transactionsTypes";
import { RECEIVE_SESSION } from "../types/sessionTypes";

const initialState = {
	lodaing: true,
};

const loadingReducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_TRANSACTIONS:
		case RECEIVE_SESSION:
			return {
				loading: false,
			};
		default:
			return state;
	}
};

export default loadingReducer;
