import API from "./api";

export const fetchPlaidInfo = async () => await API.post("/plaid/info");
export const generateExchangeToken = async () => {
	const accessToken = await API.post("/plaid/link_token");

	return accessToken;
};

export const exchangeToken = async (publicToken, institution, accounts) => {
	const { data } = await API.post("/items", {
		publicToken,
		institutionId: institution.institution_id,
		institutionName: institution.name || "",
		accounts,
	});

	return data;
};
