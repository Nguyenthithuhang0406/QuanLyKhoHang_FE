/* eslint-disable */
import React from 'react'

import './UploadProductFromLocal.css';
const UploadProductFromLocal = () => {
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
            < input type="text" className='iNameuplocal' />
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
            <div className='boxuplocal'>
            <span className='IDuplocal'>Mã hàng hoá</span> 
            <input type="text" className='iIDuplocal' /> 
            <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
        </div>
      <div className='listTableuplocal'>
          <div className='lb_up'>
            <label htmlFor="" className='lb_upload'>0 mặt hàng được chọn</label>
            <input className='box_chose' type="checkbox" name="" id="" />
          </div>
          <table className='Listuplocal'>
            <tr > 
              <th className='centeruplocal'>STT</th>
              <th className='centeruplocal'>Tên hàng hoá</th>
              <th className='centeruplocal'>Mã hàng</th>  
              <th className='centeruplocal'>Đơn vị tính</th>
              <th className='centeruplocal'>Số lượng <div>trong kho</div></th>
              <th className='centeruplocal'>Đơn giá</th>
              <th className='centeruplocal'>Chọn</th>
            </tr>
            <tr>
              <td>1</td>
              <td>ĐT Samsung Galaxy </td>
              <td>XXXXX </td>
              <td>Cái</td>
              <td>100</td>
              <td>20.000.000</td>
              <td className='choseuplocal'>
                  <input className='box_chose' type="checkbox" name="" id="" />
              </td>
            </tr>
          </table>
          <div className='foot'></div>
          <div className='fot_up'>
            <p><span><i class="fa-solid fa-angles-left"></i></span> <span><i class="fa-solid fa-angle-left"></i></span> <span>1</span> <span>2</span> ..... <span>18</span> <span>19</span> <span><i class="fa-solid fa-angle-right"></i></span> <span><i class="fa-solid fa-angles-right"></i></span></p>
          </div>
        </div>
          <div className='b_uplocatol'>
            <button className='b1_uplocatol' type='button'>Hủy</button>
            <button className='b2_uplocatol' type="submit">Thêm</button>
          </div>
      </div>
    </div>
  )
}

export default UploadProductFromLocal;