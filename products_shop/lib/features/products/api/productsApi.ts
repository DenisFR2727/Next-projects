import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts, IProductsResponse } from "@/lib/types";

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (build) => ({
    getProducts: build.query<IProducts[], void>({
      query: () => "/products",
      transformResponse: (response: IProductsResponse) => response.products,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
