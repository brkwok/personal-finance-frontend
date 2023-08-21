import React, { useState, useEffect } from "react";
import DoughnutChart from "./DoughnutChart";
import BarChart from "./BarChart";
import BarChartCol from "./BarChartCol";
import { CATEGORY_COLOR_MAP } from "../../helpers/charts";
import ChartLegend from "./ChartLegend";
import { useSelector } from "react-redux";

const TransactionChart = ({ transactionsAggregation, categories }) => {
	const { currentMonthAggregation } = transactionsAggregation;
	const loading = useSelector((state) => state.transactions.loading);
	const [doughnutColorMap, setDoughnutColorMap] = useState([]);
	const colorMap = CATEGORY_COLOR_MAP;

	useEffect(() => {
		const colors = [];
		currentMonthAggregation.forEach((aggregation, i) => {
			colors.push(CATEGORY_COLOR_MAP[aggregation.category][0]);
		});

		setDoughnutColorMap(colors);
	}, [currentMonthAggregation]);

	return (
		categories.length !== 0 && !loading && (
			<div className="w-full flex flex-col">
				<div className="grid grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 items-center justify-center pb-8 min-h-[290px]">
					<DoughnutChart
						data={currentMonthAggregation}
						colorMap={doughnutColorMap}
					/>
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
				<ChartLegend />
			</div>
		)
	);
};

export default TransactionChart;
