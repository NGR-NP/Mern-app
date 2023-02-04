import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    product: [],
    qty: 0,
    total: 0,
    estimateShippingCharge: 0,
    discountedShippingFree: 0,
    priceAfterDiscount: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      const { price, qty } = action.payload;
      const calcTotal = price * qty;
      state.qty += 1;
      state.product.push(action.payload);
      state.total += calcTotal;
    },
    removeProductFromCart: (state, action) => {
      const { id } = action.payload;
      state.product = state.product.filter((product) => product._id !== id);
      state.qty -= 1;
    },
    incrementProductQty: (state, action) => {
      const { id } = action.payload;
      const product = state.product.find((product) => product._id === id);
      product.qty += 1;
      state.qty += 1;
      state.total += product.price;
    },
    decremenProductQty: (state, action) => {
      const { id } = action.payload;
      const product = state.product.find((product) => product._id === id);
      product.qty -= 1;
      state.qty -= 1;
      state.total -= product.price;
    },
    calculateShipping: (state, action) => {
      const { shipFee, shipDis } = action.payload;
      
      state.estimateShippingCharge = Math.trunc(shipFee);
      state.discountedShippingFree = Math.trunc(shipDis);
      state.priceAfterDiscount =
        state.total +
        state.estimateShippingCharge -
        state.discountedShippingFree;
    },
    emptyCart: (state, action) => {
      state.product = [];
      state.qty = 0;
      state.total = 0;
      state.estimateShippingCharge = 0;
      state.discountedShippingFree = 0;
    },
  },
});
export const {
  addProductToCart,
  removeProductFromCart,
  incrementProductQty,
  decremenProductQty,
  calculateShipping,
  emptyCart,
} = cartSlice.actions;

export default cartSlice.reducer;
export const selectCurrentCart = (state) => state.cart;
export const selectCurrenttotal = (state) => state.cart.total;
export const selectCurrentQty = (state) => state.cart.qty;
export const selectCurrentProduct = (state) => state.cart.product;
export const selectCurrentshippingCharge = (state) =>
  state.cart.estimateShippingCharge;
export const selectCurrentdiscount = (state) =>
  state.cart.discountedShippingFree;
export const selectCurrentPriceAfterDiscount = (state) => state.cart.priceAfterDiscount;
