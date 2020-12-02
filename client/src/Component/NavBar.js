import React, { Component } from "react";
import { NavLink, Redirect } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { connect } from "react-redux";
import { logout } from "../store/actions";
class NavBar extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.logOut = this.logOut.bind(this)
    this.state = {
      popoverOpen: false,
      role:"",
      userId:null
    };
  }
  componentDidMount(){
    // console.log("aaa",nextPros.loading);
    // if(nextPros.loading === "success"){
      if(localStorage.getItem("token")){
        const role = jwt_decode(localStorage.getItem("token")).user_id.role;
        const userId=jwt_decode(localStorage.getItem("token")).user_id._id;
        this.setState({role:role,userId:userId})
      }
     
    // }

  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }
  logOut(){
   this.props.logOut();
   this.setState({role:"", userId:null})
   return <Redirect to ="/"/>
  }
  render() {
    console.log("state",this.state, "isAu",this.props.isAuthenticated);
    return (
      <div className="navbar-wrapper">
        <header className="navbar navbar-default navbar-fixed-top">
          <div className="container-fluid collapse-md">
            <div className="navbar-header">
              <NavLink
                to="/"
                exact={true}
                className="navbar-brand"
                style={{ float: "none" }}
              >
                <img
                  style={{ maxHeight: "70px" }}
                  alt="Travel!"
                  src="assets/images/logo.png"
                />
                <span>&nbsp; Travel!</span>
              </NavLink>
            </div>
            <nav className="navbar-collapse collapse" id="navbar-main">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to="/" exact={true}>
                    Trang chủ
                  </NavLink>{" "}
                </li>

                <li className="dropdown show-on-hover">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                    Du lịch
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/travel?sightseeing">
                        Du lịch tham quan
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/travel?cultural">Du lịch văn hóa</NavLink>
                    </li>
                    <li>
                      <NavLink to="/travel?cuisine">Du lịch ẩm thực</NavLink>
                    </li>
                    <li>
                      <NavLink to="/travel?green">Du lịch xanh</NavLink>
                    </li>
                    <li>
                      <NavLink to="/travel?mice">Du lịch MICE</NavLink>
                    </li>
                    <li>
                      <NavLink to="/travel?building">Team Building</NavLink>
                    </li>
                  </ul>
                </li>

                <li>
                  <NavLink to="/review">Đánh giá</NavLink>
                </li>
                <li>
                  <NavLink to="/about">Giới thiệu</NavLink>
                </li>
                {this.props.isAuthenticated && (
                  <li>
                    {(this.state.role === "company")&& <NavLink to={`/profileCompany/${this.state.userId}`}>Quản lý thông tin</NavLink>}
                    {(this.state.role === "customer") && <NavLink to={`/profileCustomer/${this.state.userId}`}>Quản lý thông tin</NavLink>}
                  </li>
                )}
                {(this.state.role === "customer") && (
                  <li>
                    <NavLink to={`/managerCustomer/${this.state.userId}`}>
                      Quản lí tour
                      <i
                        className="fa fa-shopping-cart"
                        style={{ marginLeft: "2px" }}
                      ></i>
                    </NavLink>
                  </li>
                )}
                {(this.state.role === "company") && (
                  <li>
                    <NavLink to={`/managerCompany/${this.state.userId}`}>Quản lý tour</NavLink>
                  </li>
                )}
                {this.props.isAuthenticated && (
                  <li className="dropdown show-on-hover">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                   Thông báo
                      <i
                        className="fa fa-circle"
                        style={{
                          position: "absolute",
                          top: "22px",
                          color: "red",
                          fontSize: "10px",
                        }}
                      ></i>
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <NavLink to="/managertour">
                       thuhang đã đặt tour của bạn, hãy kiểm tra email
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/managetour">công ty saigonTour đã đăng tour mới</NavLink>
                    </li>
                  </ul>
                </li>
                )}

                {!this.props.isAuthenticated ? (
                  <li>
                    <NavLink to="/login"> Đăng nhập</NavLink>
                  </li>
                ) : (
                  <li>
                    <a href="#void" onClick = {this.logOut}>Đăng xuất</a>
                  </li>
                )}
              </ul>
            </nav>
          </div>
          {/* <!-- /.container-fluid --> */}
        </header>
      </div>
    );
  }
}
function mapStateProps (state){
  return {
    loading: state.auth.loading,
    isAuthenticated:localStorage.getItem("token") !==null,
  };
};
function mapDispatchToProps ( dispatch ) {
  return{
   logOut:()=>dispatch(logout())
  }
};
export default connect(mapStateProps, mapDispatchToProps)(NavBar);
