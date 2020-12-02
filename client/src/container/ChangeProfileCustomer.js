import React, { Component } from 'react';
import NavBar from '../Component/NavBar';

class ChangeProfileCustomer extends Component {
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
    
                 
                  <span className="login100-form-title p-b-43">Khách hàng</span>
                  <div className="form-group">
                      <label>Tên khách hàng</label>
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
                      <label style = {{marginBottom:"5px"}}>
                        Avartar
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                    
                    <div className="form-group ">
                      <label
                        className="col-2 col-form-label"
                      >
                        Ngày sinh
                      </label>
                      <div className="col-10">
                        <input
                          className="form-control"
                          type="date"
                          value="2011-08-19"
                          id="example-date-input"
                        />
                      </div>
                    </div>

                    <div classNameName="form-group">
                      <label>Giới tính</label>
                      <div style={{ display: "flex" }}>
                        <div
                          className="form-check"
                          style={{
                            display: "flex",
                            marginRight: "50px",
                            marginLeft: "20px",
                          }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                            checked
                          />
                          <label
                            className="form-check-label"
                            style={{ marginLeft: "3px" }}
                          >
                            Nam
                          </label>
                        </div>
                        <div className="form-check" style={{ display: "flex" }}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="option2"
                          />
                          <label
                            className="form-check-label"
                            style={{ marginLeft: "3px" }}
                          >
                            Nữ
                          </label>
                        </div>
                      </div>
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

export default ChangeProfileCustomer;