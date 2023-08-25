import React from "react";
import ChartLayout from "./ChartLayout";
import { BARCHART_OPTIONS } from "../../config/chartOptions";
import { extractMonth, getBarChartRow } from "../../helpers/charts";

const chartOptions = BARCHART_OPTIONS;

const formatData = (aggregation, categories, colorMap) => {
	const month = new Date(aggregation.month).getMonth();
	const currMonth = extractMonth(month);
	const prevMonth = extractMonth(month - 1);
	const monthBeforePrevMonth = extractMonth(month - 2);

	const header = ["Month"];

	categories.forEach((category) => {
		header.push(
			category,
			{ role: "style" },
			{
				type: "string",
				role: "tooltip",
				p: { html: true },
			}
		);
	});
	header.push({ type: "string", role: "annotation" });

	const data = [header];

	data.push(
		getBarChartRow(
			aggregation.currentMonthAggregation,
			currMonth,
			categories,
			colorMap
		)
	);
	data.push(
		getBarChartRow(
			aggregation.previousMonthAggregation,
			prevMonth,
			categories,
			colorMap
		)
	);
	data.push(
		getBarChartRow(
			aggregation.monthBeforePreviousAggregation,
			monthBeforePrevMonth,
			categories,
			colorMap
		)
	);

	return data;
};

const BarChart = ({ data, categories, colorMap }) => {
	return (
		<ChartLayout
			chartOptions={chartOptions}
			data={formatData(data, categories, colorMap)}
			chartType="BarChart"
			chartTitle="Monthly Total"
		/>
	);
};

export default BarChart;
