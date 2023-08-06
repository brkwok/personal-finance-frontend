import { RECEIVE_SESSION, RECEIVE_LOGOUT } from "../types/sessionTypes";

const initialState = {
	isLoggedIn: false,
	user: null,
};

const sessionReducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_SESSION:
			return {
				...state,
				user: action.payload,
				isLoggedIn: true,
			};
		case RECEIVE_LOGOUT:
			return {
				...state,
				user: null,
				isLoggedIn: false,
			};
		default:
			return state;
	}
};

export default sessionReducer;
