import React from "react";

const defaultStyle =
	"bg-bluegray-200 text-black rounded-lg flex justify-center items-center hover:bg-bluegray-300 hover:text-bluegray-700 transition-all ";

const Button = (props) => {
	const style = props.addStyle ? defaultStyle + props.addStyle : defaultStyle;
	return (
		<button onClick={props.handleLogin} className={style}>
			<div className="px-1">
				<i className={props.logo}></i>
			</div>
			<span>{props.message}</span>
		</button>
	);
};

export default Button;
