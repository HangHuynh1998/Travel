import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { storage } from "../firebase/index";
import { connect } from "react-redux";
import { registerCompany, registerCustomer } from "../store/actions/auth";

class Register extends Component {
  constructor() {
    super();
    this.isCustomer = this.isCustomer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.submit = this.submit.bind(this);
    this.validation = this.validation.bind(this);

    this.state = {
      customer: false,
      image: null,
      avatar: "",
      progress: 0,
      email: "",
      password: "",
      repass: "",
      name: "",
      address: "",
      phone: 0,
      birthday: null,
      gender: true,
      description: "",
      message: "",
      validation: false,
      valiname: "",
      valiemail: "",
      valiaddress: "",
      valipassword: "",
      valirepass: "",
      valiphone: "",
      valiavatar: "",
      valibirthday: "",
      valigender: "",
      validescription: "",
    };
  }
  componentDidMount() {
    if (this.props.location) {
      this.isCustomer();
    }
  }
  componentWillReceiveProps(nextProps) {
    this.isCustomer();
    if (nextProps.loading === "success") {
      this.props.history.push("/login");
    }
    if (nextProps.loading === "error") {
      this.setState({ message: "Email hoặc mật khẩu đã tồn tại" });
    }
  }
  isCustomer() {
    const search = this.props.location.search;
    if (search === "?customer") {
      this.setState({ customer: true });
    } else {
      this.setState({ customer: false });
    }
  }
  handleChangeImage = (e) => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] }, () => {
        this.handleUpload();
      });
    }
  };
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  handleUpload() {
    const uploadTask = storage
      .ref(`images/${this.state.image.name}`)
      .put(this.state.image);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress: progress });
      },
      (error) => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(this.state.image.name)
          .getDownloadURL()
          .then((url) => {
            this.setState({ avatar: url });
          });
      }
    );
  }
  async submit() {
    await this.validation()
    if (this.state.validation === true) {
      return;
    } else {
      if (this.state.customer === true) {
        this.props.registerCustomer(
          this.state.name,
          this.state.address,
          this.state.phone,
          this.state.birthday,
          this.state.gender,
          this.state.email,
          this.state.password
        );
      }
      if (this.state.customer === false) {
        this.props.registerCompany(
          this.state.name,
          this.state.address,
          this.state.phone,
          this.state.avatar,
          this.state.email,
          this.state.password,
          this.state.description
        );
      }
    }
  }
  validation() {
    this.setState(
      {
        validation: false,
        valiname: "",
        valiemail: "",
        valiaddress: "",
        valipassword: "",
        valirepass: "",
        valiphone: "",
        valiavatar: "",
        valibirthday: "",
        valigender: "",
        validescription: "",
      },
      () => {
        if (this.state.name === "") {
          this.setState({
            valiname: "Tên chưa được nhập",
            validation: true,
          });
        }
        if (this.state.address === "") {
          this.setState({
            valiaddress: "Địa chỉ chưa được nhập",

            validation: true,
          });
        }

        if (this.state.password === "") {
          this.setState({
            valipassword: "Mật khẩu chưa được nhập",
            validation: true,
          });
        }
        if(this.state.password?.length <=6){
          this.setState({
            valipassword: "Mật khẩu phải dài ít nhất 6 kí tự",
            validation: true,
          });
        }
        if (this.state.repass === "") {
          this.setState({
            valirepass: "Nhập lại mật khẩu chưa được nhập",
            validation: true,
          });
        }
        if (this.state.password !== this.state.repass) {
          this.setState({
            valirepass: "Không trùng với mật khẩu",
            validation: true,
          });
        }
        if (this.state.phone === 0) {
          this.setState({
            valiphone: "Nhập số điện thoại",
            validation: true,
          });
        }
        if (this.state.phone) {
          var phone = new RegExp(/^[0-9\b]+$/);
          if (!phone.test(this.state.phone)) {
            this.setState({
              valiphone: "Không đúng định dạng",
              validation: true,
            });
          } else if (this.state.phone.length !== 10) {
            this.setState({
              valiphone: "Số điện thoại phải đủ 10 chữ số",
              validation: true,
            });
          }
        }
        if (this.state.email === "") {
          this.setState({
            valiemail: "Email chưa được nhập",
            validation: true,
          });
        }
        if (this.state.email) {
          const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (!re.test(this.state.email)) {
            this.setState({
              valiemail: "Không đúng định dạng example@example.com",
              validation: true,
            });
          }
        }
        if (this.state.customer === true) {
          if (this.state.birthday === null) {
            this.setState({
              valibirthday: "Nhập ngày sinh",
              validation: true,
            });
          }
        }
        if (this.state.customer === false) {
          if (this.state.avatar === "") {
            this.setState({
              valiavatar: "Tải hình ảnh của công ty",
              validation: true,
            });
          }
          if (this.state.description === "") {
            this.setState({
              validescription: "Nhập giới thiệu, mô tả về công ty",
              validation: true,
            });
          }
        }
      }
    );
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
                    {this.props.loading === "error" && (
                      <span class="text-danger">{this.state.message}</span>
                    )}
                    <div className="form-group">
                      <label>Họ tên</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Họ tên"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <span class="text-danger">{this.state.valiname}</span>
                    </div>

                    <div className="form-group ">
                      <label className="col-2 col-form-label">Ngày sinh</label>
                      <div className="col-10">
                        <input
                          className="form-control"
                          type="date"
                          value={this.state.birthday}
                          id="birthday"
                          onChange={(e) => this.handleChange(e)}
                        />
                        <span class="text-danger">
                          {this.state.valibirthday}
                        </span>
                      </div>
                    </div>

                    <div className="form-group">
                      <label>Giới tính</label>
                      <div style={{ display: "flex" }}>
                        <div
                          className="form-check"
                          style={{
                            display: "flex",
                            marginRight: "50px",
                            marginLeft: "20px",
                          }}
                        >
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios1"
                            defaultChecked={this.state.gender}
                            onClick={() => this.setState({ gender: true })}
                          />
                          <label
                            className="form-check-label"
                            style={{ marginLeft: "3px" }}
                          >
                            Nam
                          </label>
                        </div>
                        <div className="form-check" style={{ display: "flex" }}>
                          <input
                            className="form-check-input"
                            type="radio"
                            name="exampleRadios"
                            id="exampleRadios2"
                            onClick={() => this.setState({ gender: false })}
                          />
                          <label
                            className="form-check-label"
                            style={{ marginLeft: "3px" }}
                          >
                            Nữ
                          </label>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <span className="login100-form-title p-b-43">Công ty</span>
                    {this.props.loading === "error" && (
                      <span class="text-danger">{this.state.message}</span>
                    )}
                    <div className="form-group">
                      <label>Họ tên</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder="Họ tên"
                        value={this.state.name}
                        onChange={(e) => this.handleChange(e)}
                      />
                      <span class="text-danger">{this.state.valiname}</span>
                    </div>
                  </>
                )}
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <span class="text-danger">{this.state.valiemail}</span>
                <div className="form-group">
                  <label>Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="password"
                    placeholder="Mật khẩu"
                    value={this.state.password}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span class="text-danger">{this.state.valipassword}</span>
                </div>

                <div className="form-group">
                  <label>Nhập lại mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    id="repass"
                    aria-describedby="repass"
                    placeholder="Nhập lại mật khẩu"
                    value={this.state.repass}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span class="text-danger">{this.state.valirepass}</span>
                </div>

                <div className="form-group">
                  <label>Địa chỉ </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    aria-describedby="address"
                    placeholder="Địa chỉ"
                    value={this.state.address}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span class="text-danger">{this.state.valiaddress}</span>
                </div>

                <div className="form-group">
                  <label>Điện thoại</label>
                  <input
                    type="text"
                    className="form-control"
                    id="phone"
                    aria-describedby="phone"
                    placeholder="Số điện thoại"
                    value={this.state.phone}
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span class="text-danger">{this.state.valiphone}</span>
                </div>

                {!this.state.customer && (
                  <>
                    <div className="form-group">
                      <label style={{ marginBottom: "5px" }}>
                        Hình ảnh công ty
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        onChange={(e) => this.handleChangeImage(e)}
                      />
                      <span class="text-danger">{this.state.valiavatar}</span>
                    </div>

                    <div className="form-group">
                      <process value={process} max="100"></process>
                      <img src={this.state.avatar} alt="" />
                    </div>

                    <div className="form-group">
                      <label>Giới thiệu về công ty</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="description"
                        aria-describedby="description"
                        placeholder="Giới thiệu về công ty"
                        onChange={(e) => this.handleChange(e)}
                      />
                      <span class="text-danger">
                        {this.state.validescription}
                      </span>
                    </div>
                  </>
                )}
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button
                    type="button"
                    className="login100-form-btn"
                    onClick={this.submit}
                  >
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
function mapStateProps(state) {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    // token: state.auth.token,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    registerCustomer: (
      name,
      address,
      phone,
      birthday,
      gender,
      email,
      password
    ) =>
      dispatch(
        registerCustomer(
          name,
          address,
          phone,
          birthday,
          gender,
          email,
          password
        )
      ),
    registerCompany: (
      name,
      address,
      phone,
      avatar,
      email,
      password,
      description
    ) =>
      dispatch(
        registerCompany(
          name,
          address,
          phone,
          avatar,
          email,
          password,
          description
        )
      ),
  };
}

export default connect(mapStateProps, mapDispatchToProps)(Register);
