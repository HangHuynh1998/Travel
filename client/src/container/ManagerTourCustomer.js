import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import {
  getTourSave,
  togglesaveTourStart,
  toggleSaveTour,
} from "../store/actions/saveTour";

class ManagerTourCustomer extends Component {
  constructor() {
    super();
    this.toggleSaveTour = this.toggleSaveTour.bind(this);
  }
  componentDidMount() {
    this.props.getTourSave(this.props.id);
  }
  componentWillReceiveProps(nextProps) {
    this.props.toggleSaveTourStart();
    if (nextProps.toggleLoading === "success") {
      this.props.getTourSave(this.props.id);
    }
  }
  toggleSaveTour(id) {
    this.props.toggleSaveTour(id);
  }
  render() {
    let tours = null;
    if (this.props.toursave) {
      tours = this.props.toursave?.filter(function (tour) {
        return tour.status === "open";
      });
    }
    return (
      <div>
        <NavBar />
        <section className="sales" style={{ marginTop: "100px" }}>
          {/* <!-- Title --> */}
          <div className="title-wrap">
            <div className="container">
              <div className="travel-title float-left">
                <h2>Những tour đã lưu: </h2>
              </div>
            </div>
          </div>
          {/* <!-- End Title -->
            <!-- Hot Sales Content --> */}
          <div className="container">
            <div className="sales-cn">
              <div className="row">
                {tours?.map((item, i) => (
                  <div className="col-xs-6 col-md-3">
                    <div className="sales-item" style={{ height: "650px" }}>
                      <NavLink
                        to={`/tourDetail/${item._id}`}
                        key={i}
                        style={{ marginBottom: "5px" }}
                      >
                        <figure className="home-sales-img">
                          <a href="#void" title="">
                            <img src={item.image} alt="" />
                          </a>
                          {item.sale && (
                            <figcaption>
                              Save <span>{item.sale}</span>%
                            </figcaption>
                          )}
                        </figure>
                      </NavLink>
                      <div className="home-sales-text">
                        <div
                          className="home-sales-name-places"
                          style={{ height: "120px" }}
                        >
                          <div className="home-sales-name">
                            <a href="#void" title="">
                              {item.name}
                            </a>
                          </div>
                          <div className="home-sales-places">
                            <a href="#void" title="">
                              Công ty: {item.company_id.name}
                            </a>
                          </div>
                          <div className="home-sales-places">
                            <a href="#void" title="">
                              {item.category_id.name}
                            </a>
                          </div>
                        </div>
                        <hr className="hr" />
                        <div
                          className="price-box"
                          style={{ marginTop: "15px" }}
                        >
                          <span
                            className="price special-price"
                            style={{ fontSize: "15px" }}
                          >
                            <img
                              src="assets/images/dola.png"
                              style={{ height: "40px" }}
                            />
                            {item.price}
                            <small>/tour(VND)</small>
                          </span>
                        </div>

                        <div
                          style={{
                            display: "flex",
                            marginTop: "10px",
                            justifyContent: "space-around",
                          }}
                        >
                          <button
                            type="button"
                            className="login100-form-btn"
                            style={{ width: "120px" }}
                            onClick={() => this.toggleSaveTour(item._id)}
                          >
                            {" "}
                            Hủy lưu Tour
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
                s
              </div>
            </div>
          </div>
          {/* <!-- End Hot Sales Content --> */}
        </section>
        <section
          className="sales"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {/* <!-- Title --> */}
          <div className="title-wrap">
            <div className="container">
              <div className="travel-title float-left">
                <h2>Những tour đã đặt: </h2>
              </div>
            </div>
          </div>
          {/* <!-- End Title -->
            <!-- Hot Sales Content --> */}
          <div className="container">
            <div className="sales-cn">
              <div className="row">
                {/* <!-- HostSales Item --> */}
                <NavLink className="col-xs-6 col-md-3" to="/tourDetail/1">
                  <div className="sales-item">
                    <figure className="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/traveldalat2.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>
                    <div className="home-sales-text">
                      <div className="home-sales-name-places">
                        <div className="home-sales-name">
                          <a href="#void" title="">
                            Copley Square Hotel
                          </a>
                        </div>
                        <div className="home-sales-places">
                          <a href="#void" title="">
                            Boston
                          </a>
                          <a href="#void" title="">
                            Massachusetts
                          </a>
                        </div>
                      </div>
                      <hr className="hr" />
                      <div className="price-box">
                        <span className="price old-price">
                          From <del>$269</del>
                        </span>
                        <span className="price special-price">
                          $175<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          {/* <!-- End Hot Sales Content --> */}
        </section>
        <section
          className="sales"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          {/* <!-- Title --> */}
          <div className="title-wrap">
            <div className="container">
              <div className="travel-title float-left">
                <h2>Những công ty bạn đã theo dõi: </h2>
              </div>
            </div>
          </div>
          {/* <!-- End Title -->
            <!-- Hot Sales Content --> */}
          <div className="container">
            <div className="sales-cn">
              <div className="row">
                {/* <!-- HostSales Item --> */}
                <NavLink className="col-xs-6 col-md-3" to="/tourDetail/1">
                  <div className="sales-item">
                    <figure className="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/traveldalat2.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>
                    <div className="home-sales-text">
                      <div className="home-sales-name-places">
                        <div className="home-sales-name">
                          <a href="#void" title="">
                            Copley Square Hotel
                          </a>
                        </div>
                        <div className="home-sales-places">
                          <a href="#void" title="">
                            Boston
                          </a>
                          <a href="#void" title="">
                            Massachusetts
                          </a>
                        </div>
                      </div>
                      <hr className="hr" />
                      <div className="price-box">
                        <span className="price old-price">
                          From <del>$269</del>
                        </span>
                        <span className="price special-price">
                          $175<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          {/* <!-- End Hot Sales Content --> */}
        </section>
      </div>
    );
  }
}
function mapStateProps(state) {
  return {
    toursave: state.saveTour.data,
    loading: state.saveTour.loading,
    toggleLoading: state.saveTour.loadingToggle,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getTourSave: (id) => dispatch(getTourSave(id)),
    toggleSaveTourStart: () => dispatch(togglesaveTourStart()),
    toggleSaveTour: (id) => dispatch(toggleSaveTour(id)),
  };
}
export default withRouter(
  connect(mapStateProps, mapDispatchToProps)(ManagerTourCustomer)
);
