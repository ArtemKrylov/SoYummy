import React from 'react';
import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useAppSelector } from 'shared/hooks/useAppSelector';

const PrivateRouteWithRedirect: (
  Componet: React.LazyExoticComponent<any>,
  redirectTo?: string
) => React.FC = (Component, redirectTo = '/') => {
  const ComponentWithRedirect: (props: any) => JSX.Element = (props: any) => {
    const isLoggedIn = useAppSelector(selectIsLoggedIn);
    console.log('isLoggedIn: ', isLoggedIn);

    //TODO: check
    return isLoggedIn ? <Component {...props} /> : <Navigate to={redirectTo} />;
  };
  return ComponentWithRedirect;
};

export default PrivateRouteWithRedirect;
