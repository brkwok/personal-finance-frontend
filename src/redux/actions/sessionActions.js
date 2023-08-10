import {
	RECEIVE_SESSION_ERROR,
	RECEIVE_SESSION,
	RECEIVE_LOGOUT,
	RECEIVE_LOGOUT_ERROR,
} from "../types/sessionTypes";

import { getSessionInfo, logOutUser } from "../../api/index";

export const loadUser = (navigate) => async (dispatch) => {
	try {
		const user = await getSessionInfo();
		const data = user.data;

		dispatch({ type: RECEIVE_SESSION, payload: data });
	} catch (error) {
		console.error(error);

		dispatch({ type: RECEIVE_SESSION_ERROR, payload: error });
		navigate("/");
	}
};

export const logOut = () => async (dispatch) => {
	try {
		const logOut = await logOutUser();
		const message = logOut.message;

		dispatch({ type: RECEIVE_LOGOUT, message });
	} catch (error) {
		console.error(error.message);

		dispatch({ type: RECEIVE_LOGOUT_ERROR });
	}
};