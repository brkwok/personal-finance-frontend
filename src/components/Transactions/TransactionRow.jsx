import React from "react";

const formatAmount = (amount) => {
	const abs = Math.abs(amount);
	return amount >= 0 ? `+$${abs}` : `-$${abs}`
}

const formatDate = (date) => {
	return new Date(date).toISOString().split('T')[0];
}

const TransactionRow = ({ transaction }) => {
	const { transactionDate, transactionName, category, amount, note, pending } =
		transaction;


	return (
		<tr className="[&>td]:p-4 border-b border-b-bluegray-400">
			<td>{formatDate(transactionDate)}</td>
			<td>{transactionName}</td>
			<td className={`${amount >= 0 ? "text-green-400" : "text-red-400"}`}>{formatAmount(amount)}</td>
			<td>{category === null ? "Other" : category}</td>
			<td>{note}</td>
			<td>{pending ? "Pending" : "Processed"}</td>
		</tr>
	);
};

export default TransactionRow;
