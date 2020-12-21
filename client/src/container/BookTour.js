import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { bookTour, bookTourStart } from "../store/actions/bookTour";
import { connect } from "react-redux";
import { getOneTour, getOneTourStart } from "../store/actions/tourdetail";
import { withRouter } from "react-router-dom";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';
class BookTour extends Component {
  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.initState = this.initState.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.validation = this.validation.bind(this)
    this.state = {
      tour_id: "",
      emailcompany: "",
      nameCompany: "",
      nameTour: "",
      nameCustomer: "",
      emailCustomer: "",
      address: "",
      phone: 0,
      required: "",
      validation: false,
      valinameCustomer: "",
      valiemailCustomer: "",
      valiaddress: "",
      valiphone: "",
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
      NotificationManager.success('Đặt tour thành công',"Success",setTimeout(
        () =>  this.props.history.push(`/`),
        3000
      ),()=>{
        this.props.history.push(`/`);
      });
    }
    if (nextProps.loadingBooktour === "error") {
      NotificationManager.error('Đặt tour thất bại',"Error",3000);
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
  validation() {
    this.setState(
      {
        validation: false,
        valinameCustomer: "",
        valiemailCustomer: "",
        valiaddress: "",
        valiphone: "",
      },
      () => {
        if (this.state.nameCustomer === "") {
          this.setState({
            valinameCustomer: "Tên chưa được nhập",
            validation: true,
          });
        }
        if (this.state.emailCustomer === "") {
          this.setState({
            valiemailCustomer: "Email chưa được nhập",
            validation: true,
          });
        }
        if (this.state.address === "") {
          this.setState({
            valiaddress: "Địa chỉ chưa được nhập",
            validation: true,
          });
        }
        if (this.state.phone === 0) {
          this.setState({
            valiphone: "Nhập số điện thoại",
            validation: true,
          });
        }
        if (this.state.phone) {
          var phone = new RegExp(/^[0-9\b]+$/);
          if (!phone.test(this.state.phone)) {
            this.setState({
              valiphone: "Không đúng định dạng",
              validation: true,
            });
          } else if (this.state.phone.length !== 10) {
            this.setState({
              valiphone: "Số điện thoại phải đủ 10 chữ số",
              validation: true,
            });
          }
        }
      })
  }
  submit= async () => {
    await this.validation();
    if (this.state.validation === true) {
      return;
    } else {
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
    );}
  }
  render() {
    return (
      <div>
        <NavBar />
        <NotificationContainer/>
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
                <span className="login100-form-title p-b-43">{this.props.tourdetail?.name}</span>
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
                  <span class="text-danger">{this.state.valinameCustomer}</span>
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
                  <span class="text-danger">{this.state.valiemailCustomer}</span>
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
                  <span class="text-danger">{this.state.valiaddress}</span>
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
                  <span class="text-danger">{this.state.valiphone}</span>
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
                    //onClick={this.createNotification('success')}
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
