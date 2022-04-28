import { combineReducers } from '@reduxjs/toolkit';
import { authSlice } from './userSlice'

export const rootReducer = combineReducers({
  user: authSlice.reducer
});
