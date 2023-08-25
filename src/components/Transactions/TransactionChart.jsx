import React from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import BarChartCol from "./BarChartCol";
import ChartLegend from "./ChartLegend";
import { useSelector } from "react-redux";

const TransactionChart = ({
	transactionsAggregation,
	categories,
	colorMap,
}) => {
	const { currentMonthAggregation } = transactionsAggregation;
	const isLoading = useSelector((state) => state.ui.isLoading);

	return (
		<div className="w-full flex flex-col">
			<div className="grid grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-center pb-8 min-h-[290px]">
				{!isLoading && <DoughnutChart data={currentMonthAggregation} />}
				<BarChartCol
					data={transactionsAggregation}
					categories={categories}
					colorMap={colorMap}
				/>
				<BarChart
					data={transactionsAggregation}
					categories={categories}
					colorMap={colorMap}
				/>
			</div>
			<ChartLegend colorMap={colorMap} />
		</div>
	);
};

export default TransactionChart;
