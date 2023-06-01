import React, { ReactNode } from 'react';
import Button from '@mui/material/Button';

interface OvalButtonProps {
  color?: 'primary' | 'secondary';
  variant?: 'contained' | 'outlined';
  children?: ReactNode;
}

const OvalButton: React.FC<OvalButtonProps> = ({
  children,
  color = 'primary',
  variant = 'contained',
}) => {
  const ovalButtonStyles = {
    p: '12px 24px',
    borderRadius: '18px 40px',
    textTransform: 'capitalize',
    color: 'inherit',
  };
  return (
    <Button variant={variant} color={color} sx={ovalButtonStyles}>
      {children}
    </Button>
  );
};

export default OvalButton;
