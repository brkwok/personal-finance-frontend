import React, { useEffect, useState } from "react";
import { Transition } from "@headlessui/react";

const Alert = (props) => {
	const [isVisible, setIsVisible] = useState(true);
	useEffect(() => {
		const timer = setTimeout(() => {
			setIsVisible(false);
		}, 2000);

		return () => {
			clearTimeout(timer);
		};
	}, []);

	if (!isVisible) {
		return null;
	}
	return (
		<div
			className={`fixed top-0 left-0 w-full p-4 transform transition-transform bg-white translate-y-0 ${
				isVisible ? "-translate-y-full" : "translate-y-0"
			}`}
		>
			message
		</div>
	);
};

export default Alert;
