/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Pagination } from 'antd';

import './ListAgency.css';
import NavBar from '@/components/navBar/NavBar';
import Header from '@/components/header/Header';
import { getSupplies, searchSupply } from '@/api/suppliesAPI/supply';
import ConfirmDeleteProduct from '@/components/confirmDeleteProduct/ConfirmDeleteProduct';

const ListAgency = () => {
  const [supplies, setSupplies] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [supplyCode, setSupplyCode] = useState("");
  const [supplyName, setSupplyName] = useState("");
  const [typeSupply, setTypeSupply] = useState("");
  const [supplyPhone, setSupplyPhone] = useState("");
  const [isDelete, setIsDelete] = useState(false);
  const [isRefresh, setIsRefresh] = useState(false);
  const [type, setType] = useState("");
  const [deletedId, setDeletedId] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const getListSupplies = async () => {
      try {
        const res = await getSupplies(limit, page);
        setSupplies(res.supplies);
        setTotal(res.supplies.length);
      } catch (error) {
        console.error(error);
      }
    };

    getListSupplies();
  }, [page, isRefresh]);

  const handleChangePage = (page) => {
    setPage(page);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "supplyCode") {
      setSupplyCode(value);
    }
    if (name === "typeSupply") {
      setTypeSupply(value);
    }
    if (name === "supplyName") {
      setSupplyName(value);
    }
    if (name === "supplyPhone") {
      setSupplyPhone(value);
    }
  };

  const handleSearch = async () => {
    try {
      const res = await searchSupply(supplyCode, supplyName, supplyPhone, typeSupply, page, limit);

      setSupplies(res.supplies);
      setTotal(res.supplies.length);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClickBin = (supplyId, type) => {
    setDeletedId(supplyId);
    setType(type);
    setIsDelete(true);
  };

  const handleCancelDelete = () => {
    setIsDelete(false);
  };

  const handleClickName = (supplyId, type) => {
    navigate(`/infor-agency/${type}/${supplyId}`);
  };
  return (
    <div>
      <Header className="header" />
      <NavBar />

      <div className="table-container">
        {/* Form tìm kiếm */}
        <div className="search-container">
          <div>
            <div className="search-row">
              <div className="search-group">
                <label htmlFor="supplyCode" >Mã nguồn</label>
                <input type="text" id="sourceCode" name="supplyCode" value={supplyCode} onChange={(e) => handleChange(e)} />
              </div>
              <div className="search-group">
                <label htmlFor="supplyName">Tên nguồn</label>
                <input
                  type="text"
                  id="sourceName"
                  name="supplyName"
                  value={supplyName}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="search-row">
              <div className="search-group">
                <label htmlFor="typeSupply">Loại nguồn</label>
                <select id="sourceType" name="typeSupply" value={typeSupply} onChange={(e) => handleChange(e)}>
                  <option value="">-Chọn loại nguồn-</option>
                  <option value="provider">Nhà cung cấp</option>
                  <option value="agency">Đại lý</option>
                </select>
              </div>
              <div className="search-group">
                <label htmlFor="supplyPhone">Số điện thoại</label>
                <input type="text" id="phone" name="supplyPhone" value={supplyPhone} onChange={(e) => handleChange(e)} />
              </div>
            </div>
            <button className="btn-search-ageny" onClick={handleSearch}>
              <span>Tìm kiếm</span>
              <span>🔍</span>
            </button>
          </div>
        </div>

        <div>
          <div className="sub_3_ListAgency" onClick={() => navigate('/createAgency')}>
            <p>+ Thêm mới nguồn</p>
          </div>
        </div>
        {/* Bảng dữ liệu */}
        <div className="custom-table">
          <div className="table-header">
            <div className="table-row">
              <div className="table-cell_1">STT</div>
              <div className="table-cell">Tên nguồn</div>
              <div className="table-cell_1">Loại nguồn</div>
              <div className="table-cell_1">Mã nguồn</div>
              <div className="table-cell_1">Số Điện thoại </div>
              <div className="table-cell">Địa chỉ</div>
              <div className="table-cell_1">Thao tác</div>
            </div>
          </div>

          <div className="table-body">
            {
              supplies.length > 0 ? supplies.map((supply, index) => (
                <div className="table-row" key={supply._id}>
                  <div className="table-cell_1">{(page-1) * limit + index + 1}</div>
                  <div className="table-cell nameSupply" onClick={() => handleClickName(supply._id, supply.providerName ? "provider" : "agency")}>{supply.providerName || supply.agencyName}</div>
                  <div className="table-cell_1">{supply.providerName ? "Nhà cung cấp" : "Đại lý"}</div>
                  <div className="table-cell_1">{supply.providerCode || supply.agencyCode}</div>
                  <div className="table-cell_1">{supply.providerPhone || supply.agencyPhone}</div>
                  <div className="table-cell">{supply.providerAddress || supply.agencyAddress}</div>
                  <div className="table-cell_1">
                    <i className='fa-solid fa-trash' onClick={() => handleClickBin(supply._id, supply.providerName ? "provider" : "agency")}></i>
                  </div>
                </div>
              )) : <div className="table-row">
                <div className="table-cell" style={{ textAlign: "center" }} colSpan="7">Không có dữ liệu</div>
              </div>
            }
          </div>
          <Pagination
            total={total}
            current={page}
            pageSize={limit}
            onChange={handleChangePage}
            style={{ "position": "absolute", "bottom": "20px", "right": "50px", "position": "fixed" }}
          />
        </div>
      </div>
      {
        isDelete && (
          <div className='overlay' onClick={handleCancelDelete}>
            <motion.div
              className='itemDelete'
              onClick={(e) => e.stopPropagation()}
              animate={{ opacity: 1, scal: 1 }}
              initial={{ opacity: 0, scal: 0.5 }}
              transition={{ duration: 0.3 }}
            >
              <ConfirmDeleteProduct type={type} onCancel={handleCancelDelete} id={deletedId} isRefresh={isRefresh} setIsRefresh={setIsRefresh} />
            </motion.div>
          </div>
        )
      }
    </div>
  );
};

export default ListAgency;