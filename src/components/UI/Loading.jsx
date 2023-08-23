import React from "react";
import { useSelector } from "react-redux";

const Loading = () => {
	const isLoading = useSelector((state) => state.ui.loading.isLoading);

	return isLoading ? (
		<div className="w-screen h-screen flex justify-center items-center absolute bg-black bg-opacity-30 z-50">
			<i
				className={"fa-solid fa-circle-notch fa-spin text-2xl text-gray-500"}
			></i>
		</div>
	) : null;
};

export default Loading;
