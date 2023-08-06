import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loadUser } from "./redux/actions/sessionActions";

import Login from "./components/Login/Login";
import NavLayout from "./components/Nav/NavLayout";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(loadUser(navigate));
	}, [dispatch, navigate]);

	return (
		<div className="App">
			<Routes>
				<Route index element={<Login />} />
				<Route element={<ProtectedRoute><NavLayout /></ProtectedRoute>}>
					<Route exact path={"/dashboard"} element={<div>hello</div>} />
				</Route>
			</Routes>
		</div>
	);
}

export default App;
