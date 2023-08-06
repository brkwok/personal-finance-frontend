import React, { useEffect } from "react";
import { LOGIN_API } from "../../config/constants";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const { isLoggedIn, user } = useSelector((state) => state.session);
	const navigate = useNavigate();

	const handleLogin = () => {
		window.location.href = LOGIN_API;
	};

	useEffect(() => {
		if (isLoggedIn && user) {
			navigate("/dashboard");
		}
	}, [navigate, user, isLoggedIn]);

	return (
		<div className="h-screen bg-bluegray-700 flex items-center justify-center">
			<button
				onClick={handleLogin}
				className="bg-bluegray-200 text-black rounded-lg w-[300px] flex justify-center items-center h-[50px] hover:bg-bluegray-300 hover:text-bluegray-700 transition-all"
			>
				<div className="px-1">
					<i className="fa-brands fa-google"></i>
				</div>
				<span>Sign in with Google</span>
			</button>
		</div>
	);
};

export default Login;
