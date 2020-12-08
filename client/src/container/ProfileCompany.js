import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { NavLink, withRouter } from "react-router-dom";
import { getUser } from "../store/actions/user";
import { connect } from "react-redux";
class ProfileCompany extends Component {


  componentDidMount(){
    this.props.getUser()
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
                style={{ background: "white", marginTop:"50px" }}
              >
                <span
                  className="login100-form-title p-b-43"
                  style={{ marginLeft: "10px", marginTop:"50px" }}
                >
                  Công ty {this.props.user?.name}
                </span>
                <img
                  src={this.props.user?.avatar}
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
                  <span>{this.props.user?.address}</span>
                </div>
                <div className="form-group">
                  <span>Số điện thoại: </span>
                  <span>0{this.props.user?.phone}</span>
                </div>
                <div className="form-group">
                  <span>Email: </span>
                  <span>{this.props.user?.email}</span>
                </div>
                <div className="form-group">
                  <span>Mô tả: </span>
                  <span>{this.props.user?.description}</span>
                </div>
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "70px",justifyContent:"space-around" }}
                > <NavLink to= {`/changeProfileCompany/${this.props.user?._id}`}>
                <button type="button" className="login100-form-btn" style = {{width:"170px"}} >
                  Thay đổi thông tin
                </button>
                </NavLink>
                <NavLink to ={`/changePass/${this.props.user?._id}`}>
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
function mapStateProps(state) {
  return {
    loading: state.user.loading,
    user: state.user.data
  };
}
function mapDispatchToProps(dispatch) {
  return {
     getUser:() => dispatch(getUser())
  };
}
export default withRouter(connect(mapStateProps, mapDispatchToProps)(ProfileCompany));
