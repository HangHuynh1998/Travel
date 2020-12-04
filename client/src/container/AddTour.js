import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { addtour, getCategory } from "../store/actions";
import { connect } from "react-redux";

class AddTour extends Component {
  constructor() {
    super();

    this.state = {

    }
  }
  componentDidMount(){
    this.props.getCategory()
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
                <span className="login100-form-title ">Thêm Tour</span>
                <span
                  className="login100-form-title p-b-43"
                  style={{ fontSize: "24px", marginTop: "10px" }}
                >
                  Công ty SaiGonTourist
                </span>
                <div className="form-group">
                  <label>Tên Tour</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder="Nhập tên tour"
                    //onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label >Loại hình du lịch</label>
                  <select className="form-control" id="exampleFormControlSelect1">
                    <option>Du lịch tham quan</option>
                    <option>Du lịch văn hóa</option>
                    <option>Du lịch ẩm thực</option>
                    <option>Du lịch xanh</option>
                    <option>Du lịch MICE</option>
                    <option>Team Building</option>
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
                    //onChange={(e) => this.handleChange(e)}
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
                    //onChange={(e) => this.handleChange(e)}
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
                    id="exampleFormControlFile1"
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
                          value="2011-08-19"
                          id="example-date-input"
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
                          value="2011-08-19"
                          id="example-date-input"
                        />
                      </div>
                    </div>
                <div className="form-group">
                  <label>Mô tả chuyến đi</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="about"
                    aria-describedby="about"
                    placeholder="Giới thiệu về công ty"
                    //onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button type="button" className="login100-form-btn">
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
    // token: state.auth.token,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addTour: (
      name,
      category_id,
      place,
      price,
      image,
      startdate,
      enddate,
      description
    ) =>
      dispatch(
        addtour(
          name,
          category_id,
          place,
          price,
          image,
          startdate,
          enddate,
          description
        )
      ),
    getCategory:()=>dispatch(getCategory())
  };
}


export default connect(mapStateProps, mapDispatchToProps)(AddTour);
