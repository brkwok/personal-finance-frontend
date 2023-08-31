import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import {
	HashRouter as Router,
	BrowserRouter as DevRouter,
} from "react-router-dom";
import { store, persistor } from "./redux/store"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<DevRouter>
					<App />
				</DevRouter>
			</PersistGate>
		</Provider>
	</React.StrictMode>
);

reportWebVitals();
