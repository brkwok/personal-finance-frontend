import React, { useEffect, useState } from "react";
import { usePlaidLink } from "react-plaid-link";
import { exchangeToken } from "../../api/linkToken";
import { useDispatch, useSelector } from "react-redux";
import { finishLoading, setLoading } from "../../redux/actions/loadingActions";
import { receiveAccounts } from "../../redux/actions/accountsActions";

const PlaidLink = (props) => {
	const [isDemo, setIsDemo] = useState(false);
	const dispatch = useDispatch();
	const user = useSelector((state) => state.session.user);

	useEffect(() => {
		if (user?.displayName) {
			setIsDemo(true);
		}
	}, [user]);

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
		<div className="bg-bluegray-700 w-fit flex items-center justify-center relative group">
			<button
				onClick={() => open()}
				disabled={!ready}
				className="bg-bluegray-200 text-black rounded-lg w-[300px] flex justify-center items-center h-[50px] hover:bg-bluegray-300 hover:text-bluegray-700 transition-all"
			>
				<span>Link New Account with Plaid</span>
			</button>
			{isDemo && (
				<div className="py-2 invisible group-hover:visible transition-all rounded-lg absolute bg-bluegray-200 top-16 text-sm flex justify-center items-center flex-col [&>*>span]:text-red-500">
					<div className="text-center text-red-500">When prompted for login for demo account</div>
					<div>
						Username: <span>user_good</span>
					</div>
					<div>
						Password: <span>pass_good</span>
					</div>
					<div>
						Mobile Code: <span>1234</span>
					</div>
				</div>
			)}
		</div>
	);
};

export default PlaidLink;
