import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { changePassStart, changePass } from "../store/actions/changePass";

class ChangePass extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.validation = this.validation.bind(this)
    this.state = {
      old_pass:"",
      new_pass:"",
      new_pass_retype:"",
      validation: false,
      valiold_pass:"",
      valinew_pass:"",
      valinew_pass_retype:""
    };
  }
  componentWillReceiveProps(nextProps) {
    this.props.changePassStart()
    if(nextProps.loading === "success"){
      if(this.props.role === "customer"){
        this.props.history.push(`/profileCustomer/${this.props.user_id}`)
      }else{
        if(this.props.role === "company"){
          this.props.history.push(`/profileCompany/${this.props.user_id}`)
        }
      }
    }
    if(nextProps.loading === "error"){
      this.setState({valiold_pass: "Mật khẩu cũ chưa đúng",})
    }
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
        valiold_pass:"",
        valinew_pass:"",
        valinew_pass_retype:""
      },
      () => {
        if (this.state.old_pass === "") {
          this.setState({
            valiold_pass: "Mật khẩu chưa được nhập",
            validation: true,
          });
        } 
        if (this.state.new_pass === "") {
          this.setState({
            valinew_pass: "Mật khẩu chưa được nhập",
            validation: true,
          });
        }
        if (this.state.new_pass?.length < 6) {
          this.setState({
            valinew_pass: "Mật khẩu phải dài ít nhất 6 kí tự",
            validation: true,
          });
        }
        if (this.state.new_pass_retype === "") {
          this.setState({
            valinew_pass_retype: "Nhập lại mật khẩu chưa được nhập",
            validation: true,
          });
        }
        if (this.state.new_pass !== this.state.new_pass_retype) {
          this.setState({
            valinew_pass_retype: "Không trùng với mật khẩu",
            validation: true,
          });
        }
      }
    )
  }
  submit= async() => {
    await this.validation();
    if (this.state.validation === true) {
      return;
    } else {
    this.props.changePass(
      this.state.old_pass,
      this.state.new_pass,
      this.state.new_pass_retype
    );}
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
                style={{ background: "white" }}
              >
                <span className="login100-form-title p-b-43">
                  Thay đổi mật khẩu
                </span>

                <div className="form-group">
                  <label>Mật khẩu cũ</label>
                  <input
                    type="password"
                    className="form-control"
                    id="old_pass"
                    aria-describedby="old_pass"
                    placeholder="Mật khẩu cũ"
                    onChange={(e) => this.handleChange(e)}
                  />
                   <span class="text-danger">{this.state.valiold_pass}</span>
                </div>
                <div className="form-group">
                  <label>Mật khẩu mới</label>
                  <input
                    type="password"
                    className="form-control"
                    id="new_pass"
                    aria-describedby="new_pass"
                    placeholder="Mật khẩu mới"
                    onChange={(e) => this.handleChange(e)}
                  />
                   <span class="text-danger">{this.state.valinew_pass}</span>
                </div>
                <div className="form-group">
                  <label>Nhập lại mật khẩu mới</label>
                  <input
                    type="password"
                    className="form-control"
                    id="new_pass_retype"
                    aria-describedby="new_pass_retype"
                    placeholder="Nhập lại mật khẩu mới"
                    onChange={(e) => this.handleChange(e)}
                  />
                   <span class="text-danger">{this.state.valinew_pass_retype}</span>
                </div>
                {this.props.data?.message && <span class="text-danger">{this.props.data?.message}</span>}
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button type="button" className="login100-form-btn" onClick = {this.submit}>
                    Thay đổi
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
    loading: state.changePass.loading,
    error: state.changePass.error,
    data: state.changePass.data
  };
}
function mapDispatchToProps(dispatch) {
  return {
    changePassStart: () => dispatch(changePassStart()),
    changePass: (old_pass,new_pass,new_pass_retype) =>
      dispatch(changePass(old_pass,new_pass,new_pass_retype)),
  };
}
export default withRouter(
  connect(mapStateProps, mapDispatchToProps)(ChangePass))
