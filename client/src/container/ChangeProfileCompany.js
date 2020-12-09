import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getUser, getUserStart, editUser, editUserStart } from "../store/actions/user";
import { storage } from "../firebase";

class ChangeProfileCompany extends Component {
  constructor() {
    super();
    this.initState = this.initState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.submit = this.submit.bind(this);
    this.state = {
      name: "",
      email: "",
      address: "",
      phone: "",
      image: "",
      avatar: "",
      description: "",
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
      this.props.history.push(`/profileCompany/${this.props.user_id}`)
    }
  }
  initState() {
    this.setState({
      name: this.props.user?.name,
      email: this.props.user?.email,
      address: this.props.user?.address,
      phone: this.props.user?.phone,
      image: this.props.user?.avatar,
      avatar: this.props.user?.avatar,
      description: this.props.user?.description,
    });
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  handleChangeImage = (e) => {
    if (e.target.files[0]) {
      this.setState({ image: e.target.files[0] }, () => {
        this.handleUpload();
      });
    }
  };
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
  submit() {
    console.log("háhshss", this.state);
    this.props.editUser(
      this.state.name,
      this.state.email,
      this.state.address,
      this.state.phone,
      this.state.avatar,
      this.state.description
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
                <span className="login100-form-title p-b-43">Công ty</span>
                <div className="form-group">
                  <label>Tên Công ty</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder={this.props.user?.name}
                    onChange={(e) => this.handleChange(e)}
                  />
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
                  <label>Địa chỉ công ty</label>
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
                <div className="form-group">
                  <label style={{ marginBottom: "5px" }}>Avartar</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="image"
                    onChange={(e) => this.handleChangeImage(e)}
                  />
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
                    placeholder={this.props.user?.description}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>

                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button
                    type="button"
                    className="login100-form-btn"
                    onClick={this.submit}
                  >
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
    editUser: (name, email, address, phone, avatar, description,birthday, gender) =>
      dispatch(editUser(name, email, address, phone, avatar, description,birthday, gender)),
    editUserStart:()=> dispatch(editUserStart()),
    getUser: () => dispatch(getUser()),
  };
}
export default withRouter(
  connect(mapStateProps, mapDispatchToProps)(ChangeProfileCompany)
);
