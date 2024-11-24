/* eslint-disable */
import React from "react";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import "./ReportTable.css";
const ReportTable = ({ list, type, setType }) => {
  console.log("list", list);
  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  return (
    <>
      <div className="rtbody">
        <div className="rtselect">
          <select name="rtoption" id="rcoption" onChange={handleChangeType}>
            <option>{type === "chart" ? "Xem biểu đồ" : "Xem bảng"}</option>
            <option value="chart">Xem biểu đồ</option>
            <option value="table">Xem bảng</option>
          </select>
        </div>
        <div className="rtTable">
          <table className="rtInside">
            <tbody>
              <tr>
                <th>STT</th>
                <th>Tên sản phẩm</th>
                <th>Mã sản phẩm</th>
                <th>Số lượng nhập</th>
                <th>Số lượng xuất</th>
                <th>Số lượng tồn</th>
              </tr>
              {list.length > 0 &&
                list.map((item, index) => (
                  <tr key={item.productId}>
                    <td className="rtnum">{index + 1}</td>
                    <td>{item.productName}</td>
                    <td>{item.productCode}</td>
                    <td className="rtnum">{item.importQuantity}</td>
                    <td className="rtnum">{item.exportQuantity}</td>
                    <td className="rtnum">{item.inventoryQuantity}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ReportTable;
