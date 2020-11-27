import React, { Component } from 'react';
import NavBar from '../Component/NavBar';

class BookTour extends Component {
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
                style={{ background: "white" }}
              >
                    <span className="login100-form-title p-b-43">
                      Tên Tour
                    </span>
                    <div className="form-group">
                  <label>Họ tên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder="Nhập họ tên"
                    //onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="Email"
                    //onChange={(e) => this.handleChange(e)}
                  />
                </div>
                    <div className="form-group">
                      <label>Địa chỉ </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        aria-describedby="address"
                        placeholder="Nhập địa chỉ"
                        //onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Điện thoại</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        aria-describedby="phone"
                        placeholder="Số điện thoại"
                        //onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label >Yêu cầu thêm</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="required"
                        aria-describedby="required"
                        placeholder="Yêu cầu thêm"
                        //onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button type="button" className="login100-form-btn">
                    Đăt tour
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

export default BookTour;