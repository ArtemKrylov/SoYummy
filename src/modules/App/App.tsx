import {} from 'redux/API/SoYummyApiSlice';
import React, { FC, useEffect } from 'react';
import { GlobalStyle } from 'shared/GlobalStyle';
import {
  useGetCurrentUserQuery,
  useLoginMutation,
} from 'redux/auth/authApiSlice';

const App: FC = () => {
  const [userLogIn, { data: loginData, isSuccess: isLoginSuccess }] =
    useLoginMutation();
  const { data: currentUserData, isSuccess: isUserCurrentSuccess } =
    useGetCurrentUserQuery();

  useEffect(() => {
    userLogIn({
      email: 'artemRay@gmail.com',
      password: '1234567',
    });
  }, [userLogIn]);

  return (
    <div className="app">
      {isLoginSuccess && <p>Hello {loginData?.user.name}</p>}
      {isUserCurrentSuccess && <p>Hello {currentUserData?.name}</p>}
      <GlobalStyle />
    </div>
  );
};
export default App;
