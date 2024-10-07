/* eslint-disable */
import React from "react";

import "./ResetPassword.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Header from "../../../components/header/Header";
const ResetPassword = () => {
  return (
    <>
      <Header />
      <div className="resetPassword-body">
        <div className="resetPassword-container">
          <div className="resetPassword-form">
            <Formik>
              <Form>
                <h2 className="resetPassword-h2">ĐỔI MẬT KHẨU</h2>
                <div className="resetPassword-group-field">
                  <label className="resetPassword-Label" htmlFor="email">
                    Email
                  </label>{" "}
                  <br />
                  <Field
                    className="resetPassword-Field"
                    name="email"
                    type="text"
                  />
                  <ErrorMessage name="email" />
                </div>

                <div className="resetPassword-group-field">
                  <label className="resetPassword-Label" htmlFor="loginName">
                    Tên đăng nhập
                  </label>{" "}
                  <br />
                  <Field
                    className="resetPassword-Field"
                    name="loginName"
                    type="text"
                  />
                  <ErrorMessage name="loginName" />
                </div>

                <div className="resetPassword-group-field">
                  <label className="resetPassword-Label" htmlFor="newPassword">
                    Mật khẩu mới
                  </label>{" "}
                  <br />
                  <Field
                    className="resetPassword-Field"
                    name="newPassword"
                    type="text"
                  />
                  <ErrorMessage name="newPassword" />
                </div>

                <div>
                  <button className="resetPassword-button" type="submit">
                    Xong
                  </button>
                </div>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
