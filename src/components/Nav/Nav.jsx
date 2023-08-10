import React from "react";
import { useSelector } from "react-redux";

const Nav = () => {
	const user = useSelector(state =>state.session.user);


	return (
		<nav className="text-bluegray-50 bg-bluegray-800 flex justify-end items-center px-8 h-12">
			<div className="rounded-full overflow-hidden"><img className="h-8 w-8" alt={user?.profilePicUrl} src={user?.profilePicUrl} /></div>
		</nav>
	);
};

export default Nav;
