import { apiSlice } from "../app/api/apiSlice";

export const productApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ catg, id }) =>
        catg
          ? `/products?category=${catg}`
          : id
          ? `/products/${id}`
          : "/products",
      keepUnusedDataFor: 5,
    }),
  }),
});
export const { useGetProductsQuery } = productApiSlice;
