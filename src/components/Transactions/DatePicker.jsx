import React from "react";
import { useSelector } from "react-redux";

import Dropdown from "./Dropdown";

const DatePicker = ({
	selectedMonth,
	selectedYear,
	setSelectedYear,
	setSelectedMonth,
	yearRange,
	monthRange,
	fetchNewData,
}) => {
	const isLoading = useSelector(state=> state.ui.loading.isLoading);
	
	return (
		<div>
			<div className="w-fit flex flex-row space-x-3 items-end pb-2">
				<Dropdown
					range={monthRange}
					title={"Month"}
					setField={setSelectedMonth}
					field={selectedMonth}
				/>
				<Dropdown
					range={yearRange}
					title={"Year"}
					setField={setSelectedYear}
					field={selectedYear}
				/>
				<div
					className="text-bluegray-200 hover:cursor-pointer hover:text-bluegray-400 transition-all flex items-end pb-[2px]"
					onClick={fetchNewData}
				>
					<i className={`fa-solid fa-rotate-right ${isLoading ? "fa-spin" : ""}`}></i>
				</div>
			</div>
		</div>
	);
};

export default DatePicker;
