import API from "./api";

export const fetchTransactions = async (year, month) =>
	await API.post("/transactions", { year: year, month: month });

export const fetchDateRange = async () => {
  const data = await API.get("/transactions/range");

  return data;
}