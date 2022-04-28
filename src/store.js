import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './store/rootReducer';

export const store = configureStore({
  reducer: rootReducer,
});
