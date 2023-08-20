import React from "react";

import { BARCHART_COL_OPTIONS } from "../../config/chartOptions";
import {
	constructBarChartColBody,
	extractMonth,
	mapColors,
} from "../../helpers/charts";
import ChartLayout from "./ChartLayout";

// const exdata = [
// 	["", "Sales", { role: "style" }, "Expenses", { role: "style" }],
// 	["2014", 1000, "color: #3366CC", 400, "color: #3366CC"],
// 	["2015", 1170, "color: #0BBBD4", 460, "color: #0BBBD4"],
// 	["2016", 660, "color: #DC3912", 1120, "color: #DC3912"],
// 	["2017", 1030, "color: #FF9900", 540, "color: #FF9900"],
// ];

const chartOptions = BARCHART_COL_OPTIONS;

const formatData = (aggregation, categories) => {
	const colorMap = mapColors(categories);
	const month = new Date(aggregation.month).getMonth() || 0;

	const currMonth = extractMonth(month);
	const prevMonth = extractMonth(month - 1);
	const body = constructBarChartColBody(
		aggregation,
		categories,
		colorMap,
		currMonth,
		prevMonth
	);
	const header = [
		"Category",
		prevMonth,
		{ role: "style" },
		{ type: "string", role: "tooltip", p: { html: true } },
		currMonth,
		{ role: "style" },
		{ type: "string", role: "tooltip", p: { html: true } },
		{ type: "string", role: "annotation" },
	];

	return [[...header], ...body];
};

const BarChartCol = ({ data, categories }) => {
	formatData(data, categories);
	return (
		<ChartLayout
			chartType="ColumnChart"
			data={formatData(data, categories)}
			chartOptions={chartOptions}
			chartTitle="Spendings"
		/>
	);
};

export default BarChartCol;
