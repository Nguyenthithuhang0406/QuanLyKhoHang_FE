/* eslint-disable */
import React from 'react'

import './ConfirmDeleteProduct.css';

const ConfirmDeleteProduct = () => {
  return (
    <div className='body'>
       <div className='frame'>
        <span className='close'> &times; </span>
        <p>Bạn chắc chắn muốn xoá?</p>
        <button className='confirm'>Đồng ý</button>
        <button className='cancel'>Huỷ</button>
       </div>
    </div>
  )
}

export default ConfirmDeleteProduct;