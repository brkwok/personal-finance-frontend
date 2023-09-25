import { combineReducers } from "@reduxjs/toolkit";
import sessionReducer from "./sessionReducer";
import transactionsReducer from "./transactionsReducer";
import uiReducer from "./uiReducer";
import accountsReducer from "./accountsReducer";
import errorsReducer from "./errorsReducer";

const reducers = combineReducers({
	session: sessionReducer,
	transactions: transactionsReducer,
	ui: uiReducer,
	accounts: accountsReducer,
	errors: errorsReducer,
});

export default reducers;
