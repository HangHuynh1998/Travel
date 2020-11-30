import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { NavLink } from "react-router-dom";
class ProfileCompany extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <div
          className="limiter"
          style={{ backgroundImage: `url('assets/images/travel5.jpg')` }}
        >
          <div className="container-login100">
            <div className="wrap-login100">
              <form
                className="login-form validate-form"
                style={{ background: "white", marginTop:"50px" }}
              >
                <span
                  className="login100-form-title p-b-43"
                  style={{ marginLeft: "10px", marginTop:"50px" }}
                >
                  Công ty DaNangTourist
                </span>
                <img
                  src="assets/images/login.jpg"
                  alt="..."
                  className="round-circle"
                  style={{
                    width: "100px",
                    height: "100px",
                    top: "180px",
                    left: "400px",
                  }}
                ></img>
                <div className="form-group" style = {{marginTop:"10px"}}>
                  <span>Đia chỉ: </span>
                  <span>54 Nguyễn Lương Bằng</span>
                </div>
                <div className="form-group">
                  <span>Số điện thoại: </span>
                  <span>0123456789</span>
                </div>
                <div className="form-group">
                  <span>Email: </span>
                  <span>travel@gmai.com</span>
                </div>
                <div className="form-group">
                  <span>Mô tả: </span>
                  <span>Là công ty hàng đầu về lĩnh vực du lịch trong nước</span>
                </div>
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "70px",justifyContent:"space-around" }}
                > <NavLink to= "/changeProfileCompany/1">
                <button type="button" className="login100-form-btn" style = {{width:"170px"}} >
                  Thay đổi thông tin
                </button>
                </NavLink>
                <NavLink to ="/changePass/1">
                <button type="button" className="login100-form-btn" style = {{width:"170px"}}>
                  Thay đổi mật khẩu
                </button>
                </NavLink>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProfileCompany;
