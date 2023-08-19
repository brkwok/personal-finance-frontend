import React from "react";
import { DOUGHNUT_CHART_OPTIONS } from "../../config/chartOptions";
import ChartLayout from "./ChartLayout";

const chartOptions = DOUGHNUT_CHART_OPTIONS;

const DoughnutChart = ({ data }) => {
	return (
		<ChartLayout
			chartType="PieChart"
			data={data}
			chartOptions={chartOptions}
			chartTitle="Distribution"
		/>
	);
};

export default DoughnutChart;
