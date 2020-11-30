import React, { Component } from 'react';
import NavBar from '../Component/NavBar';

class ChangePass extends Component {
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
    
                 
                  <span className="login100-form-title p-b-43">Thay đổi mật khẩu</span>
    
                <div className="form-group">
                  <label>Mật khẩu cũ</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="password"
                    placeholder="Mật khẩu"
                    //onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Mật khẩu mới</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="password"
                    placeholder="Mật khẩu"
                    //onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Nhập lại mật khẩu mới</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="password"
                    placeholder="Nhập lại mật khẩu"
                    //onChange={(e) => this.handleChange(e)}
                  />
                </div>
 
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button type="button" className="login100-form-btn">
                    Thay đổi
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

export default ChangePass;