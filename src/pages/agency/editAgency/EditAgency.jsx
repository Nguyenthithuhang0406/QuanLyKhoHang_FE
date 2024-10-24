/* eslint-disable*/
import React from "react";

import "./EditAgency.css";
import Header from "../../../components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import ip from "../../../assets/images/anhip.jpg";
const EditAgency = () => {
  return (
    <>
      <Header className="header_editAgency" />
      <NavBar />
      <div className="container_editAgency">
        <div className="h1_editAgency">
          <p className="text__1">
            Quản lí nguồn{" "}
            <span>
              <i class="fa-solid fa-chevron-right"></i>
            </span>{" "}
            <span>Cập nhật nguồn</span>
          </p>
        </div>
        <div className="h2_editAgency">
          <div className="sub1_editAgency">
            <p className="text_sub1_editAgency">Cập nhật nguồn</p>
          </div>
          <div className="sub2_editAgency">
            <div className="idAgency">
              <label htmlFor="mk">Mã nguồn</label>
              <input
                className="input_editAgency"
                type="text"
                name="mk"
                id="mk"
              />
            </div>
            <div className="nameAgency">
              <label htmlFor="th">Tên nguồn</label>
              <input
                className="input_editAgency"
                type="text"
                name="tk"
                id="tk"
              />
            </div>
            <div className="groupAgency">
              <label htmlFor="nh">Số điện thoại</label>
              <input
                className="input_editAgency"
                type="text"
                name="nk"
                id="nk"
              />
            </div>
            {/* <div className="image_prod">
              <label htmlFor="">Hình ảnh</label> <br />
              <img className="image_ip" src={ip} alt="" />
              <i className="fa-solid fa-cloud-arrow-up"></i>
            </div> */}

            <div className="unitAgency">
              <label htmlFor="dvi">Địa chỉ</label>
              <br />
              <br />
              <input
                className="input_editAgency"
                type="text"
                name="dvi"
                id="dvi"
              />
            </div>
            <div className="describe_editAgency">
              <label htmlFor="mt">Mô tả nguồn</label>
              <br />
              <br />
              <textarea className="mota_editAgency" />
            </div>
            <div className="button__h3">
              <button className="b1__inf" type="submit">
                Lưu
              </button>
              <button className="b2__inf" type="button">
                Hủy
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditAgency;
