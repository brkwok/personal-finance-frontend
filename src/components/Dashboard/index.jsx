import React, { useEffect, useState } from "react";
import { generateExchangeToken } from "../../api/linkToken";
import PlaidLink from "../Plaid/PlaidLink";
import { fetchDateRange } from "../../api/transaction";

import DatePicker from "../Transactions/DatePicker";

const Dashboard = () => {
	const [linkToken, setLinkToken] = useState(null);

	const generateToken = async () => {
		try {
			const response = await generateExchangeToken();

			const data = response.data;

			setLinkToken(data.link_token);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		generateToken();
	}, []);

	return (
		<div>
			<DatePicker />
			{linkToken && <PlaidLink linkToken={linkToken} />}
		</div>
	);
};

export default Dashboard;
