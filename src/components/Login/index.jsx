import React, { useEffect } from "react";
import { LOGIN_API } from "../../config/constants";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../UI/Button";
import { demoLogin } from "../../api";
import { RECEIVE_SESSION } from "../../redux/types/sessionTypes";

const Login = () => {
	const { isLoggedIn, user } = useSelector((state) => state.session);
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = () => {
		window.location.href = LOGIN_API;
	};

	const handleDemoLogin = async () => {
		const data = await demoLogin();

		dispatch({ type: RECEIVE_SESSION, payload: data});
		navigate("/dashboard");
	}

	useEffect(() => {
		if (isLoggedIn && user) {
			navigate("/dashboard");
		}
	}, [navigate, user, isLoggedIn]);

	return (
		<div className="h-screen bg-bluegray-700 flex flex-col items-center justify-center space-y-3">
			{/* <button
				onClick={handleLogin}
				className="bg-bluegray-200 text-black rounded-lg w-[300px] flex justify-center items-center h-[50px] hover:bg-bluegray-300 hover:text-bluegray-700 transition-all"
			>
				<div className="px-1">
					<i className="fa-brands fa-google"></i>
				</div>
				<span>Sign in with Google</span>
			</button> */}
			<Button
				handleLogin={handleLogin}
				logo="fa-brands fa-google"
				message="Sign in with Google"
			/>
			{/* <button className="bg-bluegray-200 text-black rounded-lg w-[300px] flex justify-center items-center h-[50px] hover:bg-bluegray-300 hover:text-bluegray-700 transition-all">
				<div className="px-1">
					<i className="fa-regular fa-face-laugh-wink"></i>
				</div>
				<span>Sign in with Demo Account</span>
			</button> */}
			<Button 
				handleLogin={handleDemoLogin}
				logo="fa-regular fa-face-laugh-wink"
				message="Sign in with Demo Account"
			/>
		</div>
	);
};

export default Login;
