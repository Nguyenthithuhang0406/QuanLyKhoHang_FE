/* eslint-disable */
import React from 'react'

import './InforProduct.css';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
import ip from '../../../assets/images/anhip.jpg';

const InforProduct = () => {
  return (
    <>
      <Header className="header_editProd"/>
      <NavBar />
      <div className='container_editPro'>
        <div className='h1_editPro'>
          <p className='text_1'>Quản lí danh mục hàng hóa <span><i class="fa-solid fa-chevron-right"></i></span> <span>Xem hàng hóa</span></p>
          <button type="submit" className='buton_h1'>Cập nhật thông tin</button>
        </div>
        <div className='h2_editPro'>
            <div className='sub1_editPro'>
              <p className='text_sub1_editPro'>Thông tin hàng hóa</p>
              <i class="fa-solid fa-x"></i>
            </div>
            <div className='sub2_editPro'>
            <div className='idpro'>
                <label htmlFor="mh">Mã hàng</label>
                <div className='input_editPro'>
                </div>
            </div>
            <div className='namepro'>
                <label htmlFor="th">Tên hàng</label>
                <div className='input_editPro'>
                </div>
            </div>
            <div className='grouppro'>
                <label htmlFor="nh">Nhóm hàng</label><div className='input_editPro'>
                </div>
            </div>
            <div className='image_prod'>
              <label htmlFor="">Hình ảnh</label> <br/>
              <img className='image_ip' src={ip} alt="" />
              <i className="fa-solid fa-cloud-arrow-up" ></i>
            </div>
            
            <div className='unit'>
              <label htmlFor="dv">Đơn vị</label>
              <br />
              <br />
              <div className='input_editPro'>
                </div>
            </div>
            <div className='describe_editPro'> 
                <label htmlFor="mt">Mô tả hàng hóa</label><br />
                <br />
                <div className='mota_editpro'>
                  </div>
            </div>
            </div>
        </div>
        
      </div>
    </>
  )
}

export default InforProduct;