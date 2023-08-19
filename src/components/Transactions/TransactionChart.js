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
		<div className="grid grid-cols-3 items-center justify-center">
      <DoughnutChart data={formatAggregation(transactionsAggregation)}/>
      <BarChartCol />
      <BarChart />
		</div>
	);
};

export default TransactionChart;
