import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { loadUser } from "./redux/actions/sessionActions";

import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./components/Dashboard";
import SidebarLayout from "./components/Sidebar";
import ContentWrapper from "./components/ContentWrapper";
import Transactions from "./components/Transactions";
// import Modal from "./components/UI/Modal";
import Loading from "./components/UI/Loading";

function App() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	useEffect(() => {
		dispatch(loadUser(navigate));
	}, [dispatch, navigate]);

	return (
		<div className="App">
			<Loading />
			<Routes>
				<Route index element={<Login />} />
				<Route
					element={
						<ProtectedRoute>
							<SidebarLayout />
						</ProtectedRoute>
					}
				>
					<Route element={<ContentWrapper />}>
						<Route exact path={"/dashboard"} element={<Dashboard />} />
						<Route exact path={"/transactions"} element={<Transactions />} />
					</Route>
				</Route>
				<Route path="*" element={<div>not found</div>} />
			</Routes>
		</div>
	);
}

export default App;
