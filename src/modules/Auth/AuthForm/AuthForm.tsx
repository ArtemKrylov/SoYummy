import { Button, FormControl, Stack, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React from 'react';
import { object, string } from 'yup';
import { AuthInputStyled } from './AuthForm.styled';

const registerSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(8).max(12).required(),
});

const signInSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(8).max(12).required(),
});

interface AuthFormProps {
  type: 'register' | 'signin';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const isRegisterType = type === 'register';
  function onAuthFormSubmit() {}
  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={isRegisterType ? registerSchema : signInSchema}
      onSubmit={onAuthFormSubmit}
    >
      {() => (
        <Form className="authForm">
          <FormControl
            sx={{
              p: { xs: '32px 28px 40px', md: '44px 50px' },
              backgroundColor: 'grey.800',
              borderRadius: '30px',
              display: 'flex',
              width: { xs: '100%', md: '500px' },
            }}
          >
            <Typography
              component={'h1'}
              variant="subtitle2"
              sx={{
                color: 'common.white',
                mb: {
                  xs: isRegisterType ? '18px' : '40px',
                  md: isRegisterType ? '32px' : '50px',
                },
              }}
            >
              {isRegisterType ? 'Registration' : 'Sign In'}
            </Typography>

            <Stack
              component={'ul'}
              spacing={{ xs: '12px', md: '24px' }}
              mb={{ xs: '28px', md: '50px' }}
            >
              {isRegisterType && (
                <AuthInputStyled className="authForm__name">
                  <Field
                    className="authForm__input authForm__nameInput"
                    name="name"
                    type="text"
                    required
                    placeholder="Name"
                  />
                </AuthInputStyled>
              )}
              <AuthInputStyled className="authForm__email">
                <Field
                  className="authForm__input  authForm__emailInput"
                  name="email"
                  type="text"
                  required
                  placeholder="Email"
                />
              </AuthInputStyled>
              <AuthInputStyled className="authForm__password">
                <Field
                  className="authForm__input  authForm__passwordInput"
                  name="password"
                  type="password"
                  required
                  placeholder="Password"
                />
              </AuthInputStyled>
            </Stack>
            <Button
              type="submit"
              className="authForm__submitBtn"
              variant="contained"
            >
              {isRegisterType ? 'Sign up' : 'Sing in'}
            </Button>
          </FormControl>
        </Form>
      )}
    </Formik>
  );
};

export default AuthForm;
