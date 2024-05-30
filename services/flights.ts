import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../utils/axiosBaseQuery";
import { apiUrls } from "../constants/apiUrls";

export const flights = createApi({
  reducerPath: "fligts",
  baseQuery: axiosBaseQuery({
    baseUrl: ``,
  }),
  endpoints: (builder) => ({
    getFlights: builder.query<any[], void>({
      query: () => {
        return {
          method: "get",
          url: apiUrls.getFlights,
        };
      },
    }),
    getFlightById: builder.query<any[], void>({
      query: (args: any) => {
        const { id } = args;
        return {
          method: "get",
          url: `${apiUrls.getFlightsById}/${id}`,
        };
      },
    }),
  }),
});

export const { useGetFlightsQuery, useGetFlightByIdQuery } = flights;
