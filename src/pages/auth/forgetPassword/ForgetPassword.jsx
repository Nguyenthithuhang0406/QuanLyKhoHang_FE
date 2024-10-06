/* eslint-disable */
import React from 'react'

import './ForgetPassword.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Header from '../../../components/header/Header';

const ForgetPassword = () => {
  return (
    <> 
    <Header/>
    <div className='s0'>
    <Formik>
      <Form className='s1'> 
       <p htmlFor="email" className='s2'> <b>QUÊN MẬT KHẨU</b></p>
        <div className='s3'>
          <label htmlFor="email">Email</label>
          <Field className='boder' name="email" type="email" />
          <ErrorMessage name="email" />
        </div>
        <div className='s4'>
          <label htmlFor="userName">Tên đăng nhập</label>
          <Field className='boder' name="userName" type="text" />
          <ErrorMessage name="userName" />
        </div>
        <div className='s5'>
          <button className='button' type='submit'>Gửi lại mật khẩu</button>
        </div>
          
      </Form>
    </Formik>
    </div>
    </>
  )
}

export default ForgetPassword