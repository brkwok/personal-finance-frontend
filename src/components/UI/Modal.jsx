import React from "react";
import { useSelector } from "react-redux";

const Modal = () => {
	const modal = useSelector((state) => state.ui.modal);

	return modal ? (
		<div className="absolute w-screen h-screen bg-opacity-50 bg-black flex justify-center items-center">
			{modal}
		</div>
	) : null;
};

export default Modal;
