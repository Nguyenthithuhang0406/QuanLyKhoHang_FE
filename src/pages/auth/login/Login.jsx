/* eslint-disable */
import React from 'react'
import loginImage from "../../../assets/images/login.png";
import './Login.css';
import {  ErrorMessage, Field, Form, Formik } from 'formik';
import Header from '../../../components/header/Header';
const Login = () => {
  return (
    <>
    <Header/>
    <div className='login-container'>
    <Formik>
      <Form>
        <div className='contener'>
          <div className='login-left'>
            <img className='login-img' src={loginImage} alt="" />
          </div>
          <div className='login-right'>
              <p className='login-h1'><b>ĐĂNG NHẬP VÀO TÀI KHOẢN</b></p>
              <div className='login-s1'> 
              <label htmlFor="userName">Tên đăng nhập</label>
              <Field name='userName' className="boder" type='text'/>
              <ErrorMessage name='userName'/>
              </div>
              <div className='login-s1'>
              <label htmlFor="passWord">Mật khẩu</label>
              <Field  name='passWord' className="boder" type='password'/>
              <ErrorMessage name='passWord'/>
              </div>
              <div className='login-s2'>
                  <div>
                <Field name='recomenPassWord' type="radio"/>
                <label htmlFor="recomenPassWord">Ghi nhớ tôi</label>
                  </div>
                  <div>
                    <a className='login-link' href="#">Quên mật khẩu?</a>
                  </div>
              </div>
              <div>
                <button className='login-but' type="submit">ĐĂNG NHẬP</button>
              </div>
          </div>
        </div>
      </Form>
    </Formik>
    </div>
    </>
  )
}

export default Login