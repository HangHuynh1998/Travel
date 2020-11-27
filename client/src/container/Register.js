import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Register extends Component {
  constructor() {
    super();
    this.state = {
      customer: false,
    };
  }
  componentDidMount() {
    if (this.props.location) {
      this.isCustomer();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.isCustomer();
    }
  }
  isCustomer() {
    const search = this.props.location.search.slice(8);
    console.log("is", this.props.location.search);
    if (search === "customer") {
      this.setState({ customer: true });
    } else {
      this.setState({ customer: false });
    }
  }
  render() {
    //const { match, location, history } = this.props
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
                {this.state.customer ? (
                  <>
                    <span className="login100-form-title p-b-43">
                      Khách hàng
                    </span>
                    <div className="form-group">
                      <label>Họ tên</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Họ tên"
                        //onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                    <div class="form-group ">
                      <label
                        for="example-date-input"
                        class="col-2 col-form-label"
                      >
                        Ngày sinh
                      </label>
                      <div class="col-10">
                        <input
                          class="form-control"
                          type="date"
                          value="2011-08-19"
                          id="example-date-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Giới tính</label>
                      <div style={{ display: "flex" }}>
                        <div
                          class="form-check"
                          style={{
                            display: "flex",
                            marginRight: "50px",
                            marginLeft: "20px",
                          }}
                        >
                          <input
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            value="option1"
                            checked
                          />
                          <label
                            class="form-check-label"
                            style={{ marginLeft: "3px" }}
                          >
                            Nam
                          </label>
                        </div>
                        <div class="form-check" style={{ display: "flex" }}>
                          <input
                            class="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            value="option2"
                          />
                          <label
                            class="form-check-label"
                            style={{ marginLeft: "3px" }}
                          >
                            Nữ
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <span className="login100-form-title p-b-43">Công ty</span>
                )}
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
                  <label>Mật khẩu</label>
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
                  <label>Nhập lại mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="password"
                    placeholder="Nhập lại mật khẩu"
                    //onChange={(e) => this.handleChange(e)}
                  />
                </div>
                {!this.state.customer && (
                  <>
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
                    <div class="form-group">
                      <label for="exampleFormControlFile1" style = {{marginBottom:"5px"}}>
                        Hình ảnh công ty
                      </label>
                      <input
                        type="file"
                        class="form-control-file"
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
                  </>
                )}
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button type="button" className="login100-form-btn">
                    Đăng kí
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

export default Register;
