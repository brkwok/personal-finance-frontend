import React, { useEffect } from "react";
import { LOGIN_API } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import { demoLogin } from "../../api/session";
import { RECEIVE_SESSION } from "../../redux/types/sessionTypes";

const Login = () => {
	const { isLoggedIn, user } = useSelector((state) => state.session);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = () => {
		window.location.href = LOGIN_API;
	};

	const handleDemoLogin = async () => {
		const data = await demoLogin("demo", "123456");

		dispatch({ type: RECEIVE_SESSION, payload: data });
		navigate("/dashboard");
	};

	useEffect(() => {
		if (isLoggedIn && user) {
			navigate("/dashboard");
		}
	}, [navigate, user, isLoggedIn]);

	return (
		<div className="h-screen bg-bluegray-700 flex flex-col items-center justify-center space-y-3">
			<Button
				handleLogin={handleLogin}
				logo="fa-brands fa-google"
				message="Sign in with Google"
				addStyle="w-80 h-12"
			/>
			<Button
				handleLogin={handleDemoLogin}
				logo="fa-solid fa-user"
				message="Sign in with Demo Account"
				addStyle="w-80 h-12"
			/>
		</div>
	);
};

export default Login;
