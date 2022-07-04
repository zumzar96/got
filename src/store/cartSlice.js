import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: localStorage.getItem("cart")
    ? JSON.parse(localStorage.getItem("cart"))
    : [],
  totalAmount: localStorage.getItem("totalAmnt")
    ? JSON.parse(localStorage.getItem("totalAmnt"))
    : 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState: initialState,
  reducers: {
    addtoCart: (state, action) => {
      const updatedTotalAmount =
        state.totalAmount + action.payload.price * action.payload.amount;

      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingCartItem = state.items[existingCartItemIndex];
      let updatedItems;

      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + action.payload.amount,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      } else {
        updatedItems = state.items.concat(action.payload);
      }

      localStorage.setItem("cart", JSON.stringify(updatedItems));
      localStorage.setItem("totalAmnt", JSON.stringify(updatedTotalAmount));
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    },
    removefromCart: (state, action) => {
      const existingCartItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      );
      const existingItem = state.items[existingCartItemIndex];
      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems;
      if (existingItem.amount === 1) {
        updatedItems = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      } else {
        const updatedItem = {
          ...existingItem,
          amount: existingItem.amount - 1,
        };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      localStorage.setItem("totalAmnt", JSON.stringify(updatedTotalAmount));
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    },
    clearCart: (state, action) => {
      const updatedItems = [];
      const updatedTotalAmount = 0;
      localStorage.setItem("cart", JSON.stringify(updatedItems));
      localStorage.setItem("totalAmnt", JSON.stringify(updatedTotalAmount));
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
