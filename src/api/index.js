import axios from "axios";

const API = axios.create({
	baseURL: "https://localhost:5000",
	withCredentials: true,
});

export const signInGoogle = () => API.get("/login/federated/google");

export const getSessionInfo = async () => {
	try {
		const user = await API.get("/auth/user");

		const data = user.data;

		return data;
	} catch (error) {
		console.error("Error fetching session info", error);

		throw new Error("An error occured while fetching user information");
	}
};

export const demoLogin = async () => {
	try {
		const user = await API.post("/auth/demo", {
			username: "demo",
			password: "123456",
		});

		const data = user.data

		return data;
	} catch (error) {
		console.error("Error fetching session info", error);

		throw new Error("An error occured while fetching user information");
	}
};

export const logOutUser = async () => API.post("/auth/logout");

export const exchangeToken = async () => {
	const accessToken = await API.post("/plaid/exchange_token");

	return accessToken;
};

export const fetchPlaidInfo = async () => {
	const info = await API.post("/plaid/info");

	return info;
};

export const setAccessToken = async (accessToken, metadata) => {
	return API.post("/plaid/set_access_token", {
		access_token: accessToken,
		metadata,
	});
};
