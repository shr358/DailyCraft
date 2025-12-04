import { configureStore } from '@reduxjs/toolkit';
import memberReducer from './memberSlice';

export const store = configureStore({
  reducer: {
    membership: memberReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
