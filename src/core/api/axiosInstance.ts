import axios from "axios";
import useAuthStore from "../data/zustand/authStates";

// Retrieve the base url from environment variables or set a default
const baseUrl = process.env.REACT_APP_BASE_URL;

// Create an Axios instance with a base URL and default headers
const axiosInstance = axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 20000,
});

// Add a request interceptor to include the API token and Bearer token in headers
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve tokens and other required information from localStorage

    const token = localStorage.getItem("token"); // Assuming Bearer token is stored here

    // Add Bearer token to request headers if it exists
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
    }
    if (config.data instanceof FormData) {
      // If it's a FormData request, we don't need to set Content-Type manually, it'll be automatially done by axios
      delete config.headers["Content-Type"];
    }

    return config;
  },
  (error) => {
    // Handle request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const clearUser = useAuthStore.getState().clearUser;

    const prevRequest = error?.config;
    if (
      error?.response?.status === 500 &&
      error?.response?.data?.errors === "Unauthenticated." &&
      !prevRequest?.sent
    ) {
      // prevRequest.sent = true;
      localStorage.clear();
      clearUser();
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
