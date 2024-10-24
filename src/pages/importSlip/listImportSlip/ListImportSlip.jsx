/* eslint-disable */
import React from "react";

import "./ListImportSlip.css";
import Header from "@/components/header/Header";
import NavBar from "@/components/navBar/NavBar";
const ListImportSlip = () => {
  return (
    <>
      <Header className="ListImportSlip" />
      <NavBar />
      <div className="container_ListImportSlip">
        <div className="sub_ListImportSlip">
          <div className="sub_1_ListImportSlip">
            <div>
              <span>Mã phiếu</span>
              <input type="text" className="input_ListImportSlip" />
              <span>Nguồn xuất</span>
              <select name="" id="" className="input1_ListImportSlip">
                <option value=""></option>
                <option value="">Nhà cung cấp A</option>
                <option value="">Nhà cung cấp B</option>
                <option value="">Nhà cung cấp C</option>
                <option value="">Nhà cung cấp D</option>
                <option value="">Nhà cung cấp E</option>
                <option value="">Nhà cung cấp F</option>
              </select>
            </div>
            <div>
              <span>Tình trạng</span>
              <select name="" id="" className="input2_ListImportSlip">
                <option value=""></option>
                <option value="">Chờ duyệt</option>
                <option value="">Đã nhập</option>
                <option value="">Từ chối</option>
                <option value="">Đã duyệt</option>
                <option value="">Hoàn hàng</option>
              </select>
            </div>
          </div>
          <div className="sub_2_ListImportSlip">
            <span>
              Tìm kiếm <i class="fa fa-search" aria-hidden="true"></i>
            </span>
          </div>
        </div>
        <div className="sub_3_ListImportSlip">
          <p>+ Tạo phiếu nhập kho</p>
        </div>
        <div className="table_ListImportSlip">
          <table className="table2_ListImportSlip">
            <tr className="ListImportSlip_tr">
              <th className="ListImportSlip_th_1">STT</th>
              <th className="ListImportSlip_th">Mã phiếu</th>
              <th className="ListImportSlip_th">Nguồn nhập</th>
              <th className="ListImportSlip_th">Giá trị</th>
              <th className="ListImportSlip_th">Thời gian</th>
              <th className="ListImportSlip_th">Tình trạng</th>
              <th className="ListImportSlip_th">Thao tác</th>
            </tr>
            <tr>
              <td>1</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp A</td>
              <td>50.000.000</td>
              <td>13/11/2022 15:30</td>
              <td>
                <span className="button1_ListImportSlip">Chờ duyệt</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp B</td>
              <td>50.000.000</td>
              <td>13/11/2022 11:09</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp C</td>
              <td>50.000.000</td>
              <td>12/11/2022 14:30</td>
              <td>
                <span className="button1_ListImportSlip">Chờ duyệt</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>4</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp A</td>
              <td>50.000.000</td>
              <td>12/11/2022 12:30</td>
              <td>
                <span className="button3_ListImportSlip">Từ chối</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>5</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp D</td>
              <td>50.000.000</td>
              <td>12/11/2022 09:30</td>
              <td>
                <span className="button_ListImportSlip">Đã duyệt</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>6</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp B</td>
              <td>50.000.000</td>
              <td>11/11/2022 15:30</td>
              <td>
                <span className="button_ListImportSlip">Đã duyệt</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>7</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp A</td>
              <td>50.000.000</td>
              <td>10/11/2022 16:08</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>8</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp E</td>
              <td>50.000.000</td>
              <td>10/11/2022 15:05</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>9</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp E</td>
              <td>50.000.000</td>
              <td>10/11/2022 09:55</td>
              <td>
                <span className="button3_ListImportSlip">Từ chối</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>10</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp A</td>
              <td>50.000.000</td>
              <td>10/11/2022 08:30</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>11</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp A</td>
              <td>50.000.000</td>
              <td>09/11/2022 17:27</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>12</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp C</td>
              <td>50.000.000</td>
              <td>09/11/2022 07:30</td>
              <td>
                <span className="button4_ListImportSlip">Hoàn hàng</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>13</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp F</td>
              <td>50.000.000</td>
              <td>08/11/2022 15:30</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>14</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp B</td>
              <td>50.000.000</td>
              <td>08/11/2022 12:06</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>15</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp A</td>
              <td>50.000.000</td>
              <td>07/11/2022 09:30</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>16</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp E</td>
              <td>50.000.000</td>
              <td>07/11/2022 09:30</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>17</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp D</td>
              <td>50.000.000</td>
              <td>06/11/2022 14:30</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>18</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp C</td>
              <td>50.000.000</td>
              <td>02/11/2022 18:30</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>19</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp B</td>
              <td>50.000.000</td>
              <td>02/11/2022 12:30</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
            <tr>
              <td>20</td>
              <td>XXXXX </td>
              <td>Nhà cung cấp A</td>
              <td>50.000.000</td>
              <td>02/11/2022 07:30</td>
              <td>
                <span className="button2_ListImportSlip">Đã nhập</span>
              </td>
              <td className="purple">
                <span className="pen_ListImportSlip">
                  <i class="fa-solid fa-pen"></i>
                </span>
                <span className="bin_ListImportSlip">
                  <i class="fa-solid fa-trash"></i>
                </span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ListImportSlip;
