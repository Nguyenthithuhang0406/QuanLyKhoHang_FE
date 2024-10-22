/* eslint-disable */
import Header from '@/components/header/Header'
import NavBar from '@/components/navBar/NavBar' 
import React from 'react'

import './ListProduct.css';

const ListProduct = () => {
  return (
    <div>
      <Header className='headerListP'/>
      <NavBar />
      <div className='list_body'>
        <div className='search'>
          <div className='inputInfor'>
            <div className='box'>
            <span className='ID'>Mã hàng hoá</span> 
            <input type="text" className='iID' /> 
            </div>
            <div className='box'>
            <span className='name'>Tên hàng hoá</span> 
            < input type="text" className='iName' />
            </div>
          </div>
          <button className='flpButton'>Tìm kiếm <i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
       
      <button className='addButton'><i class="fa-solid fa-plus"></i>Thêm hàng hoá</button>
        
      <div className='listTable'>
          <table className='List'>
            <tr>
              <th>STT</th>
              <th>Tên hàng</th>
              <th>Mã hàng</th>
              <th>Nhóm hàng</th>
              <th>Đơn vị tính</th>
              <th>Đơn giá</th>
              <th className='center'>Thao tác</th>
            </tr>
            <tr>
              <td>1</td>
              <td>ĐT Samsung Galaxy </td>
              <td>XXXXX </td>
              <td>Điện thoại </td>
              <td>Cái </td>
              <td>30.000.000</td>
              <td className='icon'>
              <span className='pen'><i class="fa-solid fa-pen"></i></span>
              <span className='bin'><i class="fa-solid fa-trash"></i></span></td>
            </tr>
          </table>
        </div>

      </div>
    </div>
  )
}

export default ListProduct;