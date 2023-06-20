import React from "react";

const Login = () => {
	return (
		<div>
			<button className="bg-slate-200 text-black rounded-lg w-[300px] flex justify-center items-center h-[50px] hover:bg-slate-600 hover:text-white transition-all">
				<div className="px-1">
					<i className="fa-brands fa-google"></i>
				</div>
				<span>Sign in with Google</span>
			</button>
		</div>
	);
};

export default Login;
