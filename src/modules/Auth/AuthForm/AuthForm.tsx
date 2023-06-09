import { Button, FormControl, Stack, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { useEffect } from 'react';
import { object, string } from 'yup';
import { AuthInputStyled } from './AuthForm.styled';
import { useLoginMutation, useSignUpMutation } from 'redux/auth/authApiSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const registerSchema = object({
  name: string().required(),
  email: string().email().required(),
  password: string().min(8).max(12).required(),
});

const signInSchema = object({
  email: string().email().required(),
  password: string().min(8).max(12).required(),
});

interface AuthFormProps {
  type: 'register' | 'signin';
}

const AuthForm: React.FC<AuthFormProps> = ({ type }) => {
  const navigate = useNavigate();
  const [
    userSignUp,
    { data: signUpData, isSuccess: isSignUpSuccess, error: signUpError },
  ] = useSignUpMutation();
  const [
    userLogIn,
    { data: loginData, isSuccess: isLoginSuccess, error: loginError },
  ] = useLoginMutation();

  const isRegisterType = type === 'register';

  useEffect(() => {
    if (isSignUpSuccess || isLoginSuccess) {
      toast.success('Success!');
      console.log(signUpData, loginData);
      navigate('/categories');
    }
    if (signUpError || loginError) {
      toast.success('Error!');
    }
  }, [
    isLoginSuccess,
    isSignUpSuccess,
    loginData,
    loginError,
    navigate,
    signUpData,
    signUpError,
  ]);

  function onAuthFormSubmit(
    {
      name,
      email,
      password,
    }: {
      name: string;
      email: string;
      password: string;
    },
    { resetForm }: any
  ) {
    console.log('click');
    isRegisterType
      ? userSignUp({ name, email, password })
      : userLogIn({ email, password });

    resetForm();
  }
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
              p: { xs: '32px 28px', md: '44px 50px' },
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
