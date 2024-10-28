/* eslint-disable */
import React from 'react'
import './InforExportSlip.css';
import NavBar from '@/components/navBar/NavBar';
import Header from '@/components/header/Header';

const InforExportSlip = () => {

// Thêm các sản phẩm khác tương tự


return (

<div>

  <Header className="Header" />
    <NavBar/> 
  
  {/* <div className="export-slip-page"> */}
  
  <div className="export-slip-container">
    <div className="main-content">
      <div className="export-header">
        <h3>PHIẾU XUẤT KHO</h3>
        <span className="close-btn">X</span>
      </div>

      <div className="form-container">
        <div className="form-header">
          <h4>Thông tin chung </h4>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Nguồn nhận</label>
            <input type="text" value="Nhà cung cấp A" readOnly />
          </div>
          <div className="form-group">
            <label>Mã phiếu</label>
            <input type="text" readOnly />
          </div>
        </div>

        <div className="form-row">
          
          <div className="form-group">
            <label>Mã nguồn</label>
            <input type="text" value="NCCA-9843" readOnly />
          </div>
          <div className="form-group">
            <label>Xuất tại kho</label>
            <input type="text" value="Kho tổng" readOnly />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Số điện thoại</label>
            <input type="text" value="0985424661" readOnly />
          </div>
          <div className="form-group">
            <label>Mã kho</label>
            <input type="text" value="KT_5467" readOnly />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Địa chỉ</label>
            <input type="text" value="446 Minh Khai, p. Vĩnh Tuy, q2, HCM." readOnly />
          </div>
          <div className="form-group">
            <label>Lý do</label>
            <input type="text" value="Xuất hàng mới về" readOnly />
          </div>
        </div>
      </div>

      <div className="products-container">
        <div className="products-row header">
          <div className="col">STT</div>
          <div className="col">Tên hàng hóa</div>
          <div className="col">Mã hàng</div>
          <div className="col">Đơn vị tính</div>
          <div className="col">Đơn giá</div>
          <div className="col">Số lượng</div>
          <div className="col">Chiết khấu</div>
          <div className="col">Thành tiền</div>
        </div>

        <div className="products-row">
          <div className="col">1</div>
          <div className="col">ĐT Samsung Galaxy Z</div>
          <div className="col">XXXXX</div>
          <div className="col">Cái</div>
          <div className="col">30,000,000</div>
          <div className="col">10</div>
          <div className="col">5%</div>
          <div className="col">285,000,000</div>
        </div>

        <div className="products-row">
          <div className="col">2</div>
          <div className="col">ĐT Redmi note 13</div>
          <div className="col">XXXXX</div>
          <div className="col">Cái</div>
          <div className="col">60,000,000</div>
          <div className="col">10</div>
          <div className="col"></div>
          <div className="col">585,000,000</div>
        </div>
        {/* Thêm các dòng sản phẩm khác tương tự */}

      </div>

      <div className="contract-section">
        <h4>Hợp đồng</h4>
        <div className="contract-previews">
          <div className="preview"></div>
          <div className="preview"></div>
        </div>
      </div>
    </div>

    <div className="status-panel">
      <div className="status-header">
        <h4>Tình trạng</h4>
      </div>
      <div className="status-group">
        <div className="status-label">Tạo bởi <button className="status-btn delete">Xóa</button></div>
        
       
          <div className="status-info"><input type="text" value="Nguyễn Văn A" readOnly  /></div>
          <div className="status-info"><input type="text" value = "13/11/2022 15:20" /></div>
        
      </div>

      <div className="status-group">
        <div className="status-label">Duyệt bởi <button className="status-btn approve">Duyệt</button> </div>

        <div className="status-info"><input type="text" readOnly /></div>
        <div className="status-info"><input type="text" readOnly /></div>
        
      </div>

      <div className="status-group">
        <div className="status-label">Từ chối bởi  <button className="status-btn reject">Từ chối</button></div>
        
        <div className="status-info"><input type="text" readOnly /></div>
        <div className="status-info"><input type="text" readOnly /></div>
      </div>

      <div className="status-group">
        <div className="status-label">Đã xuất bởi  <button className="status-btn exported" disabled>Đã xuất</button></div>
        
        <div className="status-info"><input type="text" readOnly /></div>
        <div className="status-info"><input type="text" readOnly /></div>
      </div>

      <div className="status-group">
        <div className="status-label">Hoàn hàng bởi
        <button className="status-btn return">Hoàn hàng</button>
        </div>
        
        <div className="status-info"><input type="text" readOnly /></div>
        <div className="status-info"><input type="text" readOnly /></div>
      </div>
    </div>
  {/* </div> */}
</div>
</div>
)
}

export default InforExportSlip;