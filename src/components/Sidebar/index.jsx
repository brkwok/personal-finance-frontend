import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

export default function NavLayout() {
	return (
		<div className="flex flex-row w-full bg-bluegray-700">
			<Sidebar />
			<Outlet />
		</ div>
	);
}
