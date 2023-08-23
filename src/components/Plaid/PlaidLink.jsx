import React, { useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import { exchangeToken } from "../../api/linkToken";
import { useDispatch } from "react-redux";
import { finishLoading, setLoading } from "../../redux/actions/loadingActions";
import { receiveAccounts } from "../../redux/actions/accountsActions";

const PlaidLink = (props) => {
	const dispatch = useDispatch();

	const onSuccess = async (publicToken, metadata) => {
		try {
			dispatch(setLoading());
			await exchangeToken(publicToken, metadata.institution, metadata.accounts);
			dispatch(receiveAccounts());
			dispatch(finishLoading());
		} catch (err) {
			console.error(err.message);
		}
	};

	const config = {
		token: props.linkToken,
		onSuccess,
	};

	let isOauth = false;

	if (window.location.href.includes("?oauth_state_id=")) {
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
				<span>Link New Account with Plaid</span>
			</button>
		</div>
	);
};

export default PlaidLink;
