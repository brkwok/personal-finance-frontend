import React from "react";
import SidebarIcon from "./SidebarIcon";
import { useLocation } from "react-router-dom";
import SidebarSetting from "./SidebarSetting"

const Sidebar = (props) => {
	const location = useLocation();
	const pathname = location.pathname;


	return (
		<div className="h-screen text-bluegray-200 flex flex-col justify-between items-center p-2 bg-bluegray-600 text-xl sticky top-0">
			<div className="flex flex-col space-y-2">
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
				{/* <SidebarIcon
					linkTo="/institutions"
					iconType="fa-solid fa-building-columns"
					pathname={pathname}
				/> */}
			</div>
			<SidebarSetting />
		</div>
	);
};

export default Sidebar;
