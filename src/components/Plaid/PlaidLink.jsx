import React, { useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import { exchangeToken } from "../../api/linkToken";

const PlaidLink = (props) => {
	const onSuccess = async (publicToken, metadata) => {
		const res = await exchangeToken(
			publicToken,
			metadata.institution,
			metadata.accounts
		);

		console.log(res);
	};

	const config = {
		token: props.linkToken,
		onSuccess,
	};

	let isOauth = false;

	if (window.location.href.includes("?oauth_state_id=")) {
		// TODO: figure out how to delete this ts-ignore
		// @ts-ignore
		config.receivedRedirectUri = window.location.href;
		isOauth = true;
	}

	const { open, ready } = usePlaidLink(config);

	useEffect(() => {
		if (isOauth && ready) {
			open();
		}
	}, [ready, open, isOauth]);

	return (
		<div className="bg-bluegray-700 flex items-center justify-center">
			<button
				onClick={() => open()}
				disabled={!ready}
				className="bg-bluegray-200 text-black rounded-lg w-[300px] flex justify-center items-center h-[50px] hover:bg-bluegray-300 hover:text-bluegray-700 transition-all"
			>
				<span>Link Account with Plaid</span>
			</button>
		</div>
	);
};

export default PlaidLink;
