import React from "react";

const Button = (props) => {
	return (
		<button
			onClick={props.handleLogin}
			className="bg-bluegray-200 text-black rounded-lg w-[300px] flex justify-center items-center h-[50px] hover:bg-bluegray-300 hover:text-bluegray-700 transition-all"
		>
			<div className="px-1">
				<i className={props.logo}></i>
			</div>
			<span>{props.message}</span>
		</button>
	);
};

export default Button