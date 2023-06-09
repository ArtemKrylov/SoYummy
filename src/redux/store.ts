import { configureStore } from '@reduxjs/toolkit';
import { SoYummyApiSlice } from 'redux/API/SoYummyApiSlice';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    [SoYummyApiSlice.reducerPath]: SoYummyApiSlice.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(SoYummyApiSlice.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
