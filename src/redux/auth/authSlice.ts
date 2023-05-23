import { PayloadAction, createSlice } from '@reduxjs/toolkit';
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

export const { updateToken, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
