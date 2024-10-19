/* eslint-disable */
import React from 'react'

import './CreatedExportSlip.css';
import NavBar from '@/components/navBar/NavBar';
import Header from '@/components/header/Header';
const CreatedExportSlip = () => {
  return (
    <>
      <Header className='header_createdExportSlip'/>
      <NavBar/>
      <div className='container_createdExportSlip'>
        <div className='createdExportSlip_0'>
          <div>
            <p className='createdExportSlip_1'>Xuất-nhập với NCC <span><i class="fa-solid fa-chevron-right"></i></span> <span>Tạo mới phiếu xuất kho</span></p>
          </div>
          <div className='submit_createdExportSlip_0'>
            <button type="submit" className='buton-createdExportSlip_2'>+Thêm hàng hóa từ file ngoài</button>
            <button type="submit" className='buton-createdExportSlip_2'>+Thêm hàng hóa từ hệ thống</button>
          </div>
        </div>
        <div className='sub1_createdExportSlip'>
          <div>
            <p className='text_sub1_createdExportSlip'>PHIẾU XUẤT KHO</p>
          </div>
          <div>
            <table className='table_createdExportSlip'>
              <p className='text_sub2_createdExportSlip'>Thông tin chung</p>
              <tr className='text_sub3_createdExportSlip'>
                <th className='text_sub5_createdExportSlip'>Nguồn nhận</th>
                <select name="" id="" className='input_createdExportSlip'></select>
                <th>Mã phiếu</th>
                <select name="" id="" className='input_createdExportSlip'></select>
              </tr>
              <tr>
                <th className='text_sub6_createdExportSlip'>Mã nguồn</th>
                <select name="" id="" className='input_createdExportSlip'></select>
              </tr>
              <tr>
                <th className='text_sub7_createdExportSlip'>Số điện thoại</th>
                <input type="text" name="" id="" className='input_createdExportSlip' />
              </tr>
              <tr>
                <th className='text_sub4_createdExportSlip'>Địa chỉ</th>
                <textarea name="" id="" className='input1_createdExportSlip'></textarea>
                <th className='text_sub8_createdExportSlip'>Lí do xuất</th>
                <textarea name="" id="" className='input1_createdExportSlip'></textarea>
              </tr>
            </table>
          </div>
          <div className='text_sub9_createdExportSlip'>
            <table className='List'>
              <tr>
                <th className='listProduct_th'>STT</th>
                <th className='listProduct_th'>Tên hàng hóa</th>
                <th className='listProduct_th'>Mã hàng</th>
                <th className='listProduct_th'>Đơn vị tính</th>
                <th className='listProduct_th'>Đơn giá</th>
                <th className='listProduct_th'>Số lượng</th>
                <th className='listProduct_th'>Chiết khấu</th>
                <th className='listProduct_th'>Thành tiền</th>
                <th className='listProduct_th'>Xóa</th>
              </tr>
              <tr>
                <td>1</td>
                <td>ĐT Samsung Galaxy </td>
                <td>XXXXX </td>
                <td>Cái </td>
                <td>30.000.000</td>
                <td>10</td>
                <td>5%</td>
                <td>285.000.000</td>
                <td className='purple'>
                <span className='bin'><i class="fa-solid fa-trash"></i></span></td>
              </tr>
              <tr>
                <td>2</td>
                <td>ĐT Xiaomi Redmi 10 </td>
                <td>XXXXX </td>
                <td>Cái </td>
                <td>3.998.000</td>
                <td>10</td>
                <td></td>
                <td>39.980.000</td>
                <td className='purple'>
                <span className='bin'><i class="fa-solid fa-trash"></i></span></td>
              </tr>
              <tr>
                <td>3</td>
                <td>ĐT Iphone 13 Promax </td>
                <td>XXXXX </td>
                <td>Cái </td>
                <td>40.000.000</td>
                <td>5</td>
                <td>5%</td>
                <td>78.154.168</td>
                <td className='purple'>
                <span className='bin'><i class="fa-solid fa-trash"></i></span></td>
              </tr>
              <tr>
                <td>4</td>
                <td>Tai nghe Xiaomi </td>
                <td>XXXXX </td>
                <td>Cái </td>
                <td>200.000</td>
                <td>4</td>
                <td></td>
                <td>800.000</td>
                <td className='purple'>
                <span className='bin'><i class="fa-solid fa-trash"></i></span></td>
              </tr>
              <tr>
                <td>5</td>
                <td>Tai nghe Oppo Renco </td>
                <td>XXXXX </td>
                <td>Cái </td>
                <td>790.000</td>
                <td></td>
                <td></td>
                <td></td>
                <td className='purple'>
                <span className='bin'><i class="fa-solid fa-trash"></i></span></td>
              </tr>
              <td colSpan={7} className='tong_createdExportSlip'>Tổng</td>
              <td colSpan={2} className='tong_createdExportSlip'>315.154.168</td>
            </table>
          </div>
          <div>
            <table className='table1_createdExportSlip'>
            <p className='input3_createdExportSlip'><i class="fa-sharp fa-solid fa-file-pen"></i>Hợp đồng</p>
            <tr>
              <th>Nội dung</th>
              <input type="text" name="" id="" className='input2_createdExportSlip'/>
            </tr>
            <tr >
              <th>Hình ảnh</th>
              <div className='sub10_createdExportSlip'>
                <input type="text" name="" id=""className='input4_createdExportSlip' />
                <i class="fa-solid fa-cloud-arrow-up"></i>
              </div>
            </tr>
            </table >
        </div>
        
        <div>
            <table className='table2_createdExportSlip'>
            <p className='input5_createdExportSlip'><i class="fa-solid fa-qrcode"></i>Cứ sở</p>
            <tr>
              <th>Nội dung</th>
              <input type="text" name="" id="" className='input7_createdExportSlip'/>
            </tr>
            <tr >
              <th>Hình ảnh</th>
              <div className='sub10_createdExportSlip'>
                <input type="text" name="" id=""className='input6_createdExportSlip' />
                <i class="fa-solid fa-cloud-arrow-up"></i>
              </div>
            </tr>
            </table >
        </div>
        <div className='createdExportSlip_button'>
              <button type='button' className='createdExportSlip_luu'>Lưu</button>
              <button type='submit '  className='createdExportSlip_huy'>Hủy</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default CreatedExportSlip;