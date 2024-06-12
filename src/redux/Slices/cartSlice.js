import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // Logic to add item to the cart
    },
    removeItem(state, action) {
      // Logic to remove item from the cart
    },
    // Other reducers can be added here
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
