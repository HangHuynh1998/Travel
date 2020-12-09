import React, { Component } from 'react';
import NavBar from '../Component/NavBar';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../store/actions/user';

class ProfileCustomer extends Component {

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
                  Xin chào {this.props.user?.name}
                </span>
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
                  <span>Birthday: </span>
                  <span>{this.props.user?.birthday?.slice(0,10)}</span>
                </div>
                <div className="form-group">
                  <span>Giới tính: </span>
                  {!this.props.user?.gender? <span>Nữ</span> :<span>Nam</span>}
                </div>
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "70px",justifyContent:"space-around" }}
                >
                  <NavLink to= "/changeProfileCustomer">
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
export default withRouter(connect(mapStateProps, mapDispatchToProps)(ProfileCustomer));