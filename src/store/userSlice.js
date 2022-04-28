import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    token: null,
    isLogedin: false,
  };
  
  const token = localStorage.getItem('auth_token');
  
  
  
  export const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
      auth: (state, action) => {
        if (!action.payload) {
          state = {
            token: null,
          };
          localStorage.removeItem('auth_token');
        } 
  
        return state;
      },
    },
  });