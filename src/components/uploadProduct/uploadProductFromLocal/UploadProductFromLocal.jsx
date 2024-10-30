/* eslint-disable */
import React, { useEffect, useState } from 'react'

import './UploadProductFromLocal.css';
import { getProducts } from '@/api/productApi/product';
import { Pagination } from 'antd';
const UploadProductFromLocal = () => {
  const [listProduct, setListPoroduct] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getListProduct = async () => {
      const res = await getProducts(page, limit);
      setTotal(res.totalResult);
      setListPoroduct(res.products);

      console.log(res.products);
    };

    getListProduct();
  }, [page]);

  return (
    <div className='container_uplocal'>
      <div className='h1_uplocal'>
        <p>DANH SÁCH HÀNG HÓA</p>
      </div>
      <div className='list_bodyuplocal'>
        <div className='searchuplocal'>
          <div className='inputInforuplocal'>
            <div className='boxuplocal'>
              <span className='nameuplocal'>Tên hàng hoá</span>
              <input type="text" className='iNameuplocal' />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='boxuplocal'>
              <span className='IDuplocal'>Mã hàng hoá</span>
              <input type="text" className='iIDuplocal' />
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
        <div className='listTableuplocal' >
          <div className='lb_up'>
            <label htmlFor="" className='lb_upload'>0 mặt hàng được chọn</label>
            <input className='box_chose' type="checkbox" name="" id="" />
          </div>
          <table className='Listuplocal'>
            <tbody>
              <tr >
                <th className='centeruplocal'>STT</th>
                <th className='centeruplocal'>Tên hàng hoá</th>
                <th className='centeruplocal'>Mã hàng</th>
                <th className='centeruplocal'>Đơn vị tính</th>
                <th className='centeruplocal'>Số lượng <div>trong kho</div></th>
                <th className='centeruplocal'>Đơn giá</th>
                <th className='centeruplocal'>Chọn</th>
              </tr>
              {
                listProduct.length > 0 && listProduct.map((product, index) => (
                  <tr key={product._id}>
                    <td>{(page - 1) * limit + index + 1}</td>
                    <td>{product.productName}</td>
                    <td>{product.productCode}</td>
                    <td>{product.productDVT}</td>
                    <td>{product.productQuantityRemaining}</td>
                    <td>{product.productPrice}</td>
                    <td className='choseuplocal'>
                      <input className='box_chose' type="checkbox" name="" id="" />
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          <div className='foot'></div>
          <div className='fot_up'>
            <Pagination
              pageSize={limit}
              total={total}
              current={page}
              onChange={(page) => setPage(page)}

            />
          </div>
        </div>
        <div className='b_uplocatol'>
          <button className='b1_uplocatol' type='button'>Hủy</button>
          <button className='b2_uplocatol' type="submit">Thêm</button>
        </div>
      </div>
    </div >
  )
}

export default UploadProductFromLocal;