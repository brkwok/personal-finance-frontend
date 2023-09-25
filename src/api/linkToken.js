import API from "./api";

export const fetchPlaidInfo = async () => await API.post("/plaid/info");
export const generateExchangeToken = async () => {
	const res = await API.post("/plaid/link_token");
	const data = res.data

	return data;
};

export const exchangeToken = async (publicToken, institution, accounts) => {
	const res = await API.post("/items", {
		publicToken,
		institutionId: institution.institution_id,
		institutionName: institution.name || "",
		accounts,
	});
	const data = res.data;

	if (res.status === 409) {
		
	}

	return data;
};
