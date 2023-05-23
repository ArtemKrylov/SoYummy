import { SoYummyApiSlice } from 'redux/API/SoYummyApiSlice';
import { ILogin, ILoginResponse } from 'shared/ts/models/login';
import { IRefresh, IRefreshResponse } from 'shared/ts/models/refresh';
import { ISignUp } from 'shared/ts/models/signup';
import { IUser } from 'shared/ts/models/user';

export const authApiSlice = SoYummyApiSlice.injectEndpoints({
  endpoints: builder => ({
    signUp: builder.mutation<IUser, ISignUp>({
      query: body => ({
        url: 'users/signup',
        method: 'POST',
        body,
      }),
    }),
    login: builder.mutation<ILoginResponse, ILogin>({
      query: body => ({
        url: 'users/login',
        method: 'POST',
        body,
      }),
    }),
    refresh: builder.mutation<IRefreshResponse, IRefresh>({
      query: body => ({
        url: 'users/refresh',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation<void, void>({
      query: () => ({
        url: 'user/logout',
        method: 'POST',
      }),
    }),
    getCurrentUser: builder.query<IUser, void>({
      query: () => ({
        url: 'users/current',
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useRefreshMutation,
  useLogoutMutation,
  useGetCurrentUserQuery,
} = authApiSlice;
