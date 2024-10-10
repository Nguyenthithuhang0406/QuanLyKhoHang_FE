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