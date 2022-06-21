import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './userSlice'
import { cartSlice } from './cartSlice';

export const rootReducer = combineReducers({
  user: userSlice.reducer,cart: cartSlice.reducer,
});
