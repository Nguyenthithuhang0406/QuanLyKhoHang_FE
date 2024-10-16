/* eslint-disable*/
import React from 'react'

import './EditProduct.css';
import Header from '../../../components/header/Header';
import NavBar from '@/components/navBar/NavBar';
import ip from '../../../assets/images/anhip.jpg';
const EditProduct = () => {
  return (
    <>
      <Header className="header_editProd"/>
      <NavBar />
      <div className='container_editPro'>
        <div className='h1_editPro'>
          <p className='text_1'>Quản lí danh mục hàng hóa <span><i class="fa-solid fa-chevron-right"></i></span> <span>Cập nhật thông tin hàng hóa</span></p>
        </div>
        <div className='h2_editPro'>
            <div className='sub1_editPro'>
              <p className='text_sub1_editPro'>Cập nhật thông tin hàng hóa</p>
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
                <label htmlFor="nh">Nhóm hàng</label>
                <div className='input_editPro'>
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
            <div className='button_h3'>
              <button className='b1_inf' type="submit">Lưu</button>
              <button className='b2_inf' type="button">Hủy</button>
            </div>
            </div>
        </div>
       
      </div>
    </>
  )
}

export default EditProduct;