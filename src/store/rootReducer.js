import { combineReducers } from '@reduxjs/toolkit';
import { userSlice } from './userSlice'
import { cartSlice } from './cartSlice';
import { modalSlice} from './modalSlice';

export const rootReducer = combineReducers({
  user: userSlice.reducer, cart: cartSlice.reducer, modal: modalSlice.reducer,
});
