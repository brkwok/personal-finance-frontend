import React from "react";
import { Chart } from "react-google-charts";

const data = [
	["Year", "Sales", "Expenses", "Profit"],
	["2014", 1000, 400, 200],
	["2015", 1170, 460, 250],
	["2016", 660, 1120, 300],
	["2017", 1030, 540, 350],
];

const options = {
	animation: {
		startup: true,
		duration: 1000,
		easing: "out",
	},
	annotations: {
		textStyle: {
			bold: true,
			auraColor: "",
		},
		alwaysOutside: true,
	},
	backgroundColor: "",
	chartArea: {
		width: "85%",
		height: "85%",
	},
	hAxis: {
		textPosition: "none",
		textStyle: {
			color: "",
		},
	},
	height: 300,
	title: "Spendings",
	titleTextStyle: {
		fontSize: 22,
		color: "",
	},
	tooltip: { isHtml: true }, // Use an HTML tooltip.
	vAxis: {
		textStyle: {
			color: "",
		},
		format: "$###,##0",
	},
  legend: "none"
};

const BarChartCol = () => {
	return <Chart chartType="Bar" data={data} options={options} />;
};

export default BarChartCol;