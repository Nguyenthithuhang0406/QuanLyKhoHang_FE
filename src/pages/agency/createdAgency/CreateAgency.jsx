/* eslint-disable */
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import React from "react";

import "./CreateAgency.css";
const CreateAgency = () => {
  return (
    <div>
      <Header className="headerListP" />
      <NavBar />
      <div className="cABody">
        <div className="address">
          Quản lý nguồn hàng xuất/nhập &gt; Thêm mới nguồn{" "}
        </div>
        <div className="form">
          <div className="title">Thêm Nguồn</div>
          <div className="content">
            <div className="box">
              <div className="agency_group">
                <div className="createdAgency_div">
                  <p className="agency_p">Mã nguồn</p>
                  <input type="text" className="agency_input" />
                </div>
                <div className="createdAgency_div">
                  <p className="agency_p">Tên nguồn</p>
                  <input type="text" className="agency_input" />
                </div>
                <div className="createdAgency_div">
                  <p className="agency_p">Số điện thoại</p>
                  <input type="text" className="agency_input" />
                </div>
                <div className="createdAgency_div">
                  <p className="agency_p">Địa chỉ</p>
                  <input type="text" className="agency_input" />
                </div>
              </div>
            </div>

            <div className="box1">
              <span>Loại nguồn</span>
              <select name="SourceName" id="source">
                <option value="out">Đại lý</option>
                <option value="in">Nhà cung cấp</option>
              </select>
            </div>

            <div className="box2">
              <div>Mô tả </div>
              <textarea
                name="description"
                id="dece"
                rows={6}
                cols={50}
                placeholder="Nhập mô tả ở đây"
              ></textarea>
            </div>

            <div className="box3">
              <button className="save">Lưu</button>
              <button className="cancel">Huỷ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAgency;
