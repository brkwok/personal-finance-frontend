import React, { useEffect, useState } from "react";
import { DOUGHNUT_CHART_OPTIONS } from "../../config/chartOptions";
import ChartLayout from "./ChartLayout";
import { CATEGORY_COLOR_MAP } from "../../helpers/charts";

const chartOptions = DOUGHNUT_CHART_OPTIONS;

const formatAggregation = (aggregationResults, setDefaultOptions) => {
	const header = [
		"Category",
		"Total Amount Spent",
		{ type: "string", role: "tooltip", p: { html: true } },
	];

	const sumTotal = aggregationResults.reduce(
		(acc, curr) => acc + curr.totalAmount,
		0
	);

	const colors = [];

	const rows = aggregationResults.map((aggregation, i) => {
		const total = aggregation.totalAmount;
		const category = aggregation.category;
		const totalAmount = aggregation.totalAmount;
		colors.push(CATEGORY_COLOR_MAP[category][0]);

		return [
			category,
			total,
			getToolTipString(category, totalAmount, totalAmount / sumTotal),
		];
	});

	return [[...header], ...rows];
};

const getToolTipString = (category, amount, percent) => {
	const amountStr = amount.toFixed(2);
	const percentStr = (percent * 100).toFixed(1) + "%";
	return `
  <div style="color: black; margin: 7px; font-size: 13px; font-family: Arial, Helvetica, sans-serif;">
    ${category}<br style="line-height: 18px;" /><b>$${amountStr}&nbsp;(${percentStr})</b>
  </div>
  `;
};

const DoughnutChart = ({ data, colorMap }) => {
	const [options, setOptions] = useState(chartOptions);
	useEffect(() => {
		options.colors = colorMap;
		setOptions(options);
	}, [colorMap, options, setOptions]);

	return (
    colorMap.length !== 0 &&
		<ChartLayout
			chartType="PieChart"
			data={formatAggregation(data)}
			chartOptions={options}
			chartTitle="Distribution"
		/>
	);
};

export default DoughnutChart;
