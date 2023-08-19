import React from "react";
import ChartLayout from "./ChartLayout";
import { BARCHART_OPTIONS } from "../../config/chartOptions";

const data = [
	["City", "2010 Population", "2000 Population"],
	["New York City, NY", 8175000, 8008000],
	["Los Angeles, CA", 3792000, 3694000],
	["Chicago, IL", 2695000, 2896000],
	["Houston, TX", 2099000, 1953000],
	["Philadelphia, PA", 1526000, 1517000],
];

const chartOptions = BARCHART_OPTIONS;

const BarChart = () => {
	return (
		<ChartLayout chartOptions={chartOptions}  data={data} chartType="BarChart" chartTitle="Monthly Total" />
	);
};

export default BarChart;
