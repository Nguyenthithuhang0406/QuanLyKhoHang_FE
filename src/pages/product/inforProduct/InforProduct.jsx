/* eslint-disable */
import React, { useEffect, useState } from 'react'

import './InforProduct.css';
import Header from '@/components/header/Header';
import NavBar from '@/components/navBar/NavBar';
import ip from '../../../assets/images/anhip.jpg';
import { getProductById } from '@/api/productApi/product';
import { useParams } from 'react-router-dom';

const InforProduct = () => {

  const [product, setProduct] = useState({});
  const { productId } = useParams();

  useEffect(() => {
    const getProduct = async () => {
      const res = await getProductById(productId);
      setProduct(res.product);
    };
    getProduct();
    console.log("product", product);
  }, []);

  return (
    <>
      <Header className="header_editProd" />
      <NavBar />
      <div className='container_editPro'>
        <div className='h1_editPro'>
          <p className='text_1'>Quản lí danh mục hàng hóa <span><i className="fa-solid fa-chevron-right"></i></span> <span>Xem hàng hóa</span></p>
          <button type="submit" className='buton_h1'>Cập nhật thông tin</button>
        </div>
        <div className='h2_editPro'>
          <div className='sub1_editPro'>
            <p className='text_sub1_editPro'>Thông tin hàng hóa</p>
            <i className="fa-solid fa-x"></i>
          </div>
          <div className='sub2_editPro'>
            <div className='idpro'>
              <label htmlFor="mh">Mã hàng </label>
              <div className='input_editPro' style={{display: 'flex', alignItems: 'center'}}>
                {product.productCode}
              </div>
            </div>
            <div className='namepro'>
              <label htmlFor="th">Tên hàng</label>
              <div className='input_editPro' style={{ display: 'flex', alignItems: 'center' }}>
                {product.productName}
              </div>
            </div>
            <div className='grouppro'>
              <label htmlFor="nh">Nhóm hàng</label>
              <div className='input_editPro' style={{ display: 'flex', alignItems: 'center' }}>
                {product.productGroup}
              </div>
            </div>
            <div className='image_prod'>
              <label htmlFor="">Hình ảnh</label> <br />
              <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {
                  product.productMedia && product.productMedia.map((item, index) => (
                    <img className='image_ip' src={item} alt="" key={index} style={{width: '200px', height: '200px'}}/>
                  ))
                }
              </div>
            </div>

            <div className='unit'>
              <label htmlFor="dv">Đơn vị tính</label>
              <br />
              <br />
              <div className='input_editPro' style={{ display: 'flex', alignItems: 'center' }}>
                {product.productDVT}
              </div>
            </div>
            <div className='describe_editPro'>
              <label htmlFor="mt">Mô tả hàng hóa</label><br />
              <br />
              <div className='mota_editpro' style={{ display: 'flex', alignItems: 'center' }}>
                {product.productDescription}
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default InforProduct;