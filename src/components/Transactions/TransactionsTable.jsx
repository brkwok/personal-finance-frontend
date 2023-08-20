import React from "react";
import TransactionRow from "./TransactionRow";

const TransactionsTable = ({ transactions }) => {
	return (
		<div className="text-bluegray-200 w-full h-full min-h-[400px]">
			<div className="p-4 pb-0 text-lg text-red-400">
				<span>Transactions</span>
			</div>
			<table className="table-auto text-left w-full text-sm">
				<thead className="border-b-bluegray-400 border-b">
					<tr className="[&>th]:py-2 [&>th]:px-4">
						<th>Date</th>
						<th>Name</th>
						<th>Amount</th>
						<th>Category</th>
						<th>Note</th>
						<th>Status</th>
					</tr>
				</thead>
				{transactions.length > 0 ? <tbody className="text-sm last:border-b-0">
					{transactions.map((transaction, i) => (
						<TransactionRow transaction={transaction} key={`transaction ${transaction.transactionName} ${i}`}/>
					))}
				</tbody> : null}
			</table>
		</div>
	);
};

export default TransactionsTable;
