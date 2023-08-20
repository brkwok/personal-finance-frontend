import React from "react";
import { DOUGHNUT_CHART_OPTIONS } from "../../config/chartOptions";
import ChartLayout from "./ChartLayout";

const chartOptions = DOUGHNUT_CHART_OPTIONS;

const formatAggregation = (aggregationResults) => {
	const header = ["Category", "Total Amount Spent"];
	const rows = aggregationResults.map((aggregation, i) => {
		return [aggregation.category, Math.abs(aggregation.totalAmount)];
	});

	return [[...header], ...rows];
};



const DoughnutChart = ({ data }) => {
	return (
		<ChartLayout
			chartType="PieChart"
			data={formatAggregation(data)}
			chartOptions={chartOptions}
			chartTitle="Distribution"
		/>
	);
};

export default DoughnutChart;
