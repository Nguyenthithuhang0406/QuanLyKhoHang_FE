/* eslint-disable */
import React from 'react'

import './NavBar.css';
import Header from '../header/Header';
import accountImage from '../../assets/images/account.png'
const NavBar = () => {
  return ( 
    <>
    <Header/>
    <div className='Frame'>
      <div className='Content'>

        <div className='Avatar'>
          <img src={accountImage} alt="avatar" />
          <p>Lương Thị Phượng</p>
        </div>

        <div className='Separate'>
          <hr />
        </div>

        <div className='Menu'>

           <div className='p1'>
           <p><i className="fa-solid fa-chart-pie"></i>Tổng quan</p>
           </div>

          <div className='p1'>
          <p><i className="fa-solid fa-clipboard"></i>Xuất - nhập với NCC</p>
          <div className='p2'>
            <p> <i className="fa-solid fa-chevron-right"></i>Xuất kho  <span className='p4'><i class="fa-solid fa-minus"></i></span></p>
            <div className='p3'>
              <p>Phiếu xuất kho</p>
            </div>
          </div>
          <div className='p2'>
            <p> <i className="fa-solid fa-chevron-right"></i>Nhập kho <span className='p4'><i class="fa-solid fa-minus"></i></span></p>
            <div className='p3'>
              <p>Phiếu nhập kho</p>
            </div>
          </div>
          </div>

          <div className='p1'>
          <p><i className="fa-solid fa-clipboard"></i>Xuất - nhập với Nội bộ</p>
          <div className='p2'>
            <p> <i className="fa-solid fa-chevron-right"></i>Xuất kho <span className='p4'><i class="fa-solid fa-minus"></i></span></p>
            <div className='p3'>
              <p>Lệnh xuất kho</p>
              <p>Phiếu xuất kho</p>
            </div>
          </div>
          <div className='p2'>
            <p> <i className="fa-solid fa-chevron-right"></i>Nhập kho <span className='p4'><i class="fa-solid fa-minus"></i></span></p>
            <div className='p3'>
              <p>Lệnh nhập kho</p>
              <p>Phiếu nhập kho</p>
            </div>
          </div>
          </div>
          
          <div className='p1'>
          <p><i className="fa-solid fa-clipboard"></i>Xuất - nhập với NVBH</p>
          <div className='p2'>
            <p> <i className="fa-solid fa-chevron-right"></i>Xuất kho <span className='p4'><i class="fa-solid fa-minus"></i></span></p>
            <div className='p3'>
              <p>Phiếu xuất kho</p>
            </div>
          </div>
          <div className='p2'>
            <p> <i className="fa-solid fa-chevron-right"></i>Nhập kho <span className='p4'><i class="fa-solid fa-minus"></i></span></p>
            <div className='p3'>
              <p>Phiếu nhập kho</p>
            </div>
          </div>
          </div>
            
          <div className='p1'>
           <p><i className="fa-solid fa-check"></i>Quản lý kiểm kê</p>
           </div>
      
           <div className='p1'>
          <p><i className="fa-solid fa-chart-simple"></i>Báo cáo thống kê</p>
          <div className='p2'>
            <p> <i className="fa-solid fa-chevron-right"></i>Báo cáo nhập kho</p>
            <p> <i className="fa-solid fa-chevron-right"></i>Báo cáo xuất kho</p>
            <p> <i className="fa-solid fa-chevron-right"></i>Báo cáo xuất nhập tồn</p>
          </div>        
           </div>
          
           <div className='p1'>
          <p><i className="fa-solid fa-book"></i>Danh mục</p>
          <div className='p2'>
            <p> <i className="fa-solid fa-chevron-right"></i>Nguồn hàng xuất/nhập</p>
            <p> <i className="fa-solid fa-chevron-right"></i>Danh mục hàng hoá</p>
            <p> <i className="fa-solid fa-chevron-right"></i>Hợp đồng</p>
          </div>        
           </div>

        </div>
        </div>
      </div>
    </>
  )
}

export default NavBar