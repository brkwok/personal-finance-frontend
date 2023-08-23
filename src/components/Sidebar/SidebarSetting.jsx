import React, { useRef, useState } from "react";
import useOnClickOutside from "../../hooks/useOnClickOutside";
import { useDispatch } from "react-redux";
import { logOut } from "../../redux/actions/sessionActions";

const SidebarSetting = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const ref = useRef();
	const dispatch = useDispatch();

	useOnClickOutside(ref, () => setIsMenuOpen(false));

	const handleLogout = (e) => {
		e.preventDefault();

		dispatch(logOut());
	};

	return (
		<div
			onClick={() => setIsMenuOpen(!isMenuOpen)}
			className={`rounded-full overflow-hidden hover:cursor-pointer hover:text-bluegray-400 transition-all static ${
				isMenuOpen ? "text-bluegray-400" : ""
			}`}
		>
			<i className="fa-sharp fa-solid fa-gear"></i>
			{isMenuOpen && (
				<div
					ref={ref}
					className="text-bluegray-500 hover:cursor-auto p-2 w-40 h-32 text-sm absolute z-50 bottom-2 left-12 bg-bluegray-200 shadow-bluegray-300 shadow-sm"
				>
					<div className="text-[9px] hover:cursor-default">
						<span>Settings</span>
					</div>
					<div className="w-full text-[15px] flex justify-start items-start hover:text-bluegray-400">
						<button className="w-full text-left" onClick={handleLogout}>
							Logout
						</button>
					</div>
				</div>
			)}
		</div>
	);
};

export default SidebarSetting;
