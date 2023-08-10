import React, { useEffect, useState } from "react";
import { exchangeToken } from "../../api";
import PlaidLink from "../Plaid/PlaidLink";

const Dashboard = () => {
	const [linkToken, setLinkToken] = useState(null);

	const generateToken = async () => {
		try {
			const response = await exchangeToken();

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
			hidden
			{
				linkToken && <PlaidLink linkToken={linkToken} />
			}
		</div>
	)
};

export default Dashboard;
