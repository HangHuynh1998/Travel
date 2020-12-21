import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { addtour, getCategory, addTourStart } from "../store/actions";
import { connect } from "react-redux";
import { storage } from "../firebase/index";
import { PayPalButton } from "react-paypal-button-v2";
import { Redirect, withRouter } from "react-router-dom";
import { getCustomer } from "../store/actions/customer";
class AddTour extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeImage = this.handleChangeImage.bind(this);
    this.handleUpload = this.handleUpload.bind(this);
    this.submit = this.submit.bind(this);
    this.validation = this.validation.bind(this)
    this.state = {
      image: "",
      name: "",
      category_id: "5fc7ca6a93d3bc3add0c5e4d",
      place: "",
      numberpeople: 0,
      price: 0,
      avatar: "",
      startDate: null,
      endDate: null,
      description: "",
      contactInformation: "",
      enable:true,
      validation: false,
      valiname: "",
      valiplace: "",
      valinumberPeople: "",
      valiprice: "",
      valiimage: "",
      validateend: "",
      validatestart: "",
      valicontactInfor: "",
      validescription: "",
    };
  }
  componentDidMount() {
    this.props.getCategory();
    this.props.addTourStart();
    //this.props.getCustomer(this.props.user_id)

  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.addTourStatus === "success") {
      this.props.history.push(`/managerCompany/${this.props.user_id}`);
    }
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
  validation() {
    this.setState(
      {
        validation: false,
        valiname: "",
        valiplace: "",
        valinumberPeople: "",
        valiprice: "",
        valiimage: "",
        validateend: "",
        validatestart: "",
        valicontactInfor: "",
        validescription: "",
      },
      () => {
        if (this.state.name === "") {
          this.setState({
            valiname: "Tên chưa được nhập",
            validation: true,
          });
        }
        if (this.state.place === "") {
          this.setState({
            valiplace: "Điểm đến chưa được nhập",
            validation: true,
          });
        }
        if (this.state.image === "") {
          this.setState({
            valiimage: "Hình ảnh chưa có",
            validation: true,
          });
        }
        if (this.state.startDate === null) {
          this.setState({
            validatestart: "Ngày bắt đầu chưa được nhập",
            validation: true,
          });
        }
        if (this.state.endDate === null) {
          this.setState({
            validateend: "Ngày kết thúc chưa được nhập",
            validation: true,
          });
        }
        if (this.state.contactInformation === "") {
          this.setState({
            valicontactInfor: "Liên hệ chưa được nhập",
            validation: true,
          });
        }
        if (this.state.numberpeople === 0) {
          this.setState({
            valinumberPeople: "Nhập số lượng người",
            validation: true,
          });
        }
        if (this.state.numberpeople) {
          var numberpeople = new RegExp(/^[0-9\b]+$/);
          if (!numberpeople.test(this.state.numberpeople)) {
            this.setState({
              valinumberPeople: "Không đúng định dạng",
              validation: true,
            });
          } 
        }
        if (this.state.price === 0) {
          this.setState({
            valiprice: "Nhập giá",
            validation: true,
          });
        }
        if (this.state.price) {
          var price = new RegExp(/^[0-9\b]+$/);
          if (!price.test(this.state.price)) {
            this.setState({
              valiprice: "Không đúng định dạng",
              validation: true,
            });
          } 
        }
          if (this.state.description === "") {
            this.setState({
              validescription: "Nhập giới thiệu, mô tả về công ty",
              validation: true,
            });
          }
        
      }
    );
  }
  submit() {
    this.props.addTour(
      this.state.name,
      this.state.category_id,
      this.state.place,
      this.state.numberpeople,
      this.state.price,
      this.state.avatar,
      this.state.startDate,
      this.state.endDate,
      this.state.contactInformation,
      this.state.description
    );
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="limiter">
          <div className="container-login100">
            <div
              className="wrap-login100"
              style={{
                backgroundImage: `url('assets/images/travelhalong.jpg')`,
                backgroundRepeat: "round",
              }}
            >
              <form
                className="login-form validate-form"
                style={{ background: "white" }}
              >
                <span className="login100-form-title ">Thêm Tour</span>
                <span className="login100-form-title p-b-43"
                  style={{ fontSize: "15px",paddingBottom:"10px",color:"red"}}>*Bạn sẽ phải trả 10% số tiền của tour cho phí dịch vụ*</span>
                <span
                  className="login100-form-title p-b-43"
                  style={{ fontSize: "24px", marginTop: "10px" }}
                >
                  Công ty {this.props.name}
                </span>
                <div className="form-group">
                  <label>Tên Tour</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder="Nhập tên tour"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span class="text-danger">{this.state.valiname}</span>
                </div>
                <div className="form-group">
                  <label>Loại hình du lịch</label>
                  <select
                    className="form-control"
                    id="category_id"
                    onChange={(e) => this.handleChange(e)}
                    value={this.state.category_id}
                  >
                    {this.props.categorydata?.map((item, i) => {
                      return (
                        <option key={i} value={item._id}>
                          {item.name}
                        </option>
                      );
                    })}
                  </select>
                </div>
                <div className="form-group">
                  <label>Điểm đến</label>
                  <input
                    type="text"
                    className="form-control"
                    id="place"
                    aria-describedby="place"
                    placeholder="Nhập các điểm đến"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span class="text-danger">{this.state.valiplace}</span>
                </div>
                <div className="form-group">
                  <label>Số lượng người</label>
                  <input
                    type="text"
                    className="form-control"
                    id="numberpeople"
                    aria-describedby="numberpeople"
                    placeholder="Nhập các điểm đến"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span class="text-danger">{this.state.valinumberPeople}</span>
                </div>
                <div className="form-group">
                  <label>Giá(VNĐ)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    aria-describedby="price"
                    placeholder="Nhập giá tiền"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span class="text-danger">{this.state.valiprice}</span>
                </div>
                <div className="form-group">
                  <label style={{ marginBottom: "5px" }}>Hình ảnh tour</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="image"
                    onChange={(e) => this.handleChangeImage(e)}
                  />
                  <span class="text-danger">{this.state.valiimage}</span>
                </div>
                <div className="form-group">
                  <process value={process} max="100"></process>
                  <img src={this.state.avatar} alt="" />
                </div>
                <div className="form-group ">
                  <label className="col-2 col-form-label">Ngày bắt đầu</label>
                  <div className="col-10">
                    <input
                      className="form-control"
                      type="date"
                      id="startDate"
                      value={this.state.startDate}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span class="text-danger">{this.state.validatestart}</span>
                  </div>
                </div>
                <div className="form-group ">
                  <label className="col-2 col-form-label">Ngày kết thúc</label>
                  <div className="col-10">
                    <input
                      className="form-control"
                      type="date"
                      id="endDate"
                      value={this.state.endDate}
                      onChange={(e) => this.handleChange(e)}
                    />
                    <span class="text-danger">{this.state.validateend}</span>
                  </div>         
                </div>
                <div className="form-group">
                  <label>Thông tin liên hệ</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="contactInformation"
                    aria-describedby="contactInformation"
                    placeholder="Nhập thông tin liên hệ"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span class="text-danger">{this.state.valicontactInfor}</span>
                </div>
                <div className="form-group">
                  <label>Mô tả chuyến đi</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    aria-describedby="description"
                    placeholder="Mô tả chuyến đi"
                    onChange={(e) => this.handleChange(e)}
                  />
                  <span class="text-danger">{this.state.validescription}</span>
                </div>
                {this.state.enable &&
                <div style = {{marginTop:"30px"}}>
                <span style = {{color:"red"}}> Vui lòng thanh toán phí dịch vụ</span>
                <PayPalButton
                  amount={Math.ceil((this.state.price*10/2200000))}
                  onSuccess={(details, data) => {
                    alert(
                      "Transaction completed by " +
                        details.payer.name.given_name
                    );
                    this.setState({enable:false})
                    return fetch("/paypal-transaction-complete", {
                      method: "post",
                      body: JSON.stringify({
                        orderID: data.orderID,
                      }),
                    });
                  }}
                  onClick = {this.validation}
                />
                </div>
                }
                
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button
                    type="button"
                    className="login100-form-btn"
                    onClick={this.submit}
                    disabled = {this.state.enable}
                  >
                    Thêm tour
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
    categorydata: state.category.data,
    addTourStatus: state.tour.loading,
    isAuthenticated: localStorage.getItem("token") !== null,
    //customer: state.customer.data
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addTour: (
      name,
      category_id,
      place,
      numberpeople,
      price,
      image,
      startdate,
      enddate,
      contactInformation,
      description
    ) =>
      dispatch(
        addtour(
          name,
          category_id,
          place,
          numberpeople,
          price,
          image,
          startdate,
          enddate,
          contactInformation,
          description
        )
      ),
    addTourStart: () => dispatch(addTourStart()),
    getCategory: () => dispatch(getCategory()),
    //getCustomer: (id) => dispatch(getCustomer(id))
  };
}

export default withRouter(connect(mapStateProps, mapDispatchToProps)(AddTour));
