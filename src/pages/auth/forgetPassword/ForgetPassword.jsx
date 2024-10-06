/* eslint-disable */
import React from 'react'

import './ForgetPassword.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';

const ForgetPassword = () => {
  return (
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
  )
}

export default ForgetPassword