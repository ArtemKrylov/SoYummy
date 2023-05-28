import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Loader from '../Loader';

const SharedLayout: React.FC = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
