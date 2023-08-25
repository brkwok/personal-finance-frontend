import {
	RECEIVE_TRANSACTIONS,
	CLEAR_TRANSACTIONS,
} from "../types/transactionsTypes";

import { fetchTransactions } from "../../api/transaction";
import { CATEGORY_COLOR } from "../../helpers/charts";
import { DOUGHNUT_CHART_OPTIONS } from "../../config/chartOptions";

export const receiveTransactions = (year, month) => async (dispatch) => {
	try {
		const transactionsRes = await fetchTransactions(year, month);

		const { transactions, aggregation, categories } = transactionsRes;

		await categories.sort((a, b) => {
			if (a === "Other") return 1;
			if (b === "Other") return -1;

			return a.localeCompare(b);
		});

		const colorMap = {};

		await categories.forEach((category, i) => {
			colorMap[category] = CATEGORY_COLOR[i];
		});

		const { currentMonthAggregation } = aggregation;
		const defaultDoughnutOptions = { ...DOUGHNUT_CHART_OPTIONS, colors: [] };

		const colors = [];
		await currentMonthAggregation
			.sort((a, b) => {
				if (a.category === "Other") return 1;
				if (b.category === "Other") return -1;

				return a.category.localeCompare(b.category);
			})
			.forEach((aggregation) => {
				colors.push(colorMap[aggregation.category][0]);
			});

		defaultDoughnutOptions.colors = colors;

		dispatch({
			type: RECEIVE_TRANSACTIONS,
			payload: {
				transactions,
				aggregation,
				categories,
				colorMap,
				defaultDoughnutOptions,
			},
		});
	} catch (error) {
		console.error(error.message);
		dispatch({ type: CLEAR_TRANSACTIONS });
	}
};

export const clearTransactions = () => async (dispatch) => {
	dispatch({ type: CLEAR_TRANSACTIONS });
};
