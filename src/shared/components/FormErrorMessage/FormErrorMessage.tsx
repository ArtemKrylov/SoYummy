import React from 'react';
import { ErrorMessage } from 'formik';
import { Typography } from '@mui/material';

interface FormErrorMessageInterface {
  name: string;
}

const FormErrorMessage: React.FC<FormErrorMessageInterface> = ({ name }) => {
  return (
    <Typography component={'div'} sx={{ color: 'error.main', mb: '5px' }}>
      <ErrorMessage component="p" name={name} />
    </Typography>
  );
};

export default FormErrorMessage;
