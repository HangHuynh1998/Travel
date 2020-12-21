import React, { Component } from 'react';
import NavBar from '../Component/NavBar';
import { getUser, editUserStart, getUserStart, editUser } from '../store/actions/user';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

class ChangeProfileCustomer extends Component {
  constructor() {
    super();
    this.initState = this.initState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.validation = this.validation.bind(this)
    this.state = {
      name: "",
      email: "",
      address: "",
      phone: "",
      birthday: "",
      gender:"",
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
    this.props.getUser();
    this.initState();
  }
  componentWillReceiveProps(nextProps) {
    this.props.getUserStart();
    if (nextProps.loading === "success") {
      this.initState();
    }
    this.props.editUserStart()
    if(nextProps.loading === "success"){
      this.props.history.push(`/profileCustomer`)
    }
  }
  initState() {
    this.setState({
      name: this.props.user?.name,
      email: this.props.user?.email,
      address: this.props.user?.address,
      phone: this.props.user?.phone,
      birthday: this.props.user?.birthday,
      gender: this.props.user?.gender
    });
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
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
        if (this.state.password?.length < 6) {
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
  submit() {
    this.props.editUser(
      this.state.name,
      this.state.email,
      this.state.address,
      this.state.phone,
      null,
      null,
      this.state.birthday,
      this.state.gender
    );
  }
    render() {
        return (
            <div>
                  <NavBar />
                <div
          className="limiter"
          style={{ backgroundImage: `url('assets/images/travel5.jpg')`,backgroundRepeat:"round" }}
        >
          <div className="container-login100">
            <div className="wrap-login100">
              <form
                className="login-form validate-form"
                style={{ background: "white" }}
              >
    
                 
                  <span className="login100-form-title p-b-43">Khách hàng</span>
                  <div className="form-group">
                      <label>Tên khách hàng</label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        aria-describedby="name"
                        placeholder={this.props.user?.name}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </div>                    
                    <div className="form-group ">
                      <label
                        className="col-2 col-form-label"
                      >
                        Ngày sinh
                      </label>
                      <div className="col-10">
                        <input
                          className="form-control"
                          type="date"
                          value={this.props.user?.birthday}
                          id="birthday"
                          onChange={(e) => this.handleChange(e)}
                        />
                      </div>
                    </div>

                    <div classNameName="form-group">
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
                            value="option1"
                            defaultChecked={this.props.user?.gender}
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
                            value="option2"
                            defaultChecked={!this.props.user?.gender}
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
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    aria-describedby="email"
                    placeholder={this.props.user?.email}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
               
                    <div className="form-group">
                      <label>Địa chỉ </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        aria-describedby="address"
                        placeholder={this.props.user?.address}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                    <div className="form-group">
                      <label>Điện thoại</label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        aria-describedby="phone"
                        placeholder={`0${this.props.user?.phone}`}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                    
 
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button type="button" className="login100-form-btn" onClick ={this.submit}>
                    Lưu
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
    loading: state.user.loadingChange,
    user: state.user.data,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getUserStart: () => dispatch(getUserStart()),
    editUser: (name, email, address, phone,avatar, description,birthday,gender) =>
      dispatch(editUser(name, email,address,phone, avatar, description, birthday,gender)),
    editUserStart:()=> dispatch(editUserStart()),
    getUser: () => dispatch(getUser()),
  };
}
export default withRouter(
  connect(mapStateProps, mapDispatchToProps)(ChangeProfileCustomer)
);