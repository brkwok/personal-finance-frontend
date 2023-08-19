import {
	RECEIVE_TRANSACTIONS,
	CLEAR_TRANSACTIONS,
} from "../types/transactionsTypes";

import { fetchTransactions } from "../../api/transaction";

export const receiveTransactions = (year, month) => async (dispatch) => {
	try {
		const res = await fetchTransactions(year, month);
		const { transactions, transactionsAggregation: aggregation } = res;

		dispatch({
			type: RECEIVE_TRANSACTIONS,
			payload: { transactions, aggregation },
		});
	} catch (error) {
		console.error(error.message);
		dispatch({ type: CLEAR_TRANSACTIONS });
	}
};
