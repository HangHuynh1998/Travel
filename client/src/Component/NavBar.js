import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Button, Popover, PopoverHeader, PopoverBody, UncontrolledPopover } from "reactstrap";
class NavBar extends Component {
  constructor() {
    super();
    this.toggle = this.toggle.bind(this);
    this.state = {
      isCustomer: false,
      isCompany: false,
      isAuthenticated: true,
      popoverOpen: false,
    };
  }
  toggle() {
    this.setState({
      popoverOpen: !this.state.popoverOpen,
    });
  }
  render() {
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
                {this.state.isAuthenticated && (
                  <li>
                    <NavLink to="/profile">Quản lý thông tin</NavLink>
                  </li>
                )}
                {!this.state.isCustomer && (
                  <li>
                    <NavLink to="/">
                      Đặt tour
                      <i
                        class="fa fa-shopping-cart"
                        style={{ marginLeft: "2px" }}
                      ></i>
                    </NavLink>
                  </li>
                )}
                {this.state.isCompany && (
                  <li>
                    <NavLink to="/">Quản lý tour</NavLink>
                  </li>
                )}
                {this.state.isAuthenticated && (
                  <li className="dropdown show-on-hover">
                  <a
                    className="dropdown-toggle"
                    data-toggle="dropdown"
                    href="#"
                  >
                   Thông báo
                      <i
                        class="fa fa-circle"
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

                {!this.state.isAuthenticated ? (
                  <li>
                    <NavLink to="/login"> Đăng nhập</NavLink>
                  </li>
                ) : (
                  <li>
                    <NavLink to="/logOut">Đăng xuất</NavLink>
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

export default NavBar;
