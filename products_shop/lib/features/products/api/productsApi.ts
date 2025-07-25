import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IProducts, IProductsResponse } from "@/lib/types";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (build) => ({
    getProducts: build.query<IProducts[], void>({
      query: () => "/products",
      transformResponse: async (response: IProductsResponse) => {
        await new Promise((res) => setTimeout(res, 3000));
        return response.products;
      },
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
