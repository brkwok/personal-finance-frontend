import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loadUser } from "./redux/actions/sessionActions";

import Login from "./components/Login";
import NavLayout from "./components/Nav";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import SidebarLayout from "./components/Sidebar";

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
				<Route
					element={
						<ProtectedRoute>
							<NavLayout />
						</ProtectedRoute>
					}
				>
					<Route element={
						<SidebarLayout />
					}>
						<Route exact path={"/dashboard"} element={<Dashboard />} />
					</Route>
				</Route>

				<Route path="*" element={<div>not found</div>} />
			</Routes>
		</div>
	);
}

export default App;
