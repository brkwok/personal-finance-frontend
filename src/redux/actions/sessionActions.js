import {
	RECEIVE_SESSION_ERROR,
	RECEIVE_SESSION,
	RECEIVE_LOGOUT,
	RECEIVE_LOGOUT_ERROR,
} from "../types/sessionTypes";

import { getSessionInfo, logOutUser } from "../../api/session";

export const loadUser = (navigate) => async (dispatch) => {
	try {
		const res = await getSessionInfo();
		const data = res.data;
		if (res.status === 401 || res.status === 500) {
			dispatch({
				type: RECEIVE_SESSION_ERROR,
				payload: { message: data.message },
			});
			return;
		}

		dispatch({ type: RECEIVE_SESSION, payload: data });
	} catch (error) {
		dispatch({
			type: RECEIVE_SESSION_ERROR,
			payload: { message: error.message },
		});
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
