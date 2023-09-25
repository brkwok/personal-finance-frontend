import API from "./api";

export const fetchAccounts = async () => {
	try {
		const res = await API.get("/accounts");

		if (res.status === 500) {
			throw new Error(res.data.message)
		}

		return res.data;
	} catch (err) {
		console.error(err.message);
		throw new Error(err.message)
	}
};