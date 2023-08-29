import axios from "axios";

export const myAxios = axios.create({
	// baseURL: "https://todo-node-api.onrender.com/api/v1",
	baseURL: "http://localhost:3333/api/v1",
	withCredentials: true,
});
