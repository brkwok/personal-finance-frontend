import {
	RECEIVE_TRANSACTIONS,
	CLEAR_TRANSACTIONS,
} from "../types/transactionsTypes";

import { fetchTransactions } from "../../api/transaction";

export const receiveTransactions = (year, month) => async (dispatch) => {
	try {
		const transactionsRes = await fetchTransactions(year, month);
		const { transactions, aggregation, categories } = transactionsRes;

		dispatch({
			type: RECEIVE_TRANSACTIONS,
			payload: { transactions, aggregation, categories },
		});
	} catch (error) {
		console.error(error.message);
		dispatch({ type: CLEAR_TRANSACTIONS });
	}
};
