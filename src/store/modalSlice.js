import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  modalState: false,
};

export const modalSlice = createSlice({
  name: "Modal",
  initialState: initialState,
  reducers: {
    toggleModal: (state, action) => {
        const changed = !state.modalState;

        return {modalState:changed};
      
    },
    toggleModalnavigate: (state, action) => {
        if (state.modalState===true){
        const changed = !state.modalState;

        return {modalState:changed}};
      
    },
  },
});

export const modalActions = modalSlice.actions;

export default modalSlice;
