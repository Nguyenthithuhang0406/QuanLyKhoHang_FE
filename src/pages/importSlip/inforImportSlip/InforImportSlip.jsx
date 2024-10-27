/* eslint-disable */
import React from 'react'

import './InforImportSlip.css';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
import Imagecontract from '@/assets/images/contract.png'
const InforImportSlip = () => {
  return (
    <>
      <Header className="header_infim" />
      <NavBar/>
      <div className='container_infim'>
          <div className='lef_infim'>
            <div className='top_sub_infim'>
            <p className='h1_top_sub_infim'>Xuất - nhập với NCC<span><i className="fa-solid fa-chevron-right"></i></span> Xem phiếu nhập kho</p>
            </div>
            <div className='sub_infim'>
              <div className='f1_infim'>
              <p className='cen_inf'>PHIẾU NHẬP KHO <span className='icon_x_inf'><i className="fa-solid fa-x"></i></span></p>
              </div>
              <div className='box1_infim'>
                  <p className='inf_inf'><h3>Thông tin chung</h3></p>
                  <div className='sub_box1_infim'>
                    <div className='flecx_inf'>
                      <p>Nguồn xuất</p>
                      <div className='inp1_inf'></div>
                    </div>
                    <div  className='flecx_inf'>
                      <p>Mã phiếu</p>
                      <div className='inp1_inf'></div>
                    </div>
                    <div  className='flecx_inf'>
                      <p>Mã nguồn</p>
                      <div className='inp1_inf'></div>
                    </div> 
                    <div  className='flecx_inf'>
                      <p>Nhập tại kho</p>
                      <div className='inp1_inf'></div>
                    </div> 
                    <div  className='flecx_inf'>
                      <p>Số điện thoại</p>
                      <div className='inp1_inf'></div>
                    </div>
                    <div  className='flecx_inf'>
                      <p>Mã kho</p>
                      <div className='inp1_inf'></div>
                    </div>
                    <div  className='flecx_inf'>
                      <p>Địa chỉ</p>
                      <div className='inp2_inf'></div>
                    </div>
                    <div  className='flecx_inf'>
                      <p>Lí do</p>
                      <div className='inp2_inf'></div>
                    </div>
                  </div>
              </div>
              <div className='box2_infim'>
              <table className='List_infim'>
            <tr className='tr_infim'> 
              <th className='centerinfim'>STT</th>
              <th className='centerinfim'>Tên hàng hoá</th>
              <th className='centerinfim'>Mã hàng</th>  
              <th className='centerinfim'>Đơn vị <div>tính</div></th>
              <th className='centerinfim'>Đơn giá</th>
              <th className='centerinfim'>Số<div>Lượng</div></th>
              <th className='centerinfim'>Chiết khấu</th>
              <th className='centerinfim'>Thành tiền</th>
            </tr>
            <tr className='tr_infim'>
              <td>1</td>
              <td>ĐT Samsung Galaxy </td>
              <td>XXXXX </td>
              <td>Cái</td>
              <td>30.000.000</td>
              <td>10</td>
              <td>5%</td>
              <td>285.000.000</td>
            </tr>
            <tr className='tr_infim'>
              <td>1</td>
              <td>ĐT Samsung Galaxy </td>
              <td>XXXXX </td>
              <td>Cái</td>
              <td>30.000.000</td>
              <td>10</td>
              <td>5%</td>
              <td>285.000.000</td>
            </tr>
            <tr className='tr_infim'>
              <td>1</td>
              <td>ĐT Samsung Galaxy </td>
              <td>XXXXX </td>
              <td>Cái</td>
              <td>30.000.000</td>
              <td>10</td>
              <td>5%</td>
              <td>285.000.000</td>
            </tr>
            <tr className='tr_infim'>
              <td>1</td>
              <td>ĐT Samsung Galaxy </td>
              <td>XXXXX </td>
              <td>Cái</td>
              <td>30.000.000</td>
              <td>10</td>
              <td>5%</td>
              <td>285.000.000</td>
            </tr>
            <tr className='tr_infim'>
              <td>1</td>
              <td>ĐT Samsung Galaxy </td>
              <td>XXXXX </td>
              <td>Cái</td>
              <td>30.000.000</td>
              <td>10</td>
              <td>5%</td>
              <td>285.000.000</td>
            </tr>
            <tr className='tr_infim'>
              <th className='sum_inf_1' colSpan={7}>Tổng</th>
              <th className='sum_inf_2'>315.154.168</th>
            </tr>
          </table>
              </div>
              <div className='box3_infim'>
                  <p><i class="fa-solid fa-file-contract"></i>    <span>Hợp đồng</span></p>
                  <div className='img_contract'>
                      <img className='img_contract' src={Imagecontract} alt="" />
                      <img className='img_contract' src={Imagecontract} alt="" />
                  </div>
              </div>
            </div>
          </div>
          <div className='rig_infim'>
              <div>
                <p>Tình trạng</p>
              </div>
              <div className='status_infim'>
              <div className='flex2_inf'>
                <p>Tạo bởi</p>
                <button className='b1_infim'>Xóa <span><i class="fa-solid fa-key"></i></span></button>
              </div>
              <div className='out_inf'></div>
              <div className='out_inf'></div>
              </div>
              <div className='status_infim'>
              <div className='flex2_inf'>
                <p>Duyệt bởi</p>
                <button className='b2_infim'>Duyệt <span><i class="fa-solid fa-key"></i></span></button>
              </div>
              <div className='out_inf'></div>
              <div className='out_inf'></div>
              </div>
              <div className='status_infim'>
              <div className='flex2_inf'>
                <p>Từ chối bởi</p>
                <button className='b3_infim'>Từ chối <span><i class="fa-solid fa-key"></i></span></button>
              </div>
              <div className='out_inf'></div>
              <div className='out_inf'></div>
              </div>
              <div className='status_infim'>
              <div className='flex2_inf'>
                <p>Đã nhận bởi</p>
                <button className='b4_infim'>Đã nhận</button>
              </div>
              <div className='out_inf'></div>
              <div className='out_inf'></div>
              </div>
          </div>
      </div>
    </>
  )
}

export default InforImportSlip;