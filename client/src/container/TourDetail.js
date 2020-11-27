import React, { Component } from 'react';
import NavBar from '../Component/NavBar';
import { NavLink } from 'react-router-dom';

class TourDetail extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
            <div
                className="login100-more"
                style={{ backgroundImage: `url('assets/images/login.jpg')` }}
              ></div>
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-43">
                  Chi tiết chuyến đi
                </span>
                <div className="form-group">
                  <span>Tên chuyến đi: </span>
                  <span>Du lịch Huế</span>
                </div>
                <div className="form-group">
                <span>Địa điểm đến: </span>
                  <span>Đại Nội Huế, Lăng Minh Mạng,...</span>
                </div>
                <div className="form-group">
                <span>Ngày đi: </span>
                  <span>29/12/2020</span>
                </div>
                <div className="form-group">
                <span>Ngày về: </span>
                  <span>31/12/2020</span>
                </div>
                <div className="form-group">
                <span>Giá tiền (VNĐ): </span>
                  <span>2.000.000</span>
                </div>
                <div className="form-group">
                <span>Giảm giá: </span>
                  <span>30%</span>
                </div>
                <div className="form-group">
                <span>Chi tiết chuyến đi: </span>
                </div>
                <div className="form-group">
                <span>Ngày 29/12/2020 : tập trung tại khách sạn Morning (Huế)...</span>
                </div>
                <div className="form-group">
                <span>Muốn biết thêm thông tin chi tiết hãy liên lạc với chúng tôi</span>
                </div>
                <div className="form-group">
                <span>Tên công ty: </span>
                <span>SaigonTourist</span>
                </div>
                <div className="form-group">
                <span>Địa chỉ công ty: </span>
                <span>SaigonTourist</span>
                </div>
                <div className="form-group">
                <span>Số điện thoại: </span>
                <span>0123456789</span>
                </div>
                <div className="form-group">
                <span>Email: </span>
                <span>company@company.com</span>
                </div>
                <div
                  className="container-login100-form-btn"
                  style={{ display: "flex" }}
                >
                  <button
                    className="login100-form-btn"
                    style={{ width: "150px", marginRight: "10px" }}
                    type="button"
                  >
                    <NavLink
                      to="/register?role = customer"
                      style={{ color: "white" }}
                    >
                      Khách hàng
                    </NavLink>
                  </button>
                  <button
                    className="login100-form-btn"
                    style={{ width: "150px" }}
                    type="button"
                  >
                    {" "}
                    <NavLink
                      to="/register?role = company"
                      style={{ color: "white" }}
                    >
                      Nhà cung cấp
                    </NavLink>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
            </div>
        );
    }
}

export default TourDetail;