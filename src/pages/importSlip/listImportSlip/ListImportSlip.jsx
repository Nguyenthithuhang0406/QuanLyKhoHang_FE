/* eslint-disable */
import React, { useEffect, useState } from "react";

import "./ListImportSlip.css";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import { useParams } from "react-router-dom";
import { getImportSlipByType } from "@/api/importSlipApi/importSlip";
import { Pagination } from "antd";
const ListImportSlip = () => {

  const { type } = useParams();
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [importSlips, setImportSlips] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getListImportSlip = async () => {
      const res = await getImportSlipByType(type, page, limit);
      setImportSlips(res.importSlip);
      setTotal(res.totalResult);
      console.log(res.importSlip);
    };
    getListImportSlip();
  }, []);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  }

  const handleChangePage = (page) => {
    setPage(page);
  };

  return (
    <>
      <Header className="ListImportSlip" />
      <NavBar />
      <div className="container_ListImportSlip">
        <div className="sub_ListImportSlip">
          <div className="sub_1_ListImportSlip">
            <div>
              <span>Mã phiếu</span>
              <input type="text" className="input_ListImportSlip" />
              <span>Nguồn xuất</span>
              <select name="" id="" className="input1_ListImportSlip">
                <option value=""></option>
                <option value="">Nhà cung cấp A</option>
                <option value="">Nhà cung cấp B</option>
                <option value="">Nhà cung cấp C</option>
                <option value="">Nhà cung cấp D</option>
                <option value="">Nhà cung cấp E</option>
                <option value="">Nhà cung cấp F</option>
              </select>
            </div>
            <div>
              <span>Tình trạng</span>
              <select name="" id="" className="input2_ListImportSlip">
                <option value=""></option>
                <option value="">Chờ duyệt</option>
                <option value="">Đã nhập</option>
                <option value="">Từ chối</option>
                <option value="">Đã duyệt</option>
                <option value="">Hoàn hàng</option>
              </select>
              <span className="date_ListImportSlip1">Từ ngày</span>
              <input type="date" className="date_ListImportSlip"/>
              <span className="date_ListImportSlip2">Đến ngày</span>
              <input type="date" className="date_ListImportSlip3"/>
            </div>
          </div>
          <div className="sub_2_ListImportSlip">
            <span>
              Tìm kiếm <i className="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="sub_3_ListImportSlip">
          <p>+ Tạo phiếu nhập kho</p>
        </div>
        <div className="table_ListImportSlip">
          <table className="table2_ListImportSlip">
            <tbody>
              <tr className="ListImportSlip_tr">
                <th className="ListImportSlip_th_1">STT</th>
                <th className="ListImportSlip_th">Mã phiếu</th>
                <th className="ListImportSlip_th_2">Nguồn nhập</th>
                <th className="ListImportSlip_th">Giá trị</th>
                <th className="ListImportSlip_th">Thời gian</th>
                <th className="ListImportSlip_th">Tình trạng</th>
                <th className="ListImportSlip_th">Thao tác</th>
              </tr>
              {
                importSlips.length > 0 && importSlips.map((importSlip, index) => (
                  <tr key={importSlip._id}>
                    <td className="ListImportSlip_item">{ (page - 1) * limit + index + 1}</td>
                    <td className="ListImportSlip_item">{importSlip.importSlipCode} </td>
                    <td className="ListImportSlip_item_1">{importSlip.providerId?.providerName}</td>
                    <td className="ListImportSlip_item">{importSlip.importPrice}</td>
                    <td className="ListImportSlip_item">{formatDate(importSlip.createdAt)}</td>
                    <td className="ListImportSlip_item">
                      <select
                        className={importSlip.status === "PENDING" ? "button1_ListImportSlip" : (importSlip.status === "DONE" ? "button2_ListImportSlip" : (importSlip.status === "REJECTED" ? "button3_ListImportSlip" : (importSlip.status === "CONFIRMED" ? "button_ListImportSlip" : "")))}
                      >
                        <option
                          className={importSlip.status === "PENDING" ? "button1_ListImportSlip" : (importSlip.status === "DONE" ? "button2_ListImportSlip" : (importSlip.status === "REJECTED" ? "button3_ListImportSlip" : (importSlip.status === "CONFIRMED" ? "button_ListImportSlip" : "")))}
                          value={importSlip.status}>
                          {importSlip.status === "PENDING" ? "Chờ duyệt" : (importSlip.status === "DONE" ? "Đã nhập" : (importSlip.status === "REJECTED" ? "Từ chối" : (importSlip.status === "CONFIRMED" ? "Đã duyệt" : "")))}
                        </option>
                        <option className="button1_ListImportSlip" value="PENDING">Chờ duyệt</option>
                        <option className="button2_ListImportSlip" value="DONE">Đã nhập</option>
                        <option className="button3_ListImportSlip" value="REJECTED">Từ chối</option>
                        <option className="button_ListImportSlip" value="CONFIRMED">Đã duyệt</option>
                      </select>
                    </td>
                    <td className="purple">
                      <span className="pen_ListImportSlip">
                        <i className="fa-solid fa-pen"></i>
                      </span>
                      <span className="bin_ListImportSlip">
                        <i className="fa-solid fa-trash"></i>
                      </span>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <Pagination
            total={total}
            pageSize={limit}
            current={page}
            onChange={handleChangePage}
            style={{ "position": "absolute", "bottom": "50px", "right": "50px", "position": "fixed" }}
          />
        </div>
      </div>
    </>
  );
};

export default ListImportSlip;
