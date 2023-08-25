import React from "react";
import ChartLayout from "./ChartLayout";
import { useSelector } from "react-redux";

const formatAggregation = (aggregationResults) => {
	const header = [
		"Category",
		"Total Amount Spent",
		{ type: "string", role: "tooltip", p: { html: true } },
	];

	const sumTotal = aggregationResults.reduce(
		(acc, curr) => acc + curr.totalAmount,
		0
	);

	const rows = aggregationResults.map((aggregation, i) => {
		const total = aggregation.totalAmount;
		const category = aggregation.category;
		const totalAmount = aggregation.totalAmount;

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
	const defaultDoughnutOptions = useSelector(
		(state) => state.transactions.defaultDoughnutOptions
	);

	return (
		<ChartLayout
			chartType="PieChart"
			data={formatAggregation(data)}
			chartOptions={defaultDoughnutOptions}
			chartTitle="Distribution"
		/>
	);
};

export default DoughnutChart;
