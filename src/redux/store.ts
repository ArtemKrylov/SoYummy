import { configureStore } from '@reduxjs/toolkit';
import { SoYummy_API } from 'API/SoYummy_API';
import { authReducer } from './auth/authSlice';

export const store = configureStore({
  reducer: {
    [SoYummy_API.reducerPath]: SoYummy_API.reducer,
    auth: authReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(SoYummy_API.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
