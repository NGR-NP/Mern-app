import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
  },
  reducers: {
    //DELETE
    deleteProduct: (state, action) => {
      state.products.splice(
        state.products.findIndex((item) => item._id === action.payload),
        1
      );
    },
    //UPDATE
    updateProduct: (state, action) => {
      state.products[
        state.products.findIndex((item) => item._id === action.payload.id)
      ] = action.payload.product;
    },
    //UPDATE
    addProduct: (state, action) => {
      state.isFetching = false;
      state.products.push(action.payload);
    },
  },
});

export const { deleteProduct, updateProduct, addProduct } =
  productSlice.actions;

export default productSlice.reducer;
export const selectCurrentProduct = (state) => state.product;
