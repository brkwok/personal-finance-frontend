import { Outlet } from "react-router-dom";
import Nav from "./Nav";

export default function NavLayout() {
	return (
		<>
			<Nav />
			<Outlet />
		</>
	);
}
