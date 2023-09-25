import { combineReducers } from "@reduxjs/toolkit";
import accountsErrorsReducer from "./accountsErrorsReducer";
import sessionErrorsReducer from "./sessionErrorsReducer";

const errorsReducer = combineReducers({
	accounts: accountsErrorsReducer,
	sessions: sessionErrorsReducer,
});

export default errorsReducer
