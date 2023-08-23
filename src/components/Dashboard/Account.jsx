import React from "react";

const capitalize = (str) => {
	const firstLetter = str.charAt(0);
	const remaining = str.slice(1);

	return firstLetter.toUpperCase() + remaining;
};

const Account = ({ account }) => {
	const { name, type, subtype, mask, currentBalance, availableBalance } =
		account;
	const accountFullType =
		capitalize(type || "") + " " + capitalize(subtype || "");

	return (
		<div className="w-full flex flex-col text-sm space-y-2">
			<div className="flex flex-row items-center justify-between w-full">
				<h2>{name}</h2>
				<h2>{accountFullType}</h2>
			</div>
			<div className="flex flex-row items-center justify-between w-full">
				<span>Account Number</span>
				<div>...{mask}</div>
			</div>
			<div className="flex flex-row items-center justify-between w-full">
				<span>Current Balance</span>
				<div>${currentBalance}</div>
			</div>
			<div className="flex flex-row items-center justify-between w-full">
				<span>Available Balance</span>
				<div>${availableBalance}</div>
			</div>
		</div>
	);
};

export default Account;
