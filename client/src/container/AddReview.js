import React, { Component } from 'react';
import NavBar from '../Component/NavBar';

class AddReview extends Component {
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
                     Thêm đánh giá
                    </span>
                    <div className="form-group">
                  <label>Tên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    aria-describedby="name"
                    placeholder="Nhập tên"
                    //onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                      <label  style = {{marginBottom:"5px"}}>
                        Chọn hình ảnh
                      </label>
                      <input
                        type="file"
                        className="form-control-file"
                        id="exampleFormControlFile1"
                      />
                    </div>
                    <div className="form-group">
                      <label >Đánh giá</label>
                      <textarea
                        type="text"
                        className="form-control"
                        id="required"
                        aria-describedby="required"
                        placeholder="Thêm đánh giá"
                        //onChange={(e) => this.handleChange(e)}
                      />
                    </div>
                <div
                  className="container-login100-form-btn"
                  style={{ marginTop: "40px" }}
                >
                  <button type="button" className="login100-form-btn">
                    Thêm đánh giá
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

export default AddReview;