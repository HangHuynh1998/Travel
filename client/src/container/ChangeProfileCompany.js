import React, { Component } from 'react';
import NavBar from '../Component/NavBar';

class ChangeProfileCompany extends Component {
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
    
                 
                  <span className="login100-form-title p-b-43">Công ty</span>
                  <div className="form-group">
                      <label>Tên Công ty</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Tên công ty"
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
                      <label>Địa chỉ công ty</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        aria-describedby="address"
                        placeholder="Địa chỉ công ty"
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
                      <label for="exampleFormControlFile1" style = {{marginBottom:"5px"}}>
                        Avartar
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                    <div className="form-group">
                      <label >Giới thiệu về công ty</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="about"
                        aria-describedby="about"
                        placeholder="Giới thiệu về công ty"
                        //onChange={(e) => this.handleChange(e)}
                      />
                    </div>
 
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button type="button" className="login100-form-btn">
                    Lưu
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

export default ChangeProfileCompany;