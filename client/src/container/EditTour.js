import React, { Component } from 'react';
import NavBar from '../Component/NavBar';

class EditTour extends Component {
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
                style={{ background: "white",paddingBottom:"30px", marginBottom:"10px"}}
              >
                <span className="login100-form-title ">Chỉnh sửa Tour</span>
                <span
                  className="login100-form-title"
                  style={{ fontSize: "24px", marginTop: "20px" }}
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
                <div className="form-group">
                  <label>Giảm giá(%)</label>
                  <input
                    type="text"
                    className="form-control"
                    id="price"
                    aria-describedby="price"
                    placeholder="Nhập % giảm giá"
                    //onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "20px" }}
                >
                  <button type="button" className="login100-form-btn">
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

export default EditTour;