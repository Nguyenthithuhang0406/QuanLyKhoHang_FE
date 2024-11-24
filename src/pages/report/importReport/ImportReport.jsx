/* eslint-disable */
import React, { useEffect } from "react";
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

import "./ImportReport.css";
import { reportExportImportInventory } from "@/api/reportApi/Report";
const ImportReport = () => {
  const [labels, setLabels] = React.useState([]);
  const [datas, setDatas] = React.useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await reportExportImportInventory();
        console.log(res);
        const labels = res.map((item) => item.productName);
        const datas = res.map((item) => item.importQuantity);
        setLabels(labels);
        setDatas(datas);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

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
