import React, { useCallback, useEffect } from "react";
import { usePlaidLink } from "react-plaid-link";
import { setAccessToken } from "../../api";

const PlaidLink = (props) => {
	const onSuccess = useCallback((publicToken, metadata) => {
		const res = setAccessToken(publicToken, metadata)
      .then( body => {
        console.log(body);
      })
	}, []);

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
