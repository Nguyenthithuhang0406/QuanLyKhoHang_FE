/* eslint-disable*/
import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRoutes } from 'react-router-dom';

import Home from './pages/home/Home';
import Login from './pages/auth/login/Login';
import Register from './pages/auth/register/Register';
import ForgetPassword from './pages/auth/forgetPassword/ForgetPassword';
import ResetPassword from './pages/auth/resetPassword/ResetPassword';
import ConfirmOTP from './pages/auth/confirmOTP/ConfirmOTP';
import CreatedProduct from './pages/product/createdProduct/CreatedProduct';
import EditProduct from './pages/product/editProduct/EditProduct';
import ConfirmDeleteProduct from './components/confirmDeleteProduct/ConfirmDeleteProduct';
import ListProduct from './pages/product/listProduct/ListProduct';
import CreateAgency from './pages/agency/createdAgency/CreateAgency';
import ListAgency from './pages/agency/listAgency/ListAgency';
import InforProduct from './pages/product/inforProduct/InforProduct';

const App = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/forgetPassword',
      element: <ForgetPassword/>
    },
    {
      path: '/reset-password',
      element: <ResetPassword/>
    },
    {
      path: '/confirm-OTP',
      element: <ConfirmOTP/>
    },
    {
      path: '/created-product',
      element: <CreatedProduct/>
    },
    {
      path: '/edit-product',
      element: <EditProduct/>
    },
    {
      path: '/confirm-delete-product',
      element: <ConfirmDeleteProduct/>
    },
    {
      path: '/list-product',
      element: <ListProduct/>
    },
    {
      path: '/createAgency',
      element: <CreateAgency/>
    },
    {
      path: '/list-agency',
      element: <ListAgency/>
    },
    {
      path: '/inforProduct',
      element: <InforProduct/>
    }
  ]);
  return (
    <>
      <ToastContainer/>
      {
        routes
      }
  </>
  )
}

export default App;