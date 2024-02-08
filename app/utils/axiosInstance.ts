import axios from "axios";
import { API_KEY, BASE_URL } from "../constants/constants";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    Authorization: `bearer ${API_KEY}`,
    timeout: 5000,
  },
});

export default axiosInstance;
