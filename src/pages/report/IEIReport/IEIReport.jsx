/* eslint-disable */
import React, { useEffect, useRef } from 'react';
import Header from '@/components/header/Header'
import NavBar from '@/components/navBar/NavBar'
import Chart from 'chart.js/auto';
import './IEIReport.css';

const IEIReport = () => {
  const chartRef = useRef(null); 
  let stackedBarChart = null; 

  const createChart = () => {
    const ctx = chartRef.current.getContext('2d');
    if (stackedBarChart) {
      stackedBarChart.destroy(); 
    }
    stackedBarChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ['Hàng 1', 'Hàng 2', 'Hàng 3', 'Hàng 4'],
        datasets: [
          {
            label: 'Xuất kho',
            data: [700, 600, 500, 650], 
            backgroundColor: '#0B08AB',
            borderColor: '#0d47a1',
            borderWidth: 1,
            barThickness: 50,
          },
          {
            label: 'Nhập kho',
            data: [300, 400, 500, 350],
            backgroundColor: '#90caf9',
            borderColor: '#64b5f6',
            borderWidth: 1,
            barThickness: 50,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            labels:{
              color:'black',
              font: {
                size: 16, 
                weight: 'bold',
              },
            },
          },
          tooltip: {
            enabled: true,
            tooltip: {
              enabled: true,
              bodyFont: {
                size: 12, 
              },
              titleFont: {
                size: 16, 
              },
            },
          },
        },
        scales: {
          x: {
            stacked: true,
            ticks: {
              color: 'black', 
              font: {
                size: 16, 
              },
            },
           
          },
          y: {
            stacked: true,
            beginAtZero: true,
            max: 2000,
            ticks: {
              stepSize:200,
              color: 'black', 
              font: {
                size: 16, 
              },
            },
            
          },
        },
      },
    });
  };

  useEffect(() => {
    createChart();

    return () => {
      if (stackedBarChart) {
        stackedBarChart.destroy();
      }
    };
  }, []);

  return (
    <div>
      <Header className='headerListP' />
      <NavBar />
      <div className='rcbody'>
        <div className='rcframe'>
        <div className='rctitle'>BIỂU ĐỒ BÁO CÁO XUẤT NHẬP TỒN</div>
        <div className="rcSearch">
          <div className="rcInput">
            <div className="rcbox1">
              <div className="rcbox2">
                <span className="rcfrom">Từ ngày</span>
              </div>
              <div className="rcbox3">
                <input type="date" className="rcdate" />
              </div>
              <div className="rcbox2">
                <span className="rcto">Đến ngày</span>
              </div>
              <div className="rcbox3">
                <input type="date" className="rcdate" />
              </div>
            </div>
          </div>
          <div className="rcbbox">
            <select name="rcoption" id="rcoption">
              <option value="rcchart">Xem biểu đồ</option>
              <option value="rctable">Xem bảng</option>
            </select>
          </div>
        </div>
        <div className='rcChart'>
        <canvas ref={chartRef} style={{ maxWidth: '800px' }}></canvas>
        </div>
        </div>
        
      </div>

    </div>

  );
};

export default IEIReport;
