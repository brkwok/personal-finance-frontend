import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import reducers from "./redux/reducers/rootReducer";
import thunk from "redux-thunk";
import { HashRouter as Router } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
	reducer: reducers,
	middleware: [thunk],
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				<App />
			</Router>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
