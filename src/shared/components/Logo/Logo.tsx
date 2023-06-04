import React from 'react';
import { SvgIcon } from '@mui/material';
import { theme } from 'shared/theme';
import { ReactComponent as LogoIcon } from '../../data/svg/logo.svg';

interface LogoProps {
  padding?: string;
}

const Logo: React.FC<LogoProps> = ({ padding = '12px' }) => {
  return (
    <SvgIcon
      component={LogoIcon}
      color="secondary"
      viewBox="0 0 44 44"
      sx={{
        p: padding,
        borderRadius: '12px',
        backgroundColor: theme.palette.primary.main,
        fill: theme.palette.primary.main,
        stroke: theme.palette.common.white,
        fontSize: '44px',
      }}
    />
  );
};

export default Logo;
