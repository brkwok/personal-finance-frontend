import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const NavLayout = () => {
	return (
		<div className="flex flex-row w-full h-full bg-bluegray-700">
			<Sidebar />
			<Outlet />
		</ div>
	);
}

export default NavLayout;