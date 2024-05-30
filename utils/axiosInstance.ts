import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosError,
} from "axios";

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
  (response): any => response.data,
  (error: AxiosError): Promise<never> => {
    console.error(error);
    return Promise.reject({
      status: error?.response?.status,
      message: "",
    });
  }
);
export default axiosInstance;
