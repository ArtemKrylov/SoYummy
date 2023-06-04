import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';

interface OvalButtonProps {
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
  children?: ReactNode;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const OvalButton: React.FC<OvalButtonProps> = ({
  children,
  color = 'primary',
  variant = 'contained',
  onClick,
}) => {
  const ovalButtonStyles = {
    p: { xs: '12px 24px', md: '22px 44px' },
    borderRadius: '18px 40px',
    textTransform: 'capitalize',
    color: 'inherit',
    fontSize: { xs: '14px', md: '16px' },
    lineHeight: { xs: '21px', md: '24px' },
  };
  return (
    <Button
      onClick={onClick}
      variant={variant}
      color={color}
      sx={ovalButtonStyles}
    >
      {children}
    </Button>
  );
};

export default OvalButton;
