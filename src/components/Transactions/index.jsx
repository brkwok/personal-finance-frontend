import React, { useEffect, useState } from "react";
import TransactionsTable from "./TransactionsTable";

const Transactions = (props) => {
	const [transactions, setTransactions] = useState([]);

	useEffect();

	return (
		<div>
			<TransactionsTable transactions={transactions} />
		</div>
	);
};

export default Transactions;
