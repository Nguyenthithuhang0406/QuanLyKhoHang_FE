/* eslint-disable */
import React, { useEffect, useState } from 'react'
import Header from '@/components/header/Header'
import NavBar from '@/components/navBar/NavBar'

import './ListProduct.css';
import { getProducts, searchProduct } from '@/api/productApi/product';
import { Pagination } from 'antd';

const ListProduct = () => {
  const [listProducts, setListProducts] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [productCode, setProductCode] = useState("");
  const [productName, setProductName] = useState("");

  useEffect(() => {
    const getListProducts = async () => {
      const res = await getProducts(page, limit);
      setTotal(res.totalResult);
      setListProducts(res.products);
      localStorage.setItem("slProduct", res.totalResult);
    };

    getListProducts();
  }, [page]);

  const handleChangePage = (page) => {
    setPage(page);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "productCode") {
      setProductCode(value);
    } else {
      setProductName(value);
    }
  };

  const handleSearch = async () => {
    try {
      setPage(1);
      const res = await searchProduct(productCode, productName, page, limit);
      setListProducts(res.products);
      setTotal(res.totalResult);
      setProductCode("");
      setProductName("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Header className='headerListP' />
      <NavBar />
      <div className='list_body'>
        <div className='search'>
          <div className='inputInfor'>
            <div className='box'>
              <span className='ID'>Mã hàng hoá</span>
              <input type="text" className='iID' name='productCode' value={productCode} onChange={handleChange} />
            </div>
            <div className='box'>
              <span className='name'>Tên hàng hoá</span>
              <input type="text" className='iName' name='productName' value={productName} onChange={handleChange}/>
            </div>
          </div>
          <button className='flpButton' onClick={handleSearch}>Tìm kiếm <i className="fa-solid fa-magnifying-glass" style={{ "color": "white" }}></i></button>
        </div>

        <button className='addButton'><i className="fa-solid fa-plus"></i>Thêm hàng hoá</button>

        <div className='listTable'>
          <table className='List'>
            <tbody>
              <tr>
                <th className='listProduct_th'>STT</th>
                <th className='listProduct_th start-l'>Tên hàng</th>
                <th className='listProduct_th'>Mã hàng</th>
                <th className='listProduct_th'>Nhóm hàng</th>
                <th className='listProduct_th'>Đơn vị tính</th>
                <th className='listProduct_th'>Đơn giá</th>
                <th className='center'>Thao tác</th>
              </tr>
              {
                listProducts.length > 0 && listProducts.map((product, index) => (
                  <tr key={product._id}>
                    <td>{index + 1}</td>
                    <td className='start-l'>{product.productName}</td>
                    <td>{product.productCode}</td>
                    <td>{product.productGroup}</td>
                    <td>{product.productDVT}</td>
                    <td>{product.productPrice}</td>
                    <td className='purple'>
                      <span className='pen'><i className="fa-solid fa-pen"></i></span>
                      <span className='bin'><i className="fa-solid fa-trash"></i></span></td>
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
    </div>
  )
}

export default ListProduct;