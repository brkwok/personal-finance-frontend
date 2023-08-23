import React from "react";

import { BARCHART_COL_OPTIONS } from "../../config/chartOptions";
import { constructBarChartColBody, extractMonth } from "../../helpers/charts";
import ChartLayout from "./ChartLayout";

const chartOptions = BARCHART_COL_OPTIONS;

const formatData = (aggregation, categories) => {
	const month = new Date(aggregation.month).getMonth();

	const currMonth = extractMonth(month);
	const prevMonth = extractMonth(month - 1);
	const header = [
		"Category",
		prevMonth || 0,
		{ role: "style" },
		{ type: "string", role: "tooltip", p: { html: true } },
		currMonth || 0,
		{ role: "style" },
		{ type: "string", role: "tooltip", p: { html: true } },
		{ type: "string", role: "annotation" },
	];
	const body = constructBarChartColBody(
		aggregation,
		categories,
		currMonth,
		prevMonth
	);

	const data = [[...header], ...body];

	return data;
};

const BarChartCol = ({ data, categories }) => {
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
