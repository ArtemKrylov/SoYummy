import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { Navigate } from 'react-router-dom';

const NoMatchPage: React.FC = () => {
  useEffect(() => {
    toast.error('No such page found! Redirected to the start page');
  }, []);

  return (
    <>
      <Navigate to={'/'} />
    </>
  );
};

export default NoMatchPage;
