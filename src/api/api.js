import axios from "axios";

const API = axios.create({
	baseURL: "https://mern-personal-finance-backend.azurewebsites.net",
	withCredentials: true
});

export default API;
