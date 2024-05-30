import { BaseQueryFn } from "@reduxjs/toolkit/query";
import { AxiosRequestConfig, AxiosError } from "axios";
import axiosInstance from "./axiosInstance";

export const axiosBaseQuery =
  (
    { baseUrl }: { baseUrl: string } = { baseUrl: "" }
  ): BaseQueryFn<
    {
      url: string;
      method: AxiosRequestConfig["method"];
      data?: AxiosRequestConfig["data"];
      params?: AxiosRequestConfig["params"];
      headers?: AxiosRequestConfig["headers"];
    },
    unknown,
    unknown
  > =>
  async ({ url, method, params, data, headers }) => {
    try {
      const result = await axiosInstance({
        url: baseUrl + url,
        method,
        data,
        params,
        headers,
      });
      return { data: result };
    } catch (axiosError) {
      let err = axiosError as AxiosError;
      return {
        error: {
          status: err?.status,
          data: err?.response?.data ?? err?.message,
        },
      };
    }
  };
