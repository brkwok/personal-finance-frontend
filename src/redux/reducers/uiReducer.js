import { combineReducers } from "@reduxjs/toolkit";
import loadingReducer from "./loadingReducer";
import modalReducer from "./modalReducer";

const uiReducer = combineReducers({
	loading: loadingReducer,
	modal: modalReducer,
});

export default uiReducer;
