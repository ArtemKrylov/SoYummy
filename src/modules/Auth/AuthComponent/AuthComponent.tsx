import React from 'react';
import { AuthContainerStyled } from './AuthComponent.styled';
import { Container } from '@mui/material';

const AuthComponent: React.FC = () => {
  return (
    <AuthContainerStyled>
      <Container></Container>
    </AuthContainerStyled>
  );
};

export default AuthComponent;
