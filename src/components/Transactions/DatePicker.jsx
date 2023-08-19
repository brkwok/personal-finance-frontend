import React from "react";

import Dropdown from "./Dropdown";

const DatePicker = ({
	selectedMonth,
	selectedYear,
	setSelectedYear,
	setSelectedMonth,
	yearRange,
	monthRange,
}) => {
	return (
		<div>
			<div className="w-fit flex flex-row space-x-3 items-end">
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
				<div className="text-bluegray-200 hover:cursor-pointer hover:text-bluegray-400 transition-all flex items-end pb-[2px]">
					<i className="fa-solid fa-rotate-right"></i>
				</div>
			</div>
		</div>
	);
};

export default DatePicker;
