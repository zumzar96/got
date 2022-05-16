import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogedin: false,
  };
  
  
  
  
export const userSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
      login: (state, action) => {
        if (action.payload) {
          state = {
            token:localStorage.setItem('auth_token', JSON.stringify(action.payload)),
            isLogedin : true,
            };
        } 
  
        return state;
      },
    },
  });

export const userActions = userSlice.actions;

export default userSlice;
