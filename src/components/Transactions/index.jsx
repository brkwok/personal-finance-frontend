import React, { useEffect, useState } from "react";
import TransactionsTable from "./TransactionsTable";
import useYearRange from "../../hooks/useYearRange";
import DatePicker from "./DatePicker";
import TransactionChart from "./TransactionChart";
import { useDispatch, useSelector } from "react-redux";
import { receiveTransactions } from "../../redux/actions/transactionsActions";

const Transactions = (props) => {
	const transactions = useSelector((state) => state.transactions.transactions);
	const transactionsAggregation = useSelector(
		(state) => state.transactions.aggregation
	);
	const dispatch = useDispatch();
	const [yearRange] = useYearRange();
	const monthRange = Array.from({ length: 12 }, (_, idx) => idx + 1);
	const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
	const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth() + 1);

	useEffect(() => {
		dispatch(receiveTransactions(selectedYear, selectedMonth));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [dispatch]);

	return (
		<div className="w-full h-full text-bluegray-200">
			<div className="flex flex-col h-full">
				<DatePicker
					yearRange={yearRange}
					monthRange={monthRange}
					selectedYear={selectedYear}
					selectedMonth={selectedMonth}
					setSelectedMonth={setSelectedMonth}
					setSelectedYear={setSelectedYear}
				/>
				<div className="h-auto">
					<TransactionChart transactionsAggregation={transactionsAggregation} />
				</div>
				<div className="bg-bluegray-800">
					<TransactionsTable transactions={transactions} />
				</div>
			</div>
		</div>
	);
};

export default Transactions;
