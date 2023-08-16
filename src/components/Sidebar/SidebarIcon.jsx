import React from "react";
import { Link } from "react-router-dom";

const SidebarIcon = (props) => {
	const selected = props.pathname === props.linkTo;
	const bg = selected ? "bg-bluegray-800" : "";

	return (
		<div
			className={`rounded-md h-8 w-8 flex justify-center items-center hover:bg-bluegray-800 ${bg}`}
		>
			<Link to={props.linkTo}>
				<i className={props.iconType}></i>
			</Link>
		</div>
	);
};

export default SidebarIcon;
