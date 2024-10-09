/* eslint-disable */
import React from 'react'

import './Confirm.css';
import Header from '../../../components/header/Header';

const ConfirmOTP = () => {
  return (
    <>
    <Header/>
    <div className="otp-container">
      <img src="src/assets/images/images.png" alt="Email Icon" />
      <h2>Mã OTP gồm 6 chữ số đã được gửi đến bạn qua email</h2>
      <input type="text" maxLength="6" placeholder="######" />
      <p>Gửi lại OTP</p>
      <button>Tiếp</button> 
  
    </div>

    </>
  )
}

export default ConfirmOTP