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
    add: () => {
      // Logic to add item to the cart
    },
    remove: () => {
      // Logic to remove item from the cart
    },
    // Other reducers can be added here
  },
});

export const { add, remove } = cartSlice.actions;
export default cartSlice.reducer;
