import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const NavLayout = () => {
	return (
		<div className="md:flex md:flex-row w-full h-full bg-bluegray-700 sm:flex-col-reverse">
			<Sidebar />
			<Outlet />
		</ div>
	);
}

export default NavLayout;