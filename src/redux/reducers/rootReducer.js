import { combineReducers } from "@reduxjs/toolkit";
import sessionReducer from "./sessionReducer";
import transactionsReducer from "./transactionsReducer";
import uiReducer from "./uiReducer";

const reducers = combineReducers({
	session: sessionReducer,
	transactions: transactionsReducer,
	ui: uiReducer,
});

export default reducers;
