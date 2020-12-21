import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { NavLink, withRouter } from "react-router-dom";
import { getOneTour } from "../store/actions/tourdetail";
import { connect } from "react-redux";
import { toggleSaveTour, togglesaveTourStart } from "../store/actions/saveTour";

class TourDetail extends Component {
  constructor() {
    super();
    this.toggleSaveTour = this.toggleSaveTour.bind(this);
  }
  componentDidMount() {
    this.props.getTourDetail(this.props.history.location.pathname.slice(12));
  }
  toggleSaveTour() {
    if (this.props.role !== "customer") {
      this.props.history.push("/login");
    } else {
      this.props.toggleSaveTour(this.props.history.location.pathname.slice(12));
    }
  }
  componentWillReceiveProps(nextProps) {
    this.props.toggleSaveTourStart();
    if (nextProps.toggleLoading === "success") {
      this.props.history.push(`/managerCustomer/${this.props.user_id}`);
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <div className="limiter">
          <div className="container-login100">
            <div
              className="wrap-login100"
              style={{ minHeight: "800px", backgroundImage: "none" }}
            >
              <span
                className="login100-form-title p-b-43"
                style={{ marginTop: "100px" }}
              >
                Chi tiết chuyến đi
              </span>
              <div
                className="image-tour"
                style={{ background: "none !important" }}
              >
                <img
                  src={this.props.tourdetail?.image}
                  style={{ height: "54rem" }}
                ></img>
              </div>
              <form
                className="login100-form validate-form"
                style={{
                  paddingTop: "20px",
                  paddingBottom: "0",
                  backgroundColor: "white",
                  minHeight: "66vh",
                }}
              >
                <div className="form-group">
                  <span>Tên chuyến đi: </span>
                  <i class="fa fa-signature"></i>
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
                  <span>{this.props.tourdetail?.startDate.slice(0, 10)}</span>
                </div>
                <div className="form-group">
                  <span>Ngày về: </span>
                  <span>{this.props.tourdetail?.endDate.slice(0, 10)}</span>
                </div>
                <div className="form-group">
                  <span>Giá tiền (VNĐ): </span>
                  <span>{this.props.tourdetail?.price}</span>
                </div>
                {this.props.tourdetail?.sale && (
                  <div className="form-group">
                    <span>Giảm giá(%): </span>
                    <span>{this.props.tourdetail?.sale}</span>
                  </div>
                )}
                <div className="form-group">
                  <span>
                    Muốn biết thêm thông tin chi tiết hãy liên lạc với chúng
                    tôi:
                  </span>
                </div>
                <div className="form-group">
                  <span>{this.props.tourdetail?.contactInformation}</span>
                </div>
                {this.props.role !== "company" && (
                  <div
                    className="container-login100-form-btn"
                    style={{ display: "flex", marginTop: "10px" }}
                  >
                    <button
                      className="login100-form-btn"
                      style={{ width: "220px", marginRight: "20px" }}
                      type="button"
                      onClick={this.toggleSaveTour}
                    >
                      Chuyển đổi lưu/ bỏ lưu
                    </button>

                    <NavLink
                      to={`/booktour/${this.props.tourdetail?._id}`}
                      style={{ color: "white" }}
                    >
                      {" "}
                      <button
                        className="login100-form-btn"
                        style={{ width: "100px", marginRight: "20px" }}
                        type="button"
                      >
                        {" "}
                        Đặt tour
                      </button>
                    </NavLink>

                    <NavLink
                      to={`/companyDetail/${this.props.tourdetail?.company_id._id}`}
                      style={{ color: "white" }}
                    >
                      <button
                        className="login100-form-btn"
                        style={{ width: "120px" }}
                        type="button"
                      >
                        {" "}
                        Xem Công ty
                      </button>
                    </NavLink>
                  </div>
                )}

                {this.props.role === "company" && (
                  <div
                    className="container-login100-form-btn"
                    style={{ display: "flex", marginTop: "10px" }}
                  >
                    {" "}
                    <NavLink
                      to={`/managerCompany/${this.props.tourdetail?.company_id._id}`}
                      style={{ color: "white" }}
                    >
                      <button
                        className="login100-form-btn"
                        style={{ width: "150px", marginRight: "20px" }}
                        type="button"
                      >
                        Quản lý tour
                      </button>
                    </NavLink>
                  </div>
                )}
              </form>
              <div
                className="form-group"
                style={{ padding: "40px 50px", display: "flow" }}
              >
                <span style={{ color: "#4db74f", fontSize: "20px" }}>
                  MÔ TẢ CHUYẾN ĐI:{" "}
                </span>{" "}
                <br />
                <div style={{ padding: "0 20px" }}>
                  <span>{this.props.tourdetail?.description}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateProps(state) {
  return {
    tourdetail: state.tourdetail.tourdetail,
    loading: state.tourdetail.loading,
    toggleLoading: state.saveTour.loadingToggle,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getTourDetail: (id) => dispatch(getOneTour(id)),
    toggleSaveTourStart: () => dispatch(togglesaveTourStart()),
    toggleSaveTour: (id) => dispatch(toggleSaveTour(id)),
  };
}
export default withRouter(
  connect(mapStateProps, mapDispatchToProps)(TourDetail)
);
