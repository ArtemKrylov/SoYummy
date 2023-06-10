import React, { useEffect } from 'react';
import { AuthContainerStyled } from './AuthComponent.styled';
import { Box, Container, Typography } from '@mui/material';
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
          height: '100vh',
          pt: { xs: '37vh', md: '42.7vh', lg: '21vh' },
          pr: { lg: '12.5vw' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', lg: 'flex-end' },
            justifyContent: 'start',
          }}
        >
          <AuthForm type={type} />
          <Typography
            sx={{
              width: { xs: '100%', md: '500px' },
              mt: '18px',
              textDecoration: 'underline',
              color: 'common.white',
              fontSize: { xs: '14px', md: '16px' },
              lineHeight: { xs: '21px', md: '24px' },
              textAlign: 'center',
            }}
          >
            {type === 'register' ? 'Registration' : 'Sign in'}
          </Typography>
        </Box>
      </Container>
    </AuthContainerStyled>
  );
};

export default AuthComponent;
