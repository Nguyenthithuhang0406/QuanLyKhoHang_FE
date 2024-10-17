/* eslint-disable */
import React from 'react'

import './CreatedProduct.css';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';

const CreatedProduct = () => {
  return (
    <div>
        <Header className="createdProduct-s0"/>
        <NavBar/>
        <div className='createdProduct-ss'>
          <p className='createdProductheader'>Quản lý danh mục hàng hóa <span><i className="fa-solid fa-chevron-right"></i></span> Thêm hàng hóa</p>
          <div className='createdProduct-s1'>
            <div className='createdProduct-s3'>
              <p>Thêm hàng hóa</p>
            </div>
            <div className='createdProduct-s5'>
              <span className='span'>Mã hàng</span><input type="text" className='input1' />
            </div>
            <div className='createdProduct-s6'>
              <span className='span'>Tên hàng</span><input type="text" className='input1'/>
            </div>
            <div className='createdProduct-s7'>
              <span className='span'>Nhóm hàng</span><input type="text"className='input' />
            </div>
            <div className='createdProduct-s8'>
              <p>Hình ảnh</p>
              <p className='createdProduct-s4'><i className="fa-solid fa-cloud-arrow-up fa-2xl"></i></p>
            </div>
            <div className='createdProduct-s6'>
              <p className='span'>Đơn vị tính</p>
              <input type="text"className='input2' />
            </div>
            <div className='createdProduct_description'>
              <p>Mô tả</p>
              <textarea name="" id="" className='createdProduct-s9'></textarea>
            </div>
            <div className='createdProduct-button'>
              <button type='button' className='createdProduct-luu'>Lưu</button>
              <button type='submit '  className='createdProduct-huy'>Hủy</button>
            </div>
          
        </div>
        </div>
        
        
    </div>
  )
}
export default CreatedProduct;