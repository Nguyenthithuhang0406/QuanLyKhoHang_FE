/* eslint-disable */
import React from 'react'

import './ListInventory.css';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';

const ListInventory = () => {
  return (
    <>
    <Header className="ListInventory" />
    <NavBar/>
      <div className="container_ListInventory">
        <div className="sub_ListInventory">
          <div className="sub_1_ListInventory">
            <div>
              <span>Mã phiếu</span>
              <input type="text" className="input_ListImportSlip"/>
              <span>Tình trạng</span>
              <select name="status" className="input2_ListInventory">
                <option value=""></option>
                <option value="PENDING">Chờ duyệt</option>
                <option value="REJECTED">Từ chối</option>
                <option value="CONFIRMED">Đã duyệt</option>
              </select>
            </div>
            
            <div>
              <span className="date_ListInventory1">Từ ngày</span>
              <input type="date" className="date_ListInventory" />
              <span className="date_ListInventory2">Đến ngày</span>
              <input type="date" className="date_ListInventory3"/>
            </div>
          </div>
          <div className="sub_2_ListInventory" >
            <span>
              Tìm kiếm <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="sub_3_ListInventory">
          <p>+ Tạo biên bản kiểm kê</p>
        </div>
        <div className="table_ListInventory">
          <table className="table2_ListInventory">
            <tbody>
              <tr className="ListInventory_tr">
                <th className="ListInventory_th_1">STT</th>
                <th className="ListInventory_th_2">Mẫu biên bản</th>
                <th className="ListInventory_th_2">Mục đích</th>
                <th className="ListInventory_th">Thời gian</th>
                <th className="ListInventory_th">Tình trạng</th>
                <th className="ListInventory_th">Thao tác</th>
              </tr>
              <tr>
                <td>1</td>
                <td>BB78922SH</td>
                <td>Kiểm tra định kỳ tháng 10/2022</td>
                <td>30/10/2022 15:30</td>
                <td><button className='button1_ListInventory'>Chờ duyệt</button></td>
                <td className="purple">
                  <span className="pen_ListImportSlip" >
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className="bin_ListImportSlip" >
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>BB15485DF</td>
                <td>Kiểm tra định kỳ tháng 10/2022</td>
                <td>30/10/2022 9:52</td>
                <td><button className='button3_ListInventory'>Từ chối</button></td>
                <td className="purple">
                  <span className="pen_ListImportSlip" >
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className="bin_ListImportSlip" >
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>BB18568GH</td>
                <td>Kiểm tra định kỳ tháng 9/2022</td>
                <td>15/9/2022 12:02</td>
                <td><button className='button_ListInventory'>Đã duyệt</button></td>
                <td className="purple">
                  <span className="pen_ListImportSlip" >
                    <i className="fa-solid fa-pen"></i>
                  </span>
                  <span className="bin_ListImportSlip" >
                    <i className="fa-solid fa-trash"></i>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default ListInventory;