import React, { useEffect } from 'react';
import { AuthContainerStyled } from './AuthComponent.styled';
import { Container } from '@mui/material';
import { useAppSelector } from 'shared/hooks/useAppSelector';
import { selectIsLoggedIn } from 'redux/auth/authSelectors';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../AuthForm/AuthForm';

interface AuthComponentProps {
  type: 'register' | 'signin';
}

const AuthComponent: React.FC<AuthComponentProps> = ({ type }) => {
  const isLoggedIn: boolean = useAppSelector(selectIsLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate('/categories');
    }
  }, [isLoggedIn, navigate]);
  return (
    <AuthContainerStyled>
      <Container
        className="authComponent__container"
        sx={{
          pt: { xs: '37vh', md: '43.4vh' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <AuthForm type={type} />
      </Container>
    </AuthContainerStyled>
  );
};

export default AuthComponent;
