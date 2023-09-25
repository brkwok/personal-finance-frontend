import { fetchAccounts } from "../../api/accounts";

import {
	RECEIVE_ACCOUNTS,
	RECEIVE_ACCOUNTS_ERRORS,
} from "../types/accountTypes";

export const receiveAccounts = () => async (dispatch) => {
	try {
		const accounts = await fetchAccounts();

		dispatch({
			type: RECEIVE_ACCOUNTS,
			payload: accounts,
		});
	} catch (error) {
		dispatch({
			type: RECEIVE_ACCOUNTS_ERRORS,
			payload: { message: error.message },
		});
	}
};
