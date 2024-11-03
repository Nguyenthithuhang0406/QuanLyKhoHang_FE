/* eslint-disable */
import React from 'react'
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
import './CreatedInventory.css';
const CreatedInventory = () => {
  return (
    <>
    <Header className='headerCreatedInventory' />
    <NavBar />
      <div className='CreatedInventory-body'>
        <div className='cis-address'>
          <p >Danh sách biên bản kiểm kê hàng hóa<span><i class="fa-solid fa-chevron-right"></i></span> Tạo mới phiếu nhập kho </p>
        </div>
        <div className='cis-addbutton'>
          
          <button >+Thêm hàng từ hệ thống</button>
        </div>
        <div className='cis-frame'>
          <div className='cis-title'>BẢN KIỂM KÊ HÀNG HÓA</div>
          <div className='cis-info'>
            <div className='i-title'>Thông tin chung</div>
            <div className='i-line1'>
              <div className='i-o'>
                <div className='i-name'>Kiểm kê tại kho</div>
                <select name="providerId" id="source" ></select>
              </div>
              <div className='i-o'>
                <div className='date_CreatedInventory2'>Ngày kiểm</div>
                <input type="date" className="date_CreatedInventory"/>

              </div>
            </div>
            <div className='i-line4'> 
                <div className='i-name_1'></div>Mục đích<textarea> </textarea>
            </div>
          </div>
          <div className='CreatedInventory-table'>
            <table className='CreatedInventory-data'>
              <tbody>
                  <tr >
                    <th className='listProduct_th' rowSpan={2}>STT</th>
                    <th className='listProduct_th'  rowSpan={2}>Tên hàng hoá</th>
                    <th className='listProduct_th'  rowSpan={2}>Mã hàng</th>
                    <th className='listProduct_th'  rowSpan={2}>Đơn vị <div>tính</div></th>
                    <th className='listProduct_th'  rowSpan={2}>Đơn giá</th>
                    <th className='listProduct_th' colSpan={3}>Số Lượng</th>
                    <th className='listProduct_th'  rowSpan={2}>Xử lý</th>
                  </tr >
                    <tr>
                    <th className='listProduct_th'>Theo hệ <div>thống</div></th>
                    <th className='listProduct_th'>Theo <div>kiểm kê</div></th>
                    <th className='listProduct_th'>Chênh <div>Lệch</div></th>
                    </tr>
                 
                  <tr>
                    <td>1</td>
                    <td>ĐT Sam Sung</td>
                    <td>XXX1234</td>
                    <td>Cái</td>
                    <td>20.000.000</td>
                    <td>20</td>
                    <td>20</td>
                    <td>0</td>
                    <td>Xuất kho</td>
                  </tr>
                  <tr className='tr_infim'>
                    <th className='sum_inf_1' colSpan={8}>Tổng</th>
                    <th className='sum_inf_2'></th>
                  </tr>
              </tbody>

            </table>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreatedInventory;