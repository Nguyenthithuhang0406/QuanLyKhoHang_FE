/* eslint-disable */
import React from "react";

import "./Register.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Header from "../../../components/header/Header";

const Register = () => {
  return (
    <>
      <Header />
      <div className="register-body">
        <div className="register-container">
          <div className="register-form">
            <Formik>
              <Form>
                <h2 className="register-h2">ĐĂNG KÝ TÀI KHOẢN</h2>
                <div className="register-group-field">
                  <label htmlFor="fullNameLabel" className="register-label">
                    Họ tên đầy đủ
                  </label>{" "}
                  <br />
                  <Field
                    className="register-Field"
                    name="fullName"
                    type="text"
                  />
                  <ErrorMessage name="fullName" />
                </div>

                <div className="register-group-field">
                  <label className="register-label" htmlFor="email">
                    Email
                  </label>{" "}
                  <br />
                  <Field className="register-Field" name="email" type="text" />
                  <ErrorMessage name="email" />
                </div>

                <div className="register-group-field">
                  <label className="register-label" htmlFor="staffCode">
                    Mã nhân viên
                  </label>{" "}
                  <br />
                  <Field
                    className="register-Field"
                    name="staffCode"
                    type="text"
                  />
                  <ErrorMessage name="staffCode" />
                </div>

                <div className="register-group-field">
                  <label className="register-label" htmlFor="loginName">
                    Tên đăng nhập
                  </label>{" "}
                  <br />
                  <Field
                    className="register-Field"
                    name="loginName"
                    type="text"
                  />
                  <ErrorMessage name="loginName" />
                </div>

                <div className="register-group-field">
                  <label className="register-label" htmlFor="passWord">
                    Mật khẩu
                  </label>{" "}
                  <br />
                  <Field
                    className="register-Field"
                    name="passWord"
                    type="text"
                  />
                  <ErrorMessage name="passWord" />
                </div>

                <div className="register-role">
                  <div className="register-role-group">
                    <p>Nhân viên</p>
                    <div className="register-check"></div>
                  </div>
                  <div className="register-role-group">
                    <p>Quản lý</p>
                    <div className="register-check"></div>
                  </div>
                </div>

                <button className="register-button" type="submit">
                  Đăng ký
                </button>

                <div className="register-bonus">
                  <p>
                    Bạn đã có tài khoản?{" "}
                    <span className="register-span"> Đăng nhập</span>
                  </p>
                </div>
              </Form>
            </Formik>
          </div>
          <div className="imagine">
            <img
              className="imagine-img"
              src="https://s3-alpha-sig.figma.com/img/6e4d/719d/e6aff13fc8e464cd1fb5fdb136c71ae2?Expires=1728864000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Z-AK3S7BONsiHapy-MHHUX0nnnwvphDMHEoTxEpPRy3mxjgmUi910dzdcyeSCFwtUZ2nIAGGlYQbOUMQac4SHV8g2yBAgIS5Rvr9C2gYust-eEt41VjqjTjUpPUkV7CZGN8QC1dOX3FhBg6uqnbEh--fUUTOQUFh6e39LeQDKA9iA6Z4iyu0UYKX7crWeAehIRxIQ9VEv0YD6sR7gglULSQ4sHN9Llc5E1crK~tnaUmS7MhJ3liZRUo1kQGd~gOwZw3QZBg0BibxT9Cnclb0~w6DjEBNskJFstLCuf5pE1H9qaLa2zueyR2EwBdGCKF-nlHYry-~OjgVMpCifhcE-Q__"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
