import API from "./api";

export const getSessionInfo = async () => await API.get("/auth/user");
export const signInGoogle = async () => await API.get("/login/federated/google");
export const demoLogin = async (username, password) =>
	await API.post("/auth/demo", { username, password });
export const logOutUser = async () => API.post("/auth/logout");