import React from "react";
import { useSelector } from "react-redux";

const Nav = () => {
	// const user = useSelector((state) => state.session.user);

	return (
		<nav className="text-bluegray-50 h-12 bg-bluegray-800 w-full relative">
			<div className="text-bluegray-100 flex justify-between items-center h-full text-xl px-4">
				<div className="hover:cursor-pointer hover:text-bluegray-300">
					<i className="fa-solid fa-bars"></i>
				</div>
				<div className="rounded-full overflow-hidden hover:cursor-pointer hover:text-bluegray-300 transition-all">
					<i className="fa-sharp fa-solid fa-gear"></i>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
