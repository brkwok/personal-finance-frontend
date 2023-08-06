import { combineReducers } from "@reduxjs/toolkit";
import sessionReducer from "./sessionReducer";

const reducers = combineReducers({
	session: sessionReducer,
});

export default reducers;
