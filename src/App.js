import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Nav from "./components/Nav/Nav";

function App() {
	return (
		<div className="App">
			<Nav />
			<Routes>
				<Route path={"/login"} element={<Login />} />
				<Route path={"/signup"} element={<Signup />} />
			</Routes>
		</div>
	);
}

export default App;
