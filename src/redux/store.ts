import { configureStore } from '@reduxjs/toolkit';
import { SoYummy_API } from 'API/SoYummy_API';

export const store = configureStore({
  reducer: {
    [SoYummy_API.reducerPath]: SoYummy_API.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(SoYummy_API.middleware),
});
