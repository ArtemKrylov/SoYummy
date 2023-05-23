import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ILoginResponse } from 'shared/ts/models/login';
import { IUser } from 'shared/ts/models/user';

interface IAuthInitialState {
  user: IUser | null;
  token: string | null;
}

const authInitialState: IAuthInitialState = {
  user: null,
  token: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authInitialState,
  reducers: {
    setCredentials: (state, action: PayloadAction<ILoginResponse>) => {
      const { user, accessToken } = action.payload;
      if (user && accessToken) {
        state.user = user;
        state.token = accessToken;
      }
    },
    updateToken: (state, action: PayloadAction<string | null>) => {
      const accessToken = action.payload;
      state.token = accessToken;
    },
    logout: state => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { updateToken, logout, setCredentials } = authSlice.actions;
export const authReducer = authSlice.reducer;
