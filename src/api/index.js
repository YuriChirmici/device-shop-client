import axios from "axios";
import { LOCAL_TOKEN_KEY } from "../utils/consts";

const baseURL = process.env.REACT_APP_API_URL + "api/";
const $host = axios.create({ baseURL });
const $authHost = axios.create({ baseURL });

const authInterceptor = (config) => {
	config.headers.authorization = `Bearer ${localStorage.getItem(LOCAL_TOKEN_KEY)}`;
	return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {
	$host,
	$authHost
}