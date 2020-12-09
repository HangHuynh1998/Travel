import React, { Component } from 'react';
import NavBar from '../Component/NavBar';
import { NavLink } from 'react-router-dom';

class CompanyDetail extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100" style={{backgroundImage:"none"}}>
            <div
                className="login100-more"
                style = {{width: "calc(100% - 800px)"}}
              >
                  <img src="assets/images/login.jpg" alt="..." className="round-circle"></img>
              </div>
              <form className="login100-form validate-form" style = {{width:"800px"}}>
                <span className="login100-form-title p-b-43">
                  Chi tiết Công ty
                </span>
                <div className="form-group">
                  <span>Tên công ty: </span>
                  <span>DaNangTourist</span>
                </div>
                <div className="form-group">
                  <span>Địa chỉ:</span>
                  <span> 54 Nguyễn Lương Bằng, Quận Liên Chiểu, Đà Nẵng</span>
                </div>
                <div className="form-group">
                <span>Email:  </span>
                  <span>travel@gmail.com</span>
                </div>
                <div className="form-group">
                <span>Mô tả: </span>
                  <span>Là công ty hàng đầu trong lĩnh vực du lịch, cung cấp các tour du lịch độc đáo, thích hợp, giá cả hợp lý</span>
                </div>
                <div className="form-group">
                <span>Các loại hình du lịch: </span>
                  <span>Du lịch tham quan, </span>
                  <span>Du lịch văn hóa</span>
                </div>
                <div
                  className="container-login100-form-btn"
                  style={{ display: "flex",marginTop:"10px" }}
                >
                  <button
                    className="login100-form-btn"
                    style={{ width: "150px", marginRight: "20px" }}
                    type="button"
                  >
                      Theo dõi/ Hủy theo dõi
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

export default CompanyDetail;