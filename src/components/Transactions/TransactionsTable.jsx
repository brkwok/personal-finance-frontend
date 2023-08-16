import React, { useEffect, useState } from "react";
import TransactionRow from "./TransactionRow";

const TransactionsTable = ({ transactions }) => {
	return (
		<table>
			<thead>
				<tr>
					<th>Date</th>
					<th>Name</th>
					<th>Category</th>
					<th>Note</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{transactions.map((transaction) => (
					<TransactionRow transaction={transaction} />
				))}
			</tbody>
		</table>
	);
};

export default TransactionsTable;
