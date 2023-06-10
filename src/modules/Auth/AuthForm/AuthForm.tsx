import { Button, FormControl, Stack, Typography } from '@mui/material';
import { Field, Form, Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { object, string } from 'yup';
import { AuthInputStyled } from './AuthForm.styled';
import { useLoginMutation, useSignUpMutation } from 'redux/auth/authApiSlice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { setCredentials } from 'redux/auth/authSlice';
import FormErrorMessage from 'shared/components/FormErrorMessage/FormErrorMessage';

const registerSchema = object({
  name: string().max(16).required(),
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
  const [loginCredentials, setLoginCredentials] = useState({
    email: '',
    password: '',
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [userSignUp, { isSuccess: isSignUpSuccess, error: signUpError }] =
    useSignUpMutation();
  const [
    userLogIn,
    { data: loginData, isSuccess: isLoginSuccess, error: loginError },
  ] = useLoginMutation();

  const isRegisterType = type === 'register';

  //for signUp
  useEffect(() => {
    if (!loginCredentials.email) return;
    if (signUpError) {
      toast.error('Error!');
      return;
    }
    if (!isSignUpSuccess) return;

    if (
      isSignUpSuccess &&
      loginCredentials.email &&
      loginCredentials.password
    ) {
      //the backend doesn`t provide tokens on signup => the need to login afterwards
      userLogIn(loginCredentials);
      //next steps - in login useEffect
    }
  }, [isSignUpSuccess, loginCredentials, signUpError, userLogIn]);

  //for login
  useEffect(() => {
    if (!loginCredentials.email) return;
    if (loginError) {
      toast.error('Error!');
      return;
    }
    if (!isLoginSuccess) return;

    toast.success(`Success! Welcome, ${loginData?.user?.name ?? 'user'}`);
    //setting auth (user, token) to state
    isLoginSuccess && loginData && dispatch(setCredentials(loginData));
    navigate('/categories');
  }, [
    dispatch,
    isLoginSuccess,
    loginCredentials.email,
    loginData,
    loginError,
    navigate,
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
    setLoginCredentials({ email, password });
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
              display: 'flex',
              width: { xs: '100%', md: '500px' },
              p: { xs: '32px 28px', md: '44px 50px' },
              backgroundColor: 'grey.800',
              borderRadius: '30px',
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
                  <FormErrorMessage name="name" />
                  <div className="authForm__fieldWrapper authForm__fieldWrapper--name">
                    <Field
                      className="authForm__input authForm__nameInput"
                      name="name"
                      type="text"
                      required
                      placeholder="Name"
                    />
                  </div>
                </AuthInputStyled>
              )}
              <AuthInputStyled className="authForm__email">
                <FormErrorMessage name="email" />
                <div className="authForm__fieldWrapper authForm__fieldWrapper--email">
                  <Field
                    className="authForm__input  authForm__emailInput"
                    name="email"
                    type="text"
                    required
                    placeholder="Email"
                  />
                </div>
              </AuthInputStyled>
              <AuthInputStyled className="authForm__password">
                <FormErrorMessage name="password" />
                <div className="authForm__fieldWrapper authForm__fieldWrapper--password">
                  <Field
                    className="authForm__input  authForm__passwordInput"
                    name="password"
                    type="password"
                    required
                    placeholder="Password"
                  />
                </div>
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
