import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../utils/axiosBaseQuery";
import { apiUrls } from "../constants/apiUrls";
import { FlightDetail } from "@/components/flightDetailCard/types";

export const flights = createApi({
  reducerPath: "fligts",
  baseQuery: axiosBaseQuery({
    baseUrl: ``,
  }),
  endpoints: (builder) => ({
    getFlights: builder.query<FlightDetail[], void>({
      query: () => {
        return {
          method: "get",
          url: apiUrls.getFlights,
        };
      },
    }),
    getFlightById: builder.query<FlightDetail, {id: string}>({
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
