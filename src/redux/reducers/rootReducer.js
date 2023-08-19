import { combineReducers } from "@reduxjs/toolkit";
import sessionReducer from "./sessionReducer";
import transactionsReducer from "./transactionsReducer";

const reducers = combineReducers({
	session: sessionReducer,
	transactions: transactionsReducer,
});

export default reducers;
