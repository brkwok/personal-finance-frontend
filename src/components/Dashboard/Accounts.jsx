import React from "react";
import Account from "./Account";
import SlideContainer from "../UI/SlideContainer";

const Accounts = ({ accounts }) => {
	return (
		<div className="w-full">
      <h1 className="text-bluegray-200 pb-2 flex justify-center">Linked Accounts</h1>
			<div className="flex flex-wrap justify-center text-bluegray-300">
				{Object.keys(accounts).map((institutionName, idx) => {
					return (
						<div key={`${idx} items}`} className="bg-bluegray-800 p-4 min-w-[350px] max-w-[400px] space-y-2 space-x-2 mr-2 mb-2">
							<h2>{institutionName}</h2>
							<SlideContainer>
								{accounts[institutionName].map((account, i) => {
									return <Account key={`${i} account-container`} account={account} />;
								})}
							</SlideContainer>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Accounts;
