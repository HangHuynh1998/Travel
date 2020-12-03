import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { auth } from "../store/actions/auth";
import jwt_decode from "jwt-decode";
class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      message:""
    };
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.props.auth(this.state.email,this.state.password)
  }
  componentWillReceiveProps(nextPros){
    if(nextPros.loading === "success"){
      let status = jwt_decode(localStorage.getItem("token")).user_id.status
      if(status === "blocked"){
        this.setState({message: "Tài khoản của bạn đã bị khóa"})
      }else{
        this.props.history.push('/')
      }
    }
    if(nextPros.loading === "error"){
      this.setState({message: "Email hoặc mật khẩu không đúng"})
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100">
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-43">
                  Login to continue
                </span>
                <div className="form-group">
                  <label>Email address</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="Enter email"
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                {this.props.loading === "error" && <span class="text-danger">{this.state.message}</span>}
                <div className="flex-sb-m w-full p-t-3 p-b-32">
                  <div className="contact100-form-checkbox">
                    <input
                      className="input-checkbox100"
                      id="ckb1"
                      type="checkbox"
                      name="remember-me"
                    />
                    <label className="label-checkbox100">Remember me</label>
                  </div>
                  <div>
                    <a href="#void" className="txt1">
                      Forgot Password?
                    </a>
                  </div>
                </div>
                <div className="container-login100-form-btn">
                  <button
                    type="button"
                    className="login100-form-btn"
                    onClick={this.handleSubmit}
                  >
                    Login
                  </button>
                </div>
                <div className="text-center p-t-46 p-b-20">
                  <span className="txt2">or sign up using</span>
                </div>
                <div className="login100-form-social flex-c-m">
                  <a
                    href="#void"
                    className="login100-form-social-item flex-c-m bg1 m-r-5"
                  >
                    <i className="fa fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a
                    href="#void"
                    className="login100-form-social-item flex-c-m bg2 m-r-5"
                  >
                    <i className="fa fa-google" aria-hidden="true"></i>
                  </a>
                </div>
                <div>
                  <span
                    className="login100-form-title p-b-43"
                    style={{ marginTop: "20px" }}
                  >
                    Sign In
                  </span>
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
                      to="/register?customer"
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
                      to="/register?company"
                      style={{ color: "white" }}
                    >
                      Nhà cung cấp
                    </NavLink>
                  </button>
                </div>
              </form>
              <div
                className="login100-more"
                style={{ backgroundImage: `url('assets/images/login.jpg')` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


function mapStateProps (state){
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    // token: state.auth.token,
  };
};
function mapDispatchToProps ( dispatch ) {
  return{
    auth:(email,password)=>dispatch(auth(email,password))
  }
};
export default connect(mapStateProps, mapDispatchToProps)(Login);