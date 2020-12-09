import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { bookTour, bookTourStart } from "../store/actions/bookTour";
import { connect } from "react-redux";
import { getOneTour, getOneTourStart } from "../store/actions/tourdetail";
import { withRouter } from "react-router-dom";
class BookTour extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.initState = this.initState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      tour_id: "",
      emailcompany: "",
      nameCompany: "",
      nameTour: "",
      nameCustomer: "",
      emailCustomer: "",
      address: "",
      phone: "",
      required: "",
    };
  }
  componentDidMount() {
    this.initState();
    this.props.getTourStart();
    this.props.getTourDetail(this.props.history.location.pathname.slice(10));
  }
  componentWillReceiveProps(nextProps) {
    this.props.getTourStart();
    if (nextProps.loading === "success") {
      this.initState();
    }
    this.props.bookTourStart();
    if (nextProps.loadingBooktour === "success") {
      this.props.history.push(`/`);
    }
  }
  initState() {
    this.setState({
      tour_id: this.props.tourdetail?._id,
      emailcompany: this.props.tourdetail?.company_id.user_id.email,
      nameCompany: this.props.tourdetail?.company_id.user_id.name,
      nameTour: this.props.tourdetail?.name,
    });
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      [e.target.id]: e.target.value,
    });
  }
  submit() {
    this.props.bookTour(
      this.state.tour_id,
      this.state.emailcompany,
      this.state.nameCompany,
      this.state.nameTour,
      this.state.nameCustomer,
      this.state.emailCustomer,
      this.state.address,
      this.state.phone,
      this.state.required
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
                <span className="login100-form-title p-b-43">Tên Tour</span>
                <div className="form-group">
                  <label>Họ tên</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nameCustomer"
                    aria-describedby="nameCustomer"
                    placeholder="Nhập họ tên"
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    className="form-control"
                    id="emailCustomer"
                    aria-describedby="emailCustomer"
                    placeholder="Email"
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Địa chỉ </label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    aria-describedby="address"
                    placeholder="Nhập địa chỉ"
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
                    onChange={(e) => this.handleChange(e)}
                  />
                </div>
                <div className="form-group">
                  <label>Yêu cầu thêm</label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="required"
                    aria-describedby="required"
                    placeholder="Yêu cầu thêm"
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
                    Đăt tour
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
    tourdetail: state.tourdetail.tourdetail,
    loading: state.tourdetail.loading,
    loadingBooktour: state.bookTour.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    bookTour: (
      tour_id,
      emailcompany,
      nameCompany,
      nameTour,
      nameCustomer,
      emailCustomer,
      address,
      phone,
      required
    ) =>
      dispatch(
        bookTour(
          tour_id,
          emailcompany,
          nameCompany,
          nameTour,
          nameCustomer,
          emailCustomer,
          address,
          phone,
          required
        )
      ),
    bookTourStart: () => dispatch(bookTourStart()),
    getTourStart: () => dispatch(getOneTourStart()),
    getTourDetail: (id) => dispatch(getOneTour(id)),
  };
}
export default withRouter(connect(mapStateProps, mapDispatchToProps)(BookTour));
