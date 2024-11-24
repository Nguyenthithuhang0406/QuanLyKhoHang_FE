/* eslint-disable */
import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import { Bar } from "react-chartjs-2";

import { reportExportImportInventory } from "@/api/reportApi/Report";
import "./InventoryReport.css";

const InventoryReport = () => {
  const [labels, setLabels] = useState([]);
  const [datas, setDatas] = useState([]);
  const [time, setTime] = useState({
    timeStart: "",
    timeEnd: "",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await reportExportImportInventory();
        const filterData = res.filter(
          (item) =>
            item.exportQuantity >= 0 &&
            item.inventoryQuantity >= 0 &&
            item.importQuantity >= 0
        );
        const labels = filterData.map((item) => item.productName);
        const datas = filterData.map((item) => item.inventoryQuantity);
        setLabels(labels);
        setDatas(datas);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, [time.timeEnd, time.timeStart]);

  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
  const data = {
    labels: labels,
    datasets: [
      {
        label: "Số lượng hàng hoá",
        data: datas,
        backgroundColor: "#0b08ab",
        borderColor: "black",
        borderWidth: 1,
        // barThickness: 50,
        // maxBarThickness: 50,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          // color: "black",
          font: {
            size: 11,
          },
          maxRotation: 45,
        },
        categoryPercentage: 1,
        barPercentage: 1,
      },
      y: {
        ticks: {
          color: "black",
          font: {
            size: 14,
          },
        },
      },
    },
    datasets: {
      barThickness: 100,
      maxBarThickness: 100,
    },
  };

  const handleChangeTime = (e) => {
    const { name, value } = e.target;
    setTime({
      ...time,
      [name]: value,
    });

    console.log(time);
  };

  return (
    <>
      <Header />
      <NavBar />
      <div className="reportImport-container">
        <div className="RI-frame">
          <h2 className="reportImport-h2">BIỂU ĐỒ BÁO CÁO TỒN KHO</h2>
          <div className="date-ImportReport">
            <span className="date-ImportReport1">Từ ngày</span>
            <input
              type="date"
              className="date-ImportReport3"
              name="timeStart"
              value={time.timeStart}
              onChange={(e) => handleChangeTime(e)}
            />
            <span
              className="date-ImportReport2"
              name="timeEnd"
              value={time.timeEnd}
              onChange={(e) => handleChangeTime(e)}
            >
              Đến ngày
            </span>
            <input type="date" className="date-ImportReport3" />
            <span className="reportImport-type">Loại báo cáo</span>
            <select name="" id="" className="reportImport-select">
              <option value="">Biểu đồ tròn</option>
              <option value="">Biểu đồ cột</option>
            </select>
          </div>
          <div className="RI-caption">
            <div className="RI-caption-text"></div>
            <p>Số lượng hàng hoá</p>
          </div>
          <div className="IR-barchart">
            <Bar data={data} options={options} />
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryReport;
