import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ILogin, ILoginResponse } from 'ts/models/login';
import { IRefresh } from 'ts/models/refresh';
import { ISignUp } from 'ts/models/signup';
import { IUser } from 'ts/models/user';

export const SoYummy_API = createApi({
  reducerPath: 'soYummy/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://so-yumi.p.goit.global/api/' }),
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
    refresh: builder.mutation<any, IRefresh>({
      query: body => ({
        url: 'users/refresh',
        method: 'POST',
        body,
      }),
    }),
    logout: builder.mutation<any, any>({
      query: () => ({
        url: 'user/logout',
        method: 'POST',
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useLoginMutation,
  useRefreshMutation,
  useLogoutMutation,
} = SoYummy_API;
