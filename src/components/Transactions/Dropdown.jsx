import React, { useState, useRef } from "react";

import useOnClickOutside from "../../hooks/useOnClickOutside";

const Dropdown = ({ range, title, setField, field }) => {
	const [dropOpen, setDropOpen] = useState(false);
	const ref = useRef();
	useOnClickOutside(ref, () => setDropOpen(false));

	return (
		<div className="w-14 text-bluegray-300" ref={ref}>
			<div className="w-full flex justify-start items-center text-[11px] text-bluegray-400">
				{title}
			</div>
			<div className="text-sm relative bg-bluegray-700">
				<div
					onClick={(e) => {
						e.preventDefault();
						setDropOpen(!dropOpen);
					}}
					className="w-full flex justify-between items-center border-b px-1"
				>
					<span>{field}</span>
					<span
						className={dropOpen ? "fas fa-caret-up" : "fas fa-caret-down"}
					/>
				</div>
				{dropOpen && (
					<div
						className={
							"absolute w-full bg-bluegray-700 max-h-32 overflow-y-scroll no-scrollbar border border-t-0 z-50"
						}
					>
						{range.map((num, i) => {
							return (
								<div
									className={`w-full flex justify-end px-3 hover:bg-bluegray-800`}
									onClick={(e) => {
										e.preventDefault();
										setField(parseInt(e.target.textContent));
										setDropOpen(!dropOpen);
									}}
									key={`dropdown ${title + i}`}
								>
									<span>{num}</span>
								</div>
							);
						})}
					</div>
				)}
			</div>
		</div>
	);
};

export default Dropdown;
