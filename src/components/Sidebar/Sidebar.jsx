import React from "react";
import SidebarIcon from "./SidebarIcon";
import { useLocation } from "react-router-dom";

const Sidebar = (props) => {
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<div className="h-[calc(100vh-48px)] text-bluegray-200 flex flex-col justify-start items-center space-y-3 p-2 bg-bluegray-600 text-xl">
			<SidebarIcon
				linkTo="/dashboard"
				pathname={pathname}
				iconType="fa-solid fa-table-columns"
			/>
			<SidebarIcon
				linkTo="/transactions"
				iconType="fa-regular fa-credit-card"
				pathname={pathname}
			/>
			<SidebarIcon
				linkTo="/institutions"
				iconType="fa-solid fa-building-columns"
				pathname={pathname}
			/>
		</div>
	);
};

export default Sidebar;
