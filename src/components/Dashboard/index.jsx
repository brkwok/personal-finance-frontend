import React, { useEffect } from "react";
import PlaidLinkSet from "./PlaidLinkSet";
import { setLoading } from "../../redux/actions/loadingActions";
import { useDispatch, useSelector } from "react-redux";
import { receiveAccounts } from "../../redux/actions/accountsActions";
import Accounts from "./Accounts";

const Dashboard = () => {
	const dispatch = useDispatch();
	const accounts = useSelector(state => state.accounts);

	useEffect(() => {
		dispatch(setLoading());
		dispatch(receiveAccounts());
	}, [dispatch]);

	return (
		<div className='flex justify-start items-center flex-col'>
			<Accounts accounts={accounts} />
			<PlaidLinkSet />
		</div>
	);
};

export default Dashboard;
