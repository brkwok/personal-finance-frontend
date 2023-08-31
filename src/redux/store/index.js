import { configureStore } from "@reduxjs/toolkit";
import reducers from "../reducers";
import persistConfig from "../persistor/redux-persist-config";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
});
const persistor = persistStore(store);

export { store, persistor };
