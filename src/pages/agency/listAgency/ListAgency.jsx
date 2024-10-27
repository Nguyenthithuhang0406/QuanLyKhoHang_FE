import React from 'react';
import './ListAgency.css';
import NavBar from '@/components/navBar/NavBar';
import Header from '@/components/header/Header';

const ListAgency = () => {
  return (
    <div>
      <Header className="header" />
      <NavBar />

      <div className="table-container">
        {/* Form tìm kiếm */}
        <div className="search-container">
        <form>
          <div className="search-row">
            <div className="search-group">
              <label htmlFor="sourceCode">Mã nguồn</label>
              <input type="text" id="sourceCode" name="sourceCode" />
            </div>
            <div className="search-group">
              <label htmlFor="sourceName">Tên nguồn</label>
              <input 
                type="text" 
                id="sourceName" 
                name="sourceName" 
                defaultValue="Sharp"
              />
            </div>
          </div>
          <div className="search-row">
            <div className="search-group">
              <label htmlFor="sourceType">Loại nguồn</label>
              <select id="sourceType" name="sourceType">
                <option value="supplier">Nhà cung cấp</option>
              </select>
            </div>
            <div className="search-group">
              <label htmlFor="phone">Số điện thoại</label>
              <input type="tel" id="phone" name="phone" />
            </div>
          </div>
          <button type="submit" className="btn-search">
            <span>Tìm kiếm</span>
            <span>🔍</span>
          </button>
        </form>
      </div>

        {/* Bảng dữ liệu */}
        <div className="custom-table">
          <div className="table-header">
            <div className="table-row">
              <div className="table-cell">STT</div>
              <div className="table-cell">Tên nguồn</div>
              <div className="table-cell">Loại nguồn</div>
              <div className="table-cell">Mã nguồn</div>
              <div className="table-cell">Số Điện thoại </div>
              <div className="table-cell">Địa chỉ</div>
              <div className="table-cell">Thao tác</div>
            </div>
          </div>

          <div className="table-body">
            <div className="table-row">
              <div className="table-cell">1</div>
              <div className="table-cell">Sharp</div>
              <div className="table-cell">Nhà cung cấp  A</div>
              <div className="table-cell">NC03</div>
              <div className="table-cell">0389353785</div>
              <div className="table-cell">
                {/* <span className="status pending">Chờ duyệt</span> */}
                Hà Nội
              </div>
              <div className="table-cell">
                {/* <button className="edit-btn">
                <i class="fa-solid fa-pen"></i>
                </button> */}
                <button className="delete-btn">
                <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>

            {/* <div className="table-row">
              <div className="table-cell">2</div>
              <div className="table-cell">YYYYYY</div>
              <div className="table-cell">Đại lý B</div>
              <div className="table-cell">30.000.000</div>
              <div className="table-cell">12/11/2022 12:45</div>
              <div className="table-cell">
                <span className="status approved">Đã duyệt</span>
              </div>
              <div className="table-cell">
                <button className="edit-btn">
                <i class="fa-solid fa-pen"></i>
                </button>
                <button className="delete-btn">
                <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAgency;