import React, { Component } from 'react';
import NavBar from '../Component/NavBar';
import { bookTour } from '../store/actions/bookTour';
import { connect } from 'react-redux';
import internalApi from '../config/internalApi';
import axios from "../axios-travel";
class BookTour extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
  }

  submit(){
    const data = {
      email: "ngockhanh.2197+8@gmail.com",
      subject: "this.state.subject",
      content: "this.state.content"
  }
  internalApi.post('contact/send-refer-friend', data)
  
    // this.props.bookTour("Customer","address","01234456789","custom@gmail.com","requirement","5fc715216acdcf15a9aa3774","5fc7d25993d3bc3add0c5e50","Du lịch Đà Nẵng")
  }

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
                  <button type="button" className="login100-form-btn" onClick = {this.submit}>
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

function mapStateProps(state) {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    // token: state.auth.token,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    bookTour:(name,address,phone,email,requirement,userId,tourId,nameTour)=>dispatch(bookTour(name,address,phone,email,requirement,userId,tourId,nameTour))
  };
}
export default connect(mapStateProps, mapDispatchToProps)(BookTour);