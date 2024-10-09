/* eslint-disable */
import React from 'react'

import './Confirm.css';
import Header from '../../../components/header/Header';
import emailIcon from '../../../assets/images/iconEmail.png';

const ConfirmOTP = () => {
  return (
    <>
      <Header />
      <div className='otp-body'>
        <div className="otp-container">
          <img src={emailIcon} alt="Email Icon" />
          <h2 className='otp-h2'>Mã OTP gồm 6 chữ số đã được gửi đến bạn qua email</h2>
          <input type="text" maxLength="6" placeholder="# # # # # #" />
          <p className='otp-p'>Gửi lại OTP</p>
          <button className='otp-button'>Tiếp</button>

        </div>
      </div>

    </>
  )
}

export default ConfirmOTP