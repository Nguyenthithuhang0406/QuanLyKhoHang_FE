/* eslint-disable */
import React from 'react'

import './NavBar.css';
const NavBar = () => {
  return (
    <div className='Frame'>
      <div className='Content'>

        <div className='Avatar'>
          <img src="img_avatar.png" alt="avatar" />
          <p>abcd</p>
        </div>

        <div className='Separate'>
          <hr />
        </div>

        <div>
        <ul className='Menu'>
        <li><a href="#">Tổng quan</a></li>
        <li><a href="#">Nhập - xuất với NCC</a>
        <ul className='subMenu'>
          <li><a href="#">Xuất hàng</a>
          <ul>
            <li><a href="#">Phiếu xuất hàng</a></li>
          </ul>
          </li>
          <li><a href="#">Nhập hàng</a>
          <ul>
            <li><a href="#">Phiếu nhập hàng</a></li>
          </ul>
          </li>
        </ul>
        </li>

        <li><a href="#">Nhập - xuất với Nội Bộ</a>
        <ul>
        <li><a href="#">Xuất hàng</a>
          <ul>
            <li><a href="#">Lệnh xuất hàng</a></li>
            <li><a href="#">Phiếu xuất hàng</a></li>
          </ul>
          </li>
          <li><a href="#">Nhập hàng</a>
          <ul>
            <li><a href="#">Lệnh nhập hàng</a></li>
            <li><a href="#">Phiếu nhập hàng</a></li>
          </ul>
          </li>
          </ul>
        </li>
        
        <li><a href="#">Nhập - xuất với NVBH</a>
        <ul>
        <li><a href="#">Xuất hàng</a>
          <ul>
            <li><a href="#">Phiếu xuất hàng</a></li>
          </ul>
          </li>
          <li><a href="#">Nhập hàng</a>
          <ul>
            <li><a href="#">Phiếu nhập hàng</a></li>
          </ul>
          </li>
          </ul>
        </li>

        <li><a href="#">Quản lý kiểm kê</a></li>

        <li><a href="#">Báo cáo thống kê</a>
        <ul>
          <li><a href="#">Báo cáo nhập kho</a></li>
          <li><a href="#">Báo cáo tồn kho</a></li>
          <li><a href="#">Báo cáo xuất nhập tồn</a></li>
        </ul>
        </li>

        <li><a href="#">Danh mục</a>
        <ul>
          <li><a href="#">Nguồn hàng xuất/nhập</a></li>
          <li><a href="#">Danh mục hàng hoá</a></li>
          <li><a href="#">Hợp đồng</a></li>
        </ul>
        </li>
        </ul>
        </div>
      
      </div>
    </div>
  )
}

export default NavBar