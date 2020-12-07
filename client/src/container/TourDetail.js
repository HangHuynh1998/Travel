import React, { Component } from 'react';
import NavBar from '../Component/NavBar';
import { NavLink, withRouter } from 'react-router-dom';
import { getOneTour } from '../store/actions/tourdetail';
import { connect } from 'react-redux';

class TourDetail extends Component {
    componentDidMount(){
      this.props.getTourDetail(this.props.history.location.pathname.slice(12));
    }
    render() {
      console.log("hshahs",this.props.tourdetail,this.props.history);
        return (
            <div>
                <NavBar />
                <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100" style = {{minHeight:"800px"}}>
            <div
                className="login100-more"
                style={{ backgroundImage: `url(${this.props.tourdetail?.image})` }}
              ></div>
              <form className="login100-form validate-form">
                <span className="login100-form-title p-b-43">
                  Chi tiết chuyến đi
                </span>
                <div className="form-group">
                  <span>Tên chuyến đi: </span>
                  <span>{this.props.tourdetail?.name}</span>
                </div>
                <div className="form-group">
                  <span>Loại du lịch: </span>
                  <span>{this.props.tourdetail?.category_id.name}</span>
                </div>
                <div className="form-group">
                <span>Địa điểm đến: </span>
                  <span>{this.props.tourdetail?.place}</span>
                </div>
                <div className="form-group">
                <span>Ngày đi: </span>
                  <span>{this.props.tourdetail?.startDate.slice(0,10)}</span>
                </div>
                <div className="form-group">
                <span>Ngày về: </span>
                  <span>{this.props.tourdetail?.endDate.slice(0,10)}</span>
                </div>
                <div className="form-group">
                <span>Giá tiền (VNĐ): </span>
                  <span>{this.props.tourdetail?.price}</span>
                </div>
                {this.props.tourdetail?.sale &&<div className="form-group">
                <span>Giảm giá: </span>
                  <span>{this.props.tourdetail?.sale}</span>
                </div>}
                <div className="form-group">
                <span>Chi tiết chuyến đi: </span>
                </div>
                <div className="form-group">
                <span>Mô tả chuyến đi : {this.props.tourdetail?.description}</span>
                </div>
                <div className="form-group">
                <span>Muốn biết thêm thông tin chi tiết hãy liên lạc với chúng tôi</span>
                </div>
                <div className="form-group">
                <span>{this.props.tourdetail?.contactInformation}</span>
                </div>
                {(this.props.role === "customer")
                 && <div
                  className="container-login100-form-btn"
                  style={{ display: "flex",marginTop:"10px" }}
                >
                  <button
                    className="login100-form-btn"
                    style={{ width: "100px", marginRight: "20px" }}
                    type="button"
                  >
                    <NavLink
                      to="/"
                      style={{ color: "white" }}
                    >
                      Lưu
                    </NavLink>
                  </button>
                  <button
                    className="login100-form-btn"
                    style={{ width: "100px", marginRight: "20px"}}
                    type="button"
                  >
                    {" "}
                    <NavLink
                      to="/booktour/1"
                      style={{ color: "white" }}
                    >
                      Đặt tour
                    </NavLink>
                    </button>
                    <button
                    className="login100-form-btn"
                    style={{ width: "120px" }}
                    type="button"
                  >
                    {" "}
                    <NavLink
                      to={`/companyDetail/${this.props.tourdetail?.company_id._id}`}
                      style={{ color: "white" }}
                    >
                      Xem Công ty
                    </NavLink>
                  </button>
                </div>}
                {(this.props.role === null ) && 
                <>
                 <div>Đăng nhập để đặt tour</div>
                <div
                  className="container-login100-form-btn"
                  style={{display: "flex",marginTop:"10px" }}
                >
                  <button
                    className="login100-form-btn"
                    style={{ width: "150px", marginRight: "20px" }}
                    type="button"
                  >
                    <NavLink
                      to="/login"
                      style={{ color: "white" }}
                    >
                      Đăng nhập
                    </NavLink>
                  </button>
                  <button
                    className="login100-form-btn"
                    style={{ width: "150px", marginRight: "20px" }}
                    type="button"
                  >
                    <NavLink
                       to={`/companyDetail/${this.props.tourdetail?.company_id._id}`}
                      style={{ color: "white" }}
                    >
                      Xem Công ty
                    </NavLink>
                  </button>
                  </div>
                  </>
                  }
                  {(this.props.role === "company" ) && <div
                  className="container-login100-form-btn"
                  style={{ display: "flex",marginTop:"10px" }}
                >
                  <button
                    className="login100-form-btn"
                    style={{ width: "150px", marginRight: "20px" }}
                    type="button"
                  >
                    <NavLink
                      to={`/managerCompany/${this.props.tourdetail?.company_id._id}`}
                      style={{ color: "white" }}
                    >
                      Quản lý tour
                    </NavLink>
                  </button>
                  </div>}
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
    tourdetail:state.tourdetail.tourdetail,
    loading:state.tourdetail.loading
  };
}
function mapDispatchToProps(dispatch) {
  return {
   getTourDetail:(id)=>dispatch(getOneTour(id))
  };
}
export default  withRouter(connect(mapStateProps, mapDispatchToProps)(TourDetail));