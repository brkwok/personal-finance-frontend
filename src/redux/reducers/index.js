import { combineReducers } from "@reduxjs/toolkit";
import sessionReducer from "./sessionReducer";
import transactionsReducer from "./transactionsReducer";
import uiReducer from "./uiReducer";
import accountsReducer from "./accountsReducer";

const reducers = combineReducers({
	session: sessionReducer,
	transactions: transactionsReducer,
	ui: uiReducer,
	accounts: accountsReducer,
});

export default reducers;
