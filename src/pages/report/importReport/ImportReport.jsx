/* eslint-disable */
import React from "react";

import "./ImportReport.css";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
const ImportReport = () => {
  return (
    <>
      <Header />
      <NavBar />
      <div className="reportImport-container">
        <h2 className="reportImport-h2">Biểu Đồ Báo Cáo Nhập Kho</h2>
        <div className="date-ImportReport">
          <span className="date-ImportReport1">Từ ngày</span>
          <input type="date" className="date-ImportReport3" />
          <span className="date-ImportReport2">Đến ngày</span>
          <input type="date" className="date-ImportReport3" />
          <span className="reportImport-type">Loại báo cáo</span>
          <select name="" id="" className="reportImport-select">
            <option value="">Biểu đồ tròn</option>
            <option value="">Biểu đồ cột</option>
          </select>
        </div>
        <div className="axis-y">
          <span className="axis-y-text">Số lượng hàng hoá</span>
        </div>
        <div className="reportImport-chart">
          <div className="reportImport-bar" style={{ height: "80%" }}>
            1620
          </div>
          <div className="reportImport-bar" style={{ height: "90%" }}>
            1800
          </div>
          <div className="reportImport-bar" style={{ height: "90%" }}>
            1800
          </div>
          <div className="reportImport-bar" style={{ height: "50%" }}>
            1000
          </div>
        </div>
        <div className="reportImport-labels">
          <span>Hàng hoá 1</span>
          <span>Hàng hoá 2</span>
          <span>Hàng hoá 3</span>
          <span>Hàng hoá 4</span>
        </div>
        <div className="axis-x">
          <span className="axis-x-text">Loại hàng hoá</span>
        </div>
      </div>
    </>
  );
};

export default ImportReport;
