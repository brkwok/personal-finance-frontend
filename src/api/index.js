import axios from "axios";

const API = axios.create({
	baseURL: "http://localhost:5000",
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

export const logOutUser = async () => API.post("/auth/logout");
