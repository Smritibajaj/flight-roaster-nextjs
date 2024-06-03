import { message } from "@/constants/message";
import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";
import toast from "react-hot-toast";

const axiosInstance: AxiosInstance = axios.create();
axios.defaults.baseURL = "";
axiosInstance.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (config.headers) {
      if (!config.headers["Content-Type"]) {
        config.headers["Content-Type"] = "application/json";
      }
    }

    return config;
  }
);
axiosInstance.interceptors.response.use(
  (response): any => {
    toast.success(message.success);
    return response.data;
  },
  (error: AxiosError): Promise<never> => {
    console.error(error);
    toast.error(message.error);
    return Promise.reject({
      status: error?.response?.status,
      message: "",
    });
  }
);
export default axiosInstance;
