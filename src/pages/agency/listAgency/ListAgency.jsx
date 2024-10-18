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
        <div className="search-form">
          <form className="search-form-grid">
            {/* Cột 1: Mã phiếu + Tình trạng */}
            <div className="search-column">
              <input
                type="text"
                placeholder="Mã phiếu"
                className="search-input"
              />
              <select className="search-select">
                <option value="">Tình trạng</option>
                <option value="cho_duyet">Chờ duyệt</option>
                <option value="da_duyet">Đã duyệt</option>
                <option value="tu_choi">Từ chối</option>
                <option value="da_nhap">Đã nhập</option>
              </select>
            </div>

            {/* Cột 2-3: Nguồn xuất và ngày tháng */}
            <div className="search-column-wide">
              <select className="search-select">
                <option value="">Nguồn xuất</option>
                <option value="A">Đại lý A</option>
                <option value="B">Đại lý B</option>
                <option value="C">Đại lý C</option>
              </select>

              <div className="date-inputs">
                <div className="date-field">
                  <label>Từ ngày</label>
                  <div className="date-input-container">
                    <input
                      type="date"
                      className="date-input"
                      
                    />
                  </div>
                </div>

                <div className="date-field">
                  <label>Đến ngày</label>
                  <div className="date-input-container">
                    <input
                      type="date"
                      className="date-input"
                      placeholder="Đến ngày"
                    />
                  </div>
                </div>
              </div>

              <button type="submit" className="search-button">
                Tìm kiếm
              </button>
            </div>
          </form>
        </div>

        {/* Bảng dữ liệu */}
        <div className="custom-table">
          <div className="table-header">
            <div className="table-row">
              <div className="table-cell">STT</div>
              <div className="table-cell">Mã lệnh</div>
              <div className="table-cell">Người xuất</div>
              <div className="table-cell">Giá trị</div>
              <div className="table-cell">Thời gian</div>
              <div className="table-cell">Tình trạng</div>
              <div className="table-cell">Thao tác</div>
            </div>
          </div>

          <div className="table-body">
            <div className="table-row">
              <div className="table-cell">1</div>
              <div className="table-cell">XXXXXX</div>
              <div className="table-cell">Đại lý A</div>
              <div className="table-cell">50.000.000</div>
              <div className="table-cell">13/11/2022 15:30</div>
              <div className="table-cell">
                <span className="status pending">Chờ duyệt</span>
              </div>
              <div className="table-cell">
                <button className="edit-btn">
                <i class="fa-regular fa-pen-to-square"></i>
                </button>
                <button className="delete-btn">
                <i class="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>

            <div className="table-row">
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
                <i className="fa-solid fa-trash"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListAgency;