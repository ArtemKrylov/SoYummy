import React from 'react';
import { Container, Typography, Box } from '@mui/material';

import OvalButton from 'modules/Button/OvalButton/OvalButton';
import { theme } from 'shared/theme';
import Logo from 'shared/components/Logo/Logo';
import { WelcomePageStyled } from './WelcomePage.styled';
import { useNavigate } from 'react-router-dom';

const WelcomePage: React.FC = () => {
  const navigator = useNavigate();

  function onRegisterBtnClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigator('/register');
  }
  function onSignInBtnClick(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigator('/signin');
  }
  return (
    <WelcomePageStyled
      sx={{
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100dvh',
      }}
    >
      <Container
        sx={{
          color: theme.palette.text.secondary,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Box sx={{ mb: { xs: '28px', md: '44px' } }}>
          <Logo />
        </Box>
        <Box sx={{ width: { sm: '305px', md: '505px', lg: '540px' } }}>
          <Typography component={'h1'} variant="subtitle1" sx={{ mb: '14px' }}>
            Welcome to the app!
          </Typography>
          <Typography variant="body1" sx={{ mb: { xs: '44px', md: '40px' } }}>
            This app offers more than just a collection of recipes - it is
            designed to be your very own digital cookbook. You can easily save
            and retrieve your own recipes at any time.
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              gap: { xs: '12px', md: '18px' },
            }}
          >
            <OvalButton onClick={onRegisterBtnClick}>Registration</OvalButton>
            <OvalButton onClick={onSignInBtnClick}>Sign in</OvalButton>
          </Box>
        </Box>
      </Container>
    </WelcomePageStyled>
  );
};

export default WelcomePage;
