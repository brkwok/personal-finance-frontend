import React from "react";
import { Chart } from "react-google-charts";

export const options = {
	backgroundColor: "",
	chartArea: {
		width: "95%",
		height: "85%",
	},
	height: 300,
	legend: "none",
	pieHole: 0.4,
	pieSliceBorderColor: "",
	pieSliceText: "percent",
	slices: [],
	title: "Distribution",
	titleTextStyle: {
		fontSize: 22,
		color: "",
	},
	tooltip: { isHtml: true }, // Use an HTML tooltip.
};

const DoughnutChart = ({ data }) => {
	return (
		<div className="h-full w-fit">
			<div>Distribution</div>
			<div className="flex items-center justify-center">
				<Chart chartType="PieChart" data={data} options={options} />
			</div>
		</div>
	);
};

export default DoughnutChart;
