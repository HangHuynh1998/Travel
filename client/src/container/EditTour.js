import React, { Component } from 'react';
import NavBar from '../Component/NavBar';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getCategory, edittour } from '../store/actions';
import { getOneTour, getOneTourStart } from '../store/actions/tourdetail';
import { storage } from '../firebase';

class EditTour extends Component {
  constructor() {
    super();
    this.initState =this.initState.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
    this.handleUpload = this.handleUpload.bind(this)
    this.submit = this.submit.bind(this)
    this.state = {
     image:"",
     name:"",
     category_id:"",
     place:"",
     numberpeople:"",
     price:"",
     avatar:"",
     startDate:null,
     endDate:null,
     description:"",
     contactInformation:"",
     sale:""
    }
  }
  componentDidMount(){
    this.props.getCategory()
    this.props.getTourDetail(this.props.history.location.pathname.slice(10))
  }
  componentWillReceiveProps(nextProps){
    this.props.getTourDetailStart()
    if(nextProps.loading === "success"){
      this.initState()
    }
  }
  initState(){
    this.setState({
      image:this.props.tourdetail?.image,
      name:this.props.tourdetail?.name,
      category_id:this.props.tourdetail?.category_id._id,
      place:this.props.tourdetail?.place,
      numberpeople:this.props.tourdetail?.numberPeople,
      price:this.props.tourdetail?.price,
      avatar:this.props.tourdetail?.image,
      startDate:this.props.tourdetail?.startDate,
      endDate:this.props.tourdetail?.endDate,
      description:this.props.tourdetail?.description,
      contactInformation:this.props.tourdetail?.contactInformation,
      sale:this.props.tourdetail?.sale
    })
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
    this.props.editTour(
      this.props.history.location.pathname.slice(10),
      this.state.name,
      this.state.category_id,
      this.state.place,
      this.state.numberpeople,
      this.state.price,
      this.state.avatar,
      this.state.startDate,
      this.state.endDate,
      this.state.contactInformation,
      this.state.description,
      this.state.sale)
  }
    render() {
        return (
            <div>
                <NavBar />
        <div
          className="limiter"
        >
          <div className="container-login100">
            <div className="wrap-login100"  style={{ backgroundImage: `url('assets/images/travelhalong.jpg')`,backgroundRepeat:"round" }}>
              <form
                className="login-form validate-form"
                style={{ background: "white",paddingBottom:"30px", marginBottom:"10px"}}
              >
                <span className="login100-form-title ">Chỉnh sửa Tour</span>
                <span
                  className="login100-form-title"
                  style={{ fontSize: "24px", marginTop: "20px" }}
                >
                  Công ty {this.props.tourdetail?.company_id.name}
                </span>
                <div className="form-group">
                  <label>Tên Tour</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder={this.props.tourdetail?.name}
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
                    placeholder= {this.props.tourdetail?.place}
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
                    placeholder={this.props.tourdetail?.numberPeople}
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
                    placeholder={this.props.tourdetail?.price}
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
                          value={this.props.tourdetail?.startDate}
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
                          value={this.props.tourdetail?.endDate}
                          onChange={(e) => this.handleChange(e)}
                        />
                      </div>
                    </div>
                <div className="form-group">
                  <label>Mô tả chuyến đi</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="description"
                    aria-describedby="description"
                    placeholder={this.props.tourdetail?.description}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Thông tin liên hệ</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="contactInformation"
                    aria-describedby="contactInformation"
                    placeholder={this.props.tourdetail?.contactInformation}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Giảm giá(%)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="sale"
                    aria-describedby="sale"
                    placeholder={this.props.tourdetail?.sale}
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "20px" }}
                >
                  <button type="button" className="login100-form-btn" onClick = {this.submit}>
                   Lưu tour
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
    categorydata: state.category.data,
    tourdetail: state.tourdetail.tourdetail,
    loading: state.tourdetail.loading
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getCategory:()=>dispatch(getCategory()),
    getTourDetailStart:()=>dispatch(getOneTourStart()),
    getTourDetail:(id)=>dispatch(getOneTour(id)),
    editTour:(
      id,
      name,
      category_id,
      place,
      numberpeople,
      price,
      image,
      startdate,
      enddate,
      contactInformation,
      description,
      sale)=>dispatch(edittour(
        id,
        name,
        category_id,
        place,
        numberpeople,
        price,
        image,
        startdate,
        enddate,
        contactInformation,
        description,
        sale))
  };
}
export default withRouter(connect(mapStateProps, mapDispatchToProps)(EditTour));