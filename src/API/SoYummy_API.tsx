import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ISignUp } from 'ts/models/signup';
import { User } from 'ts/models/user';

export const SoYummy_API = createApi({
  reducerPath: 'soYummy/api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://so-yumi.p.goit.global/api/' }),
  endpoints: builder => ({
    signUp: builder.mutation<User, ISignUp>({
      query: body => ({
        url: 'users/signup',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const { useSignUpMutation } = SoYummy_API;
