import React from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import BarChartCol from "./BarChartCol";

const formatAggregation = (aggregationResults) => {
  const body = aggregationResults.map( aggregation => {
    return [aggregation.category, Math.abs(aggregation.totalAmount)];
  })

  return [["Category", "Total Amount Spent"], ...body];
}

const TransactionChart = ({ transactionsAggregation }) => {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-center min-h-[290px] pb-8">
      <DoughnutChart data={formatAggregation(transactionsAggregation)}/>
      <BarChartCol />
      <BarChart />
		</div>
	);
};

export default TransactionChart;
