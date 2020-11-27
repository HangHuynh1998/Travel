import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar-wrapper">
			<header className="navbar navbar-default navbar-fixed-top" >
				<div className="container-fluid collapse-md" >
					<div className="navbar-header">
						<NavLink to = "/" exact={true} className="navbar-brand" style= {{float:"none"}}><img style ={{maxHeight:"70px"}} alt="Travel!" src="assets/images/logo.png"/><span>&nbsp; Travel!</span></NavLink>
					</div>
					<nav className="navbar-collapse collapse" id="navbar-main">
						<ul className="nav navbar-nav navbar-right">
						<li><NavLink to = "/" exact={true} >Trang chủ</NavLink> </li>

							<li className="dropdown show-on-hover">
							   <a className="dropdown-toggle" data-toggle="dropdown" href="#">Du lịch</a>
										<ul className="dropdown-menu">
											<li><NavLink to ="/travel?sightseeing">Du lịch tham quan</NavLink></li>
											<li><NavLink to ="/travel?cultural">Du lịch văn hóa</NavLink></li>
											<li><NavLink to ="/travel?cuisine">Du lịch ẩm thực</NavLink></li>
											<li><NavLink to ="/travel?green">Du lịch xanh</NavLink></li>
											<li><NavLink to ="/travel?mice">Du lịch MICE</NavLink></li>
											<li><NavLink to ="/travel?building">Team Building</NavLink></li>
										</ul>
							</li>

							<li><NavLink to ="/review">Đánh giá</NavLink></li>
							<li><NavLink to = "/about">Giới thiệu</NavLink></li>
							<li><NavLink to ="/login"> Đăng nhập</NavLink></li>
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