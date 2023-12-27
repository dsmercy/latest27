import axios from "axios";
// import { baseUrl as baseURL } from "config/base.url";
import { Base_url } from "../../Utility/AuthUtitility";

const axiosPrivate = axios.create({
  Base_url,
  headers: {
    "Content-type": "application/json",
  },
});

axiosPrivate.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    config.headers["Authorization"] = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosPrivate.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response?.status === 400) {
      localStorage.clear();
      window.location = "/login";
    }
   
    return Promise.reject(error);
  }
);

export default axiosPrivate;