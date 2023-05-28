import {} from 'redux/API/SoYummyApiSlice';
import React, { FC, useEffect } from 'react';
import { GlobalStyle } from 'shared/GlobalStyle';
import { useLoginMutation } from 'redux/auth/authApiSlice';
import { setCredentials } from 'redux/auth/authSlice';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import SharedLayout from 'shared/components/SharedLayout';
import NoMatchPage from 'pages/NoMatchPage';
import WelcomePage from 'pages/WelcomePage/WelcomePage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import SignInPage from 'pages/SignInPage/SignInPage';
import FavoritesPage from 'pages/FavoritesPage/FavoritesPage';
import SearchPage from 'pages/SearchPage/SearchPage';
import ShoppingListPage from 'pages/ShoppingListPage/ShoppingListPage';
import MyRecipesPage from 'pages/MyRecipesPage/MyRecipesPage';
import CategoriesPage from 'pages/CategoriesPage/CategoriesPage';
import AddRecipesPage from 'pages/AddRecipesPage/AddRecipesPage';

const basename = '/SoYummy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />} errorElement={<NoMatchPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/favourites" element={<FavoritesPage />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/shopping_list" element={<ShoppingListPage />} />
      <Route path="/my_recipes" element={<MyRecipesPage />} />
      <Route path="/categories" element={<CategoriesPage />} />
      <Route path="/add_recipes" element={<AddRecipesPage />} />
    </Route>
  ),
  {
    basename,
  }
);

const App: FC = () => {
  const dispatch = useAppDispatch();
  const [userLogIn, { data: loginData, isSuccess: isLoginSuccess }] =
    useLoginMutation();

  useEffect(() => {
    userLogIn({
      email: 'artemRay@gmail.com',
      password: '1234567',
    });
  }, [userLogIn]);

  useEffect(() => {
    isLoginSuccess && dispatch(setCredentials({ ...loginData }));
  }, [dispatch, isLoginSuccess, loginData]);

  return (
    <div className="app">
      <Toaster />
      {isLoginSuccess && <p>Hello {loginData?.user?.name}</p>}
      <RouterProvider router={router} />
      <GlobalStyle />
    </div>
  );
};
export default App;
