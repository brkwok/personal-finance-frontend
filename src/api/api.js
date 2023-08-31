import axios from "axios";

// baseURL: "https://mern-personal-finance-backend.azurewebsites.net",
const API = axios.create({
	baseURL: "https://localhost:5000",
	withCredentials: true,
});

export default API;
