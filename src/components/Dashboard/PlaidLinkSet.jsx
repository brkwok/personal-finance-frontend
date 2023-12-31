import React, { useEffect, useState } from "react";
import { generateExchangeToken } from "../../api/linkToken";
import PlaidLink from "../Plaid/PlaidLink";

const PlaidLinkSet = () => {
	const [linkToken, setLinkToken] = useState(null);

	const generateToken = async () => {
		try {
			const data = await generateExchangeToken();

			setLinkToken(data.link_token);
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		generateToken();
	}, []);

	return (
		<div className="">
			{linkToken && <PlaidLink linkToken={linkToken} />}
		</div>
	);
};

export default PlaidLinkSet;
