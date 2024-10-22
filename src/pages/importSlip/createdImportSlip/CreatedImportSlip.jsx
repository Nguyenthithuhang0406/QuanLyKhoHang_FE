/* eslint-disable */
import Header from '@/components/header/Header'
import NavBar from '@/components/navBar/NavBar'
import React from 'react'

import './CreateImportSlip.css';
const CreatedImportSlip = () => {
  return (
    <div>
      <Header className='headerListP' />
      <NavBar />
      <div className='cis-body'>
        <div className='cis-address'>Xuất-nhập với NCC &gt; Tạo mới phiếu nhập kho</div>
        <div className='cis-addbutton'>
          <button>+Thêm hàng từ File ngoài</button>
          <button>+Thêm hàng từ hệ thống</button>
        </div>
        <div className='cis-frame'>
          <div className='cis-title'>PHIẾU NHẬP KHO</div>
          <div className='cis-info'>
            <div className='i-title'>Thông tin chung</div>
            <div className='i-line1'>
              <div className='i-o'>
                <div className='i-name'>Nguồn xuất</div>
                <select name="source" id="source">
                </select>
              </div>
              <div className='i-o'>
                <div className='i-name'>Mã phiếu</div>
                <select name="idslip" id="idslip">
                </select>
              </div>
            </div>
            <div className='i-line2'>
              <div className='i-o'>
                <div className='i-name'>Mã nguồn</div>
                <select name="idsource" id="idsource">
                </select>
              </div>
              <div className='i-o'></div>
            </div>
            <div className='i-line3'>
              <div className='i-o'>
              <div className='i-name'>Số điện thoại</div> <input type="text" />
              </div>
              <div className='i-o'></div>
            </div>
            <div className='i-line4'>
              <div className='i-o'>
                <div className='i-name'>Địa chỉ</div><textarea name="s-address" id="s-address" cols={50} rows={3}></textarea>
              </div>
              <div className='i-o'>
                <div className='i-name'>Lý do nhập</div><textarea name="reasons" id="reasons" cols={50} rows={3}></textarea>
              </div>
            </div>
          </div>

          <div className='cis-table'>
            
              <div className='th'>STT</div>
              <div className='th'>Tên hàng hoá </div>
              <div className='th'>Mã hàng </div>
              <div className='th'>Đơn vị tính </div>
              <div className='th'>Đơn giá </div>
              <div className='th'>Số lượng </div>
              <div className='th'>Chiết khấu </div>
              <div className='th'>Thành tiền </div>
              <div className='th'>Xoá </div>
                    
              <div className='td'>1</div>
              <div className='td'>ĐT Samsung Galaxy Z </div>
              <div className='td'>XXXXX </div>
              <div className='td'>Cái </div>
              <div className='td'>30.000.000 </div>
              <div className='td'>10 </div>
              <div className='td'>5% </div>
              <div className='td'>285.000.000 </div>
              <div className='td'><i className="fa-solid fa-trash"></i> </div>
            
              <div className='td'>2</div>
              <div className='td'>ĐT Samsung Galaxy Z </div>
              <div className='td'>XXXXX </div>
              <div className='td'>Cái </div>
              <div className='td'>30.000.000 </div>
              <div className='td'>10 </div>
              <div className='td'>5% </div>
              <div className='td'>285.000.000 </div>
              <div className='td'><i className="fa-solid fa-trash"></i> </div>
            
            
              <div className='total'>Tổng</div>
              <div className='total-amount'>324.980.000</div>
            
          </div>

          <div className='cis-contract'>
            <div className='c-title'><div><i className="fa-solid fa-file-contract"></i></div><div>Hợp đồng</div> </div>
            <div className='c-input'>
              <div className='cip'><div className='a'>Nội dung</div> <div className='b'><input type="text" /></div></div>
              <div className='cip'><div className='a'>Hình ảnh </div><div className='b'><input type="url" /> <div className='cicon'><i className="fa-solid fa-cloud-arrow-up"></i></div></div></div>
            </div>
          </div>

          <div className='cis-contract'>
            <div className='c-title'><div><i className="fa-solid fa-expand"></i></div><div>Sở cứ</div></div>
            <div className='c-input'>
              <div className='cip'><div className='a'>Nội dung</div> <div className='b'><input type="text" /></div></div>
              <div className='cip'><div className='a'>Hình ảnh </div><div className='b'><input type="url" /> <div className='cicon'><i className="fa-solid fa-cloud-arrow-up"></i></div></div></div>
            </div>
          </div>

          <div className='cis-button'><button className='cis-cancel'>Huỷ</button><button className='cis-save'>Lưu</button></div>
        </div>
      </div>
    </div>
  )
}

export default CreatedImportSlip;