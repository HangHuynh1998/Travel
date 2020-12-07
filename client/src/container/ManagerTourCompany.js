import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { NavLink, withRouter } from "react-router-dom";
import { getTourOfCompany } from "../store/actions/tourofcompany";
import { connect } from "react-redux";

class ManagerTourCompany extends Component {
  componentDidMount() {
    this.props.getTourOfCompany(this.props.id);
  }
  render() {
    let tours = null;
    if (this.props.tourOfCompany) {
      tours = this.props.tourOfCompany?.filter(function (tour) {
        return tour.status === "open";
      });
    }
    return (
      <div>
        <NavBar />
        <div style={{ height: "70px", marginTop: "100px" }}>
          <div
            className="container"
            style={{ position: "fixed", zIndex: "100" }}
          >
            <NavLink
              className="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
              style={{ backgroundColor: "#25ab4b", color: "#ffffff" }}
              to="/addTour"
            >
              Thêm Tour
            </NavLink>
          </div>
        </div>
        <section className="sales" style={{ marginTop: "0px" }}>
          {/* <!-- Title --> */}
          <div className="title-wrap">
            <div className="container">
              <div className="travel-title float-left">
                <h2>Những tour của công ty: </h2>
              </div>
            </div>
          </div>
          {/* <!-- End Title -->
            <!-- Hot Sales Content --> */}
          <div className="container">
            <div className="sales-cn">
              <div className="row">
                {/* <!-- HostSales Item --> */}
                {tours?.map((item, i) => (
                  <NavLink
                    className="col-xs-6 col-md-3"
                    to={`/tourDetail/${item._id}`}
                    key={i}
                    style={{ marginBottom: "5px" }}
                  >
                    <div className="sales-item" style = {{height:"650px"}}>
                      <figure className="home-sales-img">
                        <a href="#void" title="">
                          <img src={item.image} alt="" />
                        </a>
                        {item.save && (
                          <figcaption>
                            Save <span>{item.save}</span>%
                          </figcaption>
                        )}
                      </figure>
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
                          {/* <span className="price old-price">
                          From <del>$269</del>
                        </span> */}
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
                          <NavLink to="/edittour/1">
                            <button
                              type="button"
                              className="login100-form-btn"
                              style={{ width: "100px" }}
                            >
                              {" "}
                              Sữa chữa
                            </button>
                          </NavLink>
                          <button
                            type="button"
                            className="login100-form-btn"
                            style={{ width: "100px", backgroundColor: "red" }}
                          >
                            {" "}
                            Xóa tour
                          </button>
                        </div>
                      </div>
                    </div>
                  </NavLink>
                ))}
                {/* <!-- End HostSales Item --> */}
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
                <h2>Những tour đã được đặt: </h2>
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
    loading: state.tourOfCompany.loading,
    tourOfCompany: state.tourOfCompany.tourOfCompany,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getTourOfCompany: (id) => dispatch(getTourOfCompany(id)),
  };
}
export default withRouter(
  connect(mapStateProps, mapDispatchToProps)(ManagerTourCompany)
);
