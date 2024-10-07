/* eslint-disable */
import React from 'react'
import loginImage from "../../../assets/images/login.png";
import './Login.css';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import Header from '../../../components/header/Header';
const Login = () => {
  return (
    <>
      <Header />
      <div className="login-container">
        <Formik>
          <Form>
            <div className="contener">
              <div className="login-left">
                <img className="login-img" src={loginImage} alt="" />
              </div>
              <div className="login-right">
                <p className="login-h1">
                  <b>ĐĂNG NHẬP VÀO TÀI KHOẢN</b>
                </p>
                <div className="login-s1">
                  <label htmlFor="userName" className="login-label">
                    Tên đăng nhập
                  </label>
                  <Field name="userName" className="login-boder" type="text" />
                  <ErrorMessage name="userName" />
                </div>
                <div className="login-s1">
                  <label htmlFor="password" className="login-label">
                    Mật khẩu
                  </label>
                  <Field
                    name="password"
                    className="login-boder"
                    type="password"
                  />
                  <ErrorMessage name="password" />
                </div>
                <div className="login-s2">
                  <div className="login-check">
                    <Field name="recomenPassWord" type="radio" />
                    <label htmlFor="recomenPassWord" className="login-label">
                      Ghi nhớ tôi
                    </label>
                  </div>
                  <div>
                    <a className="login-link" href="#">
                      Quên mật khẩu?
                    </a>
                  </div>
                </div>
                <div>
                  <button className="login-but" type="submit">
                    Đăng nhập
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </>
  );
}

export default Login