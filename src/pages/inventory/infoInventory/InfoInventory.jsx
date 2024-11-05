/* eslint-disable */
import React from 'react'
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
import './InfoInventory.css';
const InfoInventory = () => {
  return (
    <>
      <Header className="header_infim" />
      <NavBar />
      <div className='container_infinven'>
        <div className='lef_infim'>
          <div className='top_sub_infim'>
            <p className='h1_top_sub_infim'>
              <span>
                Danh sách biên bản kiểm kê hàng hóa 
              </span>
              <span>
                <i className="fa-solid fa-chevron-right"></i>
              </span>
              Xem biên bản kiểm kê hàng hóa
            </p>
          </div>
          <div className='sub_infinven'>
            <div className='f1_infim'>
              <p className='cen_inf'>
                BẢNG KIỂM KÊ HÀNG HÓA
                <span className='icon_x_inf'>
                  <i className="fa-solid fa-x"></i>
                </span>
              </p>
            </div>
            <div className='box1_infim'>
              <p className='inf_inf' style={{ fontSize: "20px", fontWeight: '700' }}>Thông tin chung</p>
              <div className='sub_box1_infim'>
                <div className='flecx_inf'>
                  <p>Mã biên bản</p>
                  <div className='inp1_inf'>
                  </div>
                </div>
                <div></div>
                <div className='flecx_inf'>
                  <p>Kiểm kê tại kho</p>
                  <div className='inp1_inf'>
                  </div>
                </div>
                {/* <div className='flecx_inf'>
                  <p>Nhập tại kho</p>
                  <div className='inp1_inf'></div>
                </div> */}
                <div className='flecx_inf'>
                  <p>Ngày kiếm</p>
                  <div className='inp1_inf'>
                  </div>
                </div>
                {/* <div className='flecx_inf'>
                  <p>Mã kho</p>
                  <div className='inp1_inf'></div>
                </div> */}
                {/* <div className='sub2_inven'>
                  <p>Mục đích</p>
                  <div className='inp2_infven'>
                  </div>
                </div> */}
                
              </div>
              <div className='sub2_inven'>
                  <p>Mục đích</p>
                  <div className='inp2_infven'>
                  </div>
                </div>
            </div>
            <div className='box2_infim'>
              <table className='List_infim'>
                <tbody>
                  <tr className='tr_infim'>
                    <th className='centerinfim' rowSpan={2}>STT</th>
                    <th className='centerinfim'  rowSpan={2}>Tên hàng hoá</th>
                    <th className='centerinfim'  rowSpan={2}>Mã hàng</th>
                    <th className='centerinfim'  rowSpan={2}>Đơn vị <div>tính</div></th>
                    <th className='centerinfim'  rowSpan={2}>Đơn giá</th>
                    <th className='centerinfim' colSpan={3}>Số Lượng</th>
                    <th className='centerinfim'  rowSpan={2}>Xử lý</th>
                  </tr >
                    <tr className='tr_infim'>
                    <th className='centerinfim'>Theo hệ <div>thống</div></th>
                    <th className='centerinfim'>Theo <div>kiểm kê</div></th>
                    <th className='centerinfim'>Chênh <div>Lệch</div></th>
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
        <div className='rig_infim'>
          <div>
            <p>Tình trạng</p>
          </div>
          <div className='status_infim'>
            <div className='flex2_inf'>
              <p>Tạo bởi</p>
              <button className='b1_infim'>Xóa <span><i className="fa-solid fa-key"></i></span></button>
            </div>
            <div className='out_inf'></div>
            <div className='out_inf'></div>
          </div>
          <div className='status_infim'>
            <div className='flex2_inf'>
              <p>Duyệt bởi</p>
              <button className='b2_infim'>Duyệt <span><i className="fa-solid fa-key"></i></span></button>
            </div>
            <div className='out_inf'></div>
            <div className='out_inf'></div>
          </div>
          <div className='status_infim'>
            <div className='flex2_inf'>
              <p>Từ chối bởi</p>
              <button className='b3_infim'>Từ chối <span><i className="fa-solid fa-key"></i></span></button>
            </div>
            <div className='out_inf'></div>
            <div className='out_inf'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoInventory;