import API from "./api";

export const fetchTransactions = async (year, month) => {
	try {
		const res = await API.post("/transactions", { year: year, month: month });
		const data = res.data;

		return data;
	} catch (err) {
		console.error(err.message);
	}
};

export const fetchDateRange = async () => {
	const data = await API.get("/transactions/range");

	return data;
};
