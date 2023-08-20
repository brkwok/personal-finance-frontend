import React from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import BarChartCol from "./BarChartCol";

const TransactionChart = ({ transactionsAggregation, categories }) => {
  const { currentMonthAggregation } = transactionsAggregation;

	return (
		<div className="grid grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-center pb-8 min-h-[290px]">
			<DoughnutChart data={currentMonthAggregation} />
			<BarChartCol data={transactionsAggregation} categories={categories} />
			<BarChart data={transactionsAggregation} categories={categories} />
		</div>
	);
};

export default TransactionChart;
