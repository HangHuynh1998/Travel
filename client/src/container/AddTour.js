import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { addtour, getCategory, addTourStart } from "../store/actions";
import { connect } from "react-redux";
import { storage } from "../firebase/index";
import { Redirect, withRouter } from "react-router-dom";
class AddTour extends Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
    this.submit = this.submit.bind(this)
    this.state = {
      image:"",
     name:"",
     category_id:"5fc7ca6a93d3bc3add0c5e4d",
     place:"",
     numberpeople:"",
     price:"",
     avatar:"",
     startDate:null,
     endDate:null,
     description:"",
     contactInformation:"",
    }
  }
  componentDidMount(){
    this.props.getCategory()
    this.props.addTourStart()
    
  }
  componentWillReceiveProps(nextProps){
    if(nextProps.addTourStatus === "success"){
      this.props.history.push(`/managerCompany/${this.props.user_id}`)
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
  submit(){
    this.props.addTour(this.state.name,
      this.state.category_id,
      this.state.place,
      this.state.numberpeople,
      this.state.price,
      this.state.avatar,
      this.state.startDate,
      this.state.endDate,
      this.state.contactInformation,
      this.state.description)
  }
  render() {
    return (
      <div>
        <NavBar />
        <div
          className="limiter"
        >
          <div className="container-login100">
            <div className="wrap-login100" style = {{backgroundImage: `url('assets/images/travelhalong.jpg')`,backgroundRepeat:"round"}}>
              <form
                className="login-form validate-form"
                style={{ background: "white" }}
              >
                <span className="login100-form-title ">Thêm Tour</span>
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
                </div>
                <div className="form-group">
                  <label >Loại hình du lịch</label>
                  <select className="form-control" id="category_id" onChange={(e) => this.handleChange(e)} value = {this.state.category_id}>
                    {this.props.categorydata?.map((item,i)=>{
                      return <option key = {i} value = {item._id}>{item.name}</option>
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
                </div>
                <div className="form-group">
                  <label
                    style={{ marginBottom: "5px" }}
                  >
                    Hình ảnh tour
                  </label>
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
                <div className="form-group ">
                      <label
                        className="col-2 col-form-label"
                      >
                        Ngày bắt đầu
                      </label>
                      <div className="col-10">
                        <input
                          className="form-control"
                          type="date"
                          id="startDate"
                          value={this.state.startDate}
                          onChange={(e) => this.handleChange(e)}
                        />
                      </div>
                    </div>
                    <div className="form-group ">
                      <label
                        className="col-2 col-form-label"
                      >
                        Ngày kết thúc
                      </label>
                      <div className="col-10">
                        <input
                          className="form-control"
                          type="date"
                          id="endDate"
                          value={this.state.endDate}
                          onChange={(e) => this.handleChange(e)}
                        />
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
                </div>
                <div className="form-group">
                  <label>Mô tả chuyến đi</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    aria-describedby="description"
                    placeholder="Giới thiệu về công ty"
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button type="button" className="login100-form-btn" onClick = {this.submit}>
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
    addTourStatus:state.tour.loading
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
      addTourStart:()=>dispatch (addTourStart()),
    getCategory:()=>dispatch(getCategory())
  };
}


export default withRouter(connect(mapStateProps, mapDispatchToProps)(AddTour));
