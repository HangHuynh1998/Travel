import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import {storage} from "../firebase/index"
import { connect } from "react-redux";
import { registerCompany, registerCustomer } from "../store/actions/auth";

class Register extends Component {
  constructor() {
    super();
    this.isCustomer = this.isCustomer.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.submit = this.submit.bind(this)

    this.state = {
      customer: false,
      image:null,
      avatar:null,
      progress:0,
      email:"",
      password:"",
      repass:"",
      name:"",
      address:"",
      phone:0,
      birthday:null,
      gender:true,
      disabled:true
    };
  }
  componentDidMount() {
    if (this.props.location) {
      this.isCustomer();
    }
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.location.search !== nextProps.location.search) {
      this.isCustomer();
    }
  }
  isCustomer() {
    const search = this.props.location.search.slice(8);
    if (search === "customer") {
      this.setState({ customer: true });
    } else {
      this.setState({ customer: false });
    }
  }
  handleChangeImage = e =>{
    if(e.target.files[0]){
    this.setState({image:e.target.files[0]},()=>{
      this.handleUpload()
    })
    }
  }
  handleChange(e){
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });

  }
  handleUpload(){
    const uploadTask = storage.ref(`images/${this.state.image.name}`).put(this.state.image)
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress =Math.round(
          (snapshot.bytesTransferred/snapshot.totalBytes)*100
        );
        this.setState({progress:progress})
      },
      error => {
        console.log(error)
      },
      ()=>{
        storage
        .ref("images")
        .child(this.state.image.name)
        .getDownloadURL()
        .then(url => {
          this.setState({avatar:url})
        })
      }
    )
  }
  submit(){
      if(this.state.customer === true){
        this.props.registerCustomer(this.state.name,this.state.address,this.state.phone,this.state.birthday,this.state.gender,this.state.email, this.state.password)
      }
      if(this.state.customer === false){
        this.props.registerCustomer(this.state.name,this.state.address,this.state.phone,this.state.avatar,this.state.email, this.state.password)
      }
      console.log("value",this.state);
  }
  render() {
    //const { match, location, history } = this.props
    console.log("hahaha",this.state.customer);
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
                          value={this.state.birthday}
                          id="example-date-input"
                        onChange={(e) => this.handleChange(e)}
                        />
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
                            value={this.state.gender}
                            checked ={this.state.gender}
                            onChange={() => this.setState({gender:!this.state.gender})}
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
                            value={!this.state.gender}
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
                    value = {this.state.email}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Mật khẩu</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                    aria-describedby="password"
                    placeholder="Mật khẩu"
                    value = {this.state.password}
                    onChange={(e) => this.handleChange(e)}
                  />
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
                </div>
                <div className="form-group">
                      <label>Địa chỉ công ty</label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        aria-describedby="address"
                        placeholder="Địa chỉ công ty"
                        value ={this.state.address}
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
                        placeholder="Số điện thoại"
                        value = {this.state.phone}
                        onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                {!this.state.customer && (
                  <>
                    <div className="form-group">
                      <label style = {{marginBottom:"5px"}}>
                        Hình ảnh công ty
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                        onChange = {(e)=> this.handleChangeImage(e)}
                      />
                    </div>
                    <div className="form-group">
                      <process value = {process} max = "100"></process>
                      <img src={this.state.avatar} alt="" />
                    </div>
                   
                    <div className="form-group">
                      <label >Giới thiệu về công ty</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="about"
                        aria-describedby="about"
                        placeholder="Giới thiệu về công ty"
                        //onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                  </>
                )}
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button type="button" className="login100-form-btn" onClick = {this.submit} >
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
function mapStateProps (state){
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    // token: state.auth.token,
  };
};
function mapDispatchToProps ( dispatch ) {
  return{
    registerCustomer:(name,address,phone,birthday,gender,email, password)=>dispatch(registerCustomer(name,address,phone,birthday,gender,email, password)),
    registerCompany:(name,address,phone,avatar,email, password) => dispatch (registerCompany(name,address,phone,avatar,email, password))
  }
};

export default connect(mapStateProps,mapDispatchToProps) (Register);
