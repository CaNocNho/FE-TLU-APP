import axios from "axios";
import { STATUS_CODE } from "../constants/statusCode";
import { STORAGE } from "../constants/storage";
import { getItemStorage } from "../utils/storage";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json"
  },
});

axiosClient.interceptors.request.use(async (config: any) => {
  const token = getItemStorage(STORAGE.ACCESS_TOKEN);

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosClient.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === STATUS_CODE.UNAUTHORIZED) {
      // Handle unauthorized access
      return Promise.reject(error.response);
    } else if (error.response && error.response.status === STATUS_CODE.VALIDATION) {
      // Handle validation errors
      return Promise.reject(error.response);
    } else {
      return Promise.reject(error.response);
    }
  },
);

export default axiosClient;
