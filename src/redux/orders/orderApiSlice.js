import { apiSlice } from "../app/api/apiSlice";

export const orderApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    order: builder.mutation({
      query: (credentials) => ({
        url: "/orders",
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});
export const { useOrderMutation } = orderApiSlice;
