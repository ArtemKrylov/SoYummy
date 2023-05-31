import { Button, Container, SvgIcon, Typography } from '@mui/material';
import React from 'react';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import bgImg from '../../shared/data/img/welcomeBgMobile@1x.jpg';

const WelcomePage: React.FC = () => {
  return (
    <Container
      sx={{
        backgroundImage: `url(${bgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100dvh',
      }}
    >
      <SvgIcon component={RestaurantIcon} color="primary"></SvgIcon>
      <Typography>Welcome to the app!</Typography>
      <Typography>
        This app offers more than just a collection of recipes - it is designed
        to be your very own digital cookbook. You can easily save and retrieve
        your own recipes at any time.
      </Typography>
      <Button>Registration</Button>
      <Button>Registration</Button>
    </Container>
  );
};

export default WelcomePage;
