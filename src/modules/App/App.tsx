import {} from 'redux/API/SoYummyApiSlice';
import React, { FC, useEffect } from 'react';
import { GlobalStyle } from 'shared/GlobalStyle';
import { useLoginMutation } from 'redux/auth/authApiSlice';
import { setCredentials } from 'redux/auth/authSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';

const App: FC = () => {
  const dispatch = useAppDispatch();
  const [userLogIn, { data: loginData, isSuccess: isLoginSuccess }] =
    useLoginMutation();

  useEffect(() => {
    userLogIn({
      email: 'artemRay@gmail.com',
      password: '1234567',
    });
  }, [userLogIn]);

  useEffect(() => {
    isLoginSuccess && dispatch(setCredentials({ ...loginData }));
  }, [dispatch, isLoginSuccess, loginData]);

  return (
    <div className="app">
      {isLoginSuccess && <p>Hello {loginData?.user?.name}</p>}
      <GlobalStyle />
    </div>
  );
};
export default App;
