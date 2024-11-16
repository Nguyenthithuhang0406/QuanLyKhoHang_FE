/* eslint-disable */
import React from "react";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
import "./ImportReport.css";
const ImportReport = () => {
  const data = {
    labels: ["Hàng hoá 1", "Hàng hoá 2", "Hàng hoá 3", "Hàng hoá 4"],
    datasets: [
      {
        label: "Số lượng hàng hoá",
        data: [1620, 1700, 1600, 1000],
        backgroundColor: "#0b08ab",
        borderColor: "black",
        borderWidth: 1,
        barThickness: 50,
        maxBarThickness: 50,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: {
          color: "black",
          font: {
            size: 14,
          },
        },
        categoryPercentage: 0.6,
        barPercentage: 0.7,
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
      barThickness: 10,
      maxBarThickness: 30,
    },
  };
  return (
    <>
      <Header />
      <NavBar />
      <div className="reportImport-container">
        <div className="RI-frame">
          <h2 className="reportImport-h2">BIỂU ĐỒ BÁO CÁO NHẬP KHO</h2>
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

export default ImportReport;
