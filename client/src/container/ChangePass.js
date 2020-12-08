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
    this.state = {
      old_pass:"",
      new_pass:"",
      new_pass_retype:""
    };
  }
  componentWillReceiveProps(nextProps) {
    this.props.changePassStart()
    if(nextProps.loading === "success"){
      this.props.history.push(`/profileCompany/${this.props.user_id}`)
    }
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  submit() {
    this.props.changePass(
      this.state.old_pass,
      this.state.new_pass,
      this.state.new_pass_retype
    );
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
