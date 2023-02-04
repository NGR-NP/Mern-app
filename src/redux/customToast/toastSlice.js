import { createSlice } from "@reduxjs/toolkit";

const toastSlice = createSlice({
  name: "toast",
  initialState: {
    message: null,
    type: null,
    visible: false,
  },
  reducers: {
    showToastMessage: (state, action) => {
      const { message, type } = action.payload;
      state.message = message;
      state.type = type;
      state.visible = true;
    },
    hideToastMessage: (state) => {
      state.message = null;
      state.visible = false;
      state.type = null;
    },
  },
});

export const { showToastMessage, hideToastMessage } = toastSlice.actions;

export default toastSlice.reducer;

export const selectCurrentVisible = (state) => state.toast.visible;
export const selectCurrentMessage = (state) => state.toast.message;
export const selectCurrentType = (state) => state.toast.type;
