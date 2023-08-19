import React from "react";
import { Chart } from "react-google-charts";

const data = [
  ["City", "2010 Population", "2000 Population"],
  ["New York City, NY", 8175000, 8008000],
  ["Los Angeles, CA", 3792000, 3694000],
  ["Chicago, IL", 2695000, 2896000],
  ["Houston, TX", 2099000, 1953000],
  ["Philadelphia, PA", 1526000, 1517000],
];

const options = {
	animation: {
		startup: true,
		duration: 1000,
		easing: 'out',
	},
	annotations: {
		textStyle: {
			color: '',
			bold: true,
			auraColor: '',
		},
		alwaysOutside: true,
	},
	backgroundColor: '',
	bar: { groupWidth: '60%' },
	chartArea: {
		width: '77%',
		height: '80%',
	},
	hAxis: {
		textStyle: {
			color: '',
		},
		format: '$###,##0',
		viewWindowMode: 'maximized',
	},
	height: 300,
	isStacked: true,
	legend: 'none',
	series: [],
	title: 'Monthly Total',
	titleTextStyle: {
		fontSize: 22,
		color: '',
	},
	tooltip: { isHtml: true }, // Use an HTML tooltip.
	vAxis: {
		textStyle: {
			color: '',
		},
	},
};

const BarChart = () => {
  return (
    <Chart
      chartType="BarChart"
      data={data}
      options={options}
    />
  );
}

export default BarChart;