import React, { Component } from 'react';
import NavBar from '../Component/NavBar';

class Register extends Component {
    render() {
        return (
            <div>
                <NavBar />
        <div class="limiter" style={{backgroundImage: `url('assets/images/travel5.jpg')`}}>
          <div class="container-login100">
            <div class="wrap-login100">
              <form class="login-form validate-form">
                <span class="login100-form-title p-b-43">
                  Khách hàng
                </span>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Valid email is required: ex@abc.xyz"
                >
                  <input class="input100" type="text" name="name" />
                  <span class="focus-input100"></span>
                  <span class="label-input100">Họ tên</span>
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input class="input100" type="date" name="birthday" />
                  <span class="focus-input100"></span>
                  <span class="label-input100">Ngày sinh</span>
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input class="input100" type="" name="gender" />
                  <span class="focus-input100"></span>
                  <span class="label-input100">Giới tính</span>
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input class="input100" type="password" name="pass" />
                  <span class="focus-input100"></span>
                  <span class="label-input100">Email</span>
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input class="input100" type="password" name="pass" />
                  <span class="focus-input100"></span>
                  <span class="label-input100">Mật khẩu</span>
                </div>
                <div
                  class="wrap-input100 validate-input"
                  data-validate="Password is required"
                >
                  <input class="input100" type="password" name="pass" />
                  <span class="focus-input100"></span>
                  <span class="label-input100">Nhập lại mật khẩu</span>
                </div>  
                <div class="container-login100-form-btn">
                  <button class="login100-form-btn">Đăng kí</button>
                </div>
                {/* <div class="text-center p-t-46 p-b-20">
                  <span class="txt2">or sign up using</span>
                </div>
                <div class="Đăng kí100-form-social flex-c-m">
                  <a
                    href="https://colorlib.com/etc/lf/Đăng kí_v18/index.html#"
                    class="login100-form-social-item flex-c-m bg1 m-r-5"
                  >
                    <i class="fa fa-facebook-f" aria-hidden="true"></i>
                  </a>
                  <a
                    href="https://colorlib.com/etc/lf/Login_v18/index.html#"
                    class="login100-form-social-item flex-c-m bg2 m-r-5"
                  >
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                  </a>
                </div> */}
              </form>
            </div>
          </div>
        </div>
            </div>
        );
    }
}

export default Register;