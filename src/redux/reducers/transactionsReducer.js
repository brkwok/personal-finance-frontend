import {
	RECEIVE_TRANSACTIONS,
	CLEAR_TRANSACTIONS,
} from "../types/transactionsTypes";

const initialState = {
	transactions: [],
	aggregation: {
		currentMonthAggregation: [],
		previousMonthAggregation: [],
		monthBeforePreviousAggregation: [],
		month: "",
	},
	categories: [],
	colorMap: {},
	defaultDoughnutOptions: {},
};

const transactionsReducer = (state = initialState, action) => {
	switch (action.type) {
		case RECEIVE_TRANSACTIONS:
			return {
				...state,
				transactions: action.payload.transactions,
				aggregation: action.payload.aggregation || {},
				categories: action.payload.categories,
				colorMap: action.payload.colorMap || {},
				defaultDoughnutOptions: action.payload.defaultDoughnutOptions || {},
			};
		case CLEAR_TRANSACTIONS:
			return initialState;
		default:
			return state;
	}
};

export default transactionsReducer;
