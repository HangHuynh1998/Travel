import React, { Component } from 'react';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar-wrapper">
			<header className="navbar navbar-default navbar-fixed-top" >
				<div class="container-fluid collapse-md" >
					<div class="navbar-header">
						<a href="#" class="navbar-brand" style= {{float:"none"}}><img style ={{maxHeight:"70px"}} alt="Travel!" src="assets/images/logo.png"/><span>&nbsp; Travel!</span></a>
					</div>
					<nav class="navbar-collapse collapse" id="navbar-main">
						<ul class="nav navbar-nav navbar-right">
						<li><a href="#void">Trang chủ</a></li>

							<li class="dropdown show-on-hover">
							   <a class="dropdown-toggle" data-toggle="dropdown" href="#">Du lịch</a>
										<ul class="dropdown-menu">
											<li><a href="#void">Du lịch tham quan</a></li>
											<li><a href="#void">Du lịch văn hóa</a></li>
											<li><a href="#void">Du lịch ẩm thực</a></li>
											<li><a href="#void">Du lịch xanh</a></li>
											<li><a href="#void">Du lịch MICE</a></li>
											<li><a href="#void">Team Building</a></li>
										</ul>
							</li>

							<li><a href="#void">Đánh giá</a></li>
							<li><a href="#void">Giới thiệu</a></li>
							<li><a href="#void">Đăng nhập</a></li>
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