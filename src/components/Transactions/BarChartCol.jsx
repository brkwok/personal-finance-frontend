import React from "react";

import { BARCHART_COL_OPTIONS } from "../../config/chartOptions";
import ChartLayout from "./ChartLayout";

const data = [
	["", "Sales", "Expenses", "Profit"],
	["2014", 1000, 400, 200],
	["2015", 1170, 460, 250],
	["2016", 660, 1120, 300],
	["2017", 1030, 540, 350],
];

const chartOptions = BARCHART_COL_OPTIONS;

const BarChartCol = () => {
	return (
		<ChartLayout
			chartType="ComboChart"
			data={data}
			chartOptions={chartOptions}
			chartTitle="Spendings"
		/>
	);
};

export default BarChartCol;
