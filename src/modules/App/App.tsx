import { useSignUpMutation } from 'API/SoYummy_API';
import React, { FC, useEffect } from 'react';
import { GlobalStyle } from 'shared/GlobalStyle';

const App: FC = () => {
  const [userSignUp, { isLoading, isError, data }] = useSignUpMutation();

  useEffect(() => {
    userSignUp({
      name: 'Artem',
      email: 'artemRay@gmail.com',
      password: '1234567',
    });
  }, [userSignUp]);

  // {name:'dfd', email: 'sf', password: 'dfd'}
  return (
    <div className="app">
      <GlobalStyle />
    </div>
  );
};
export default App;
