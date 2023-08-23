import API from "./api";

export const fetchAccounts = async () => {
	try {
		const res = await API.get("/accounts");

		return res.data;
	} catch (err) {
		console.error(err.message);
	}
};