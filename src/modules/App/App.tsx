import { useRefreshMutation } from 'API/SoYummy_API';
import React, { FC, useEffect } from 'react';
import { GlobalStyle } from 'shared/GlobalStyle';

const App: FC = () => {
  // const [userLogIn, { isLoading, isError, data }] = useLoginMutation();

  const [
    userRefresh,
    { isLoading: isLoadingRefr, isError: isErrorRefr, data: dataRefr },
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
  console.log({ isLoadingRefr, isErrorRefr, dataRefr });

  return (
    <div className="app">
      <GlobalStyle />
    </div>
  );
};
export default App;
