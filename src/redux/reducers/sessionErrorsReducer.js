import { CLEAR_ERRORS } from "../types";
import { RECEIVE_SESSION, RECEIVE_SESSION_ERROR } from "../types/sessionTypes";

const initialState = {
	message: null,
};

const sessionErrorsReducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_SESSION_ERROR:
			return {
				...state,
				message: action.payload.message,
			};
		case CLEAR_ERRORS:
		case RECEIVE_SESSION:
			return initialState;
		default:
			return state;
	}
};

export default sessionErrorsReducer;
