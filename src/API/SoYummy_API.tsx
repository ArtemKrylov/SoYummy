import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  createApi,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import { logout, updateToken } from 'redux/auth/authSlice';
import { RootState } from 'redux/store';
import { ILogin, ILoginResponse } from 'shared/ts/models/login';
import { IRefresh } from 'shared/ts/models/refresh';
import { ISignUp } from 'shared/ts/models/signup';
import { IUser } from 'shared/ts/models/user';

const baseQuery = fetchBaseQuery({
  baseUrl: 'https://so-yumi.p.goit.global/api/',
  credentials: 'include',
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.token;
    //adding access token to Authorization header
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReAuth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
  //if unauthorized (401 status) - access token expired
  if (result.error && result.error.status === 401) {
    //refreshing access token
    const refreshResult: any = await baseQuery(
      'users/refresh',
      api,
      extraOptions
    );
    if (refreshResult?.data) {
      //store the new access token
      api.dispatch(updateToken(refreshResult.data.accessToken));
      //retrying the initial query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      //if refresh failed - logout user
      api.dispatch(logout());
    }
  }
  return result;
};

export const SoYummy_API = createApi({
  reducerPath: 'soYummy/api',
  baseQuery: baseQueryWithReAuth,
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
