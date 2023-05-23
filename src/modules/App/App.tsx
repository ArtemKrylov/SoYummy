import { useRefreshMutation } from 'API/SoYummy_API';
import React, { FC, useEffect } from 'react';
import { GlobalStyle } from 'shared/GlobalStyle';

const App: FC = () => {
  // const [userLogIn, { isLoading: isLoginLoading, isLogin:isLoginError, data: loginData }] = useLoginMutation();

  const [
    userRefresh,
    {
      isLoading: isRefreshLoading,
      isError: isRefreshError,
      error: refreshError,
      data: refreshData,
    },
  ] = useRefreshMutation();

  // useEffect(() => {
  //   userLogIn({
  //     email: 'artemRay@gmail.com',
  //     password: '1234567',
  //   });
  // }, [userLogIn]);

  useEffect(() => {
    userRefresh({
      refreshToken:
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NTE0OWEwOWUyOTg2ZmE3YzQ1MDE5ZiIsImlhdCI6MTY4NDc0MzU0MiwiZXhwIjoxNjg0ODI5OTQyfQ.1mxjQClWu0fBAmrhnnN31jy522EiBHTehJstf-bVdhM',
    });
  }, [userRefresh]);

  // console.log({ isLoading, isError, data });
  console.log({ isRefreshLoading, isRefreshError, refreshData, refreshError });

  return (
    <div className="app">
      <GlobalStyle />
    </div>
  );
};
export default App;
