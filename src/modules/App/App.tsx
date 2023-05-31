import {} from 'redux/API/SoYummyApiSlice';
import React, { FC, lazy } from 'react';
import { GlobalStyle } from 'shared/GlobalStyle';
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
import PrivateRouteWithRedirect from 'shared/hoc/PrivateRouteWithRedirect/PrivateRouteWithRedirect';

//pages with lazy loading and private routes
const FavoritesPage = lazy(() => import('pages/FavoritesPage'));
const FavoritesPageWithRedirect = PrivateRouteWithRedirect(FavoritesPage);
const SearchPage = lazy(() => import('pages/SearchPage'));
const SearchPageWithRedirect = PrivateRouteWithRedirect(SearchPage);
const ShoppingListPage = lazy(() => import('pages/ShoppingListPage'));
const ShoppingListPageWithRedirect = PrivateRouteWithRedirect(ShoppingListPage);
const MyRecipesPage = lazy(() => import('pages/MyRecipesPage'));
const MyRecipesPageWithRedirect = PrivateRouteWithRedirect(MyRecipesPage);
const CategoriesPage = lazy(() => import('pages/CategoriesPage'));
const CategoriesPageWithRedirect = PrivateRouteWithRedirect(CategoriesPage);
const AddRecipesPage = lazy(() => import('pages/AddRecipesPage'));
const AddRecipesPageWithRedirect = PrivateRouteWithRedirect(AddRecipesPage);

const basename = '/SoYummy';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<SharedLayout />} errorElement={<NoMatchPage />}>
      <Route index element={<WelcomePage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/signin" element={<SignInPage />} />
      <Route path="/favourites" element={<FavoritesPageWithRedirect />} />
      <Route path="/search" element={<SearchPageWithRedirect />} />
      <Route path="/shopping_list" element={<ShoppingListPageWithRedirect />} />
      <Route path="/my_recipes" element={<MyRecipesPageWithRedirect />} />
      <Route path="/categories" element={<CategoriesPageWithRedirect />} />
      <Route path="/add_recipes" element={<AddRecipesPageWithRedirect />} />
    </Route>
  ),
  {
    basename,
  }
);

const App: FC = () => {
  // const dispatch = useAppDispatch();
  // const [userLogIn, { data: loginData, isSuccess: isLoginSuccess }] =
  //   useLoginMutation();

  // useEffect(() => {
  //   userLogIn({
  //     email: 'artemRay@gmail.com',
  //     password: '1234567',
  //   });
  // }, [userLogIn]);

  // useEffect(() => {
  //   isLoginSuccess && dispatch(setCredentials({ ...loginData }));
  // }, [dispatch, isLoginSuccess, loginData]);

  return (
    <div className="app">
      <Toaster />
      <RouterProvider router={router} />
      <GlobalStyle />
    </div>
  );
};
export default App;
