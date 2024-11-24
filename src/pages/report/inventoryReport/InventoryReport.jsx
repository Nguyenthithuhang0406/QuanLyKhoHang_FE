import React, { useState } from 'react';
import { Calendar } from 'lucide-react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import './InventoryReport.css';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';

const InventoryReport = () => {
  // State cho việc chọn ngày
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  // State cho số memo
  const [memoNo, setMemoNo] = useState('WH-2024111701');
  // State cho loại biểu đồ (bar hoặc line)
  const [chartType, setChartType] = useState('bar');

  const data = [
    { name: 'Hàng điện tử', value: 1625 },
    { name: 'Thực phẩm', value: 1800 },
    { name: 'Quần áo', value: 1600 },
    { name: 'Mỹ phẩm', value: 1000 },
    { name: 'Đồ gia dụng', value: 1400 }
  ];

  // Handler cho việc thay đổi ngày
  const handleDateChange = (e, dateType) => {
    if (dateType === 'start') {
      setStartDate(e.target.value);
    } else {
      setEndDate(e.target.value);
    }
  };

  // Handler cho việc thay đổi loại biểu đồ
  const handleChartTypeChange = (e) => {
    setChartType(e.target.value);
  };

  // Handler cho việc thay đổi memo
  const handleMemoChange = (e) => {
    setMemoNo(e.target.value);
  };

  
  
  return (
      
    <div>
      <Header />
      <NavBar />
      <div className="container">
      <div className="report-wrapper">
        {/* Header Section */}
        <div className="header-section">
          <h1 className="report-title">
            BIỂU ĐỒ BÁO CÁO NHẬP KHO
          </h1>
          
          <div className="control-section">
            {/* Chọn loại biểu đồ */}
            <div className="chart-type-selector">
              <label htmlFor="chartType">Loại biểu đồ:</label>
              <select 
                id="chartType" 
                value={chartType} 
                onChange={handleChartTypeChange}
                className="select-input"
              >
                <option value="bar">Biểu đồ cột</option>
                <option value="line">Biểu đồ đường</option>
              </select>
            </div>

            {/* Chọn Memo */}
            <div className="memo-input">
              <label htmlFor="memoNo">Memo No:</label>
              <input
                type="text"
                id="memoNo"
                value={memoNo}
                onChange={handleMemoChange}
                className="text-input"
              />
            </div>
          </div>

          <div className="date-section">
            <div className="date-range">
              <div className="date-item">
                <span>Từ ngày:</span>
                <div className="date-input-container">
                  <Calendar className="calendar-icon" />
                  <input
                    type="date"
                    value={startDate}
                    onChange={(e) => handleDateChange(e, 'start')}
                    className="date-input"
                  />
                </div>
              </div>
              <div className="date-item">
                <span>Đến ngày:</span>
                <div className="date-input-container">
                  <Calendar className="calendar-icon" />
                  <input
                    type="date"
                    value={endDate}
                    onChange={(e) => handleDateChange(e, 'end')}
                    className="date-input"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Chart Section */}
        <div className="chart-section">
          <ResponsiveContainer width="100%" height="100%">
            {chartType === 'bar' ? (
              <BarChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar 
                  dataKey="value" 
                  fill="#1E40AF"
                  radius={[4, 4, 0, 0]}
                  barSize={60}
                />
              </BarChart>
            ) : (
              <LineChart
                data={data}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line 
                  type="monotone" 
                  dataKey="value" 
                  stroke="#1E40AF" 
                  strokeWidth={2} 
                />
              </LineChart>
            )}
          </ResponsiveContainer>
        </div>

        {/* Products List */}
        <div className="products-list">
          {data.map((item, index) => (
            <div key={index} className="product-item">
              <div className="product-name">{item.name}</div>
              <div className="product-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
};

export default InventoryReport;