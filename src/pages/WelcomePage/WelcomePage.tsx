import React from 'react';
import { Container, Typography, Box } from '@mui/material';

import bgImg from '../../shared/data/img/welcomeBgMobile@1x.jpg';
import OvalButton from 'modules/Button/OvalButton/OvalButton';
import { theme } from 'shared/theme';
import Logo from 'shared/components/Logo/Logo';

const WelcomePage: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${bgImg})`,
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
        <Logo />
        <Typography sx={{ mb: '14px' }}>Welcome to the app!</Typography>
        <Typography variant="body1" sx={{ mb: '44px' }}>
          This app offers more than just a collection of recipes - it is
          designed to be your very own digital cookbook. You can easily save and
          retrieve your own recipes at any time.
        </Typography>
        <Box display={'flex'} justifyContent={'center'} gap={'12px'}>
          <OvalButton>Registration</OvalButton>
          <OvalButton>Sign in</OvalButton>
        </Box>
      </Container>
    </Box>
  );
};

export default WelcomePage;
