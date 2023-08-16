import React from "react";

const TransactionRow = ({ transaction }) => {
	const { transactionDate, transactionName, category, note, pending } =
		transaction;

	return (
		<tr>
			<td>{transactionDate}</td>
			<td>{transactionName}</td>
			<td>{category}</td>
			<td>{note}</td>
			<td>{pending}</td>
		</tr>
	);
};

export default TransactionRow;
