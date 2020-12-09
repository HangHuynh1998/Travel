import React, { Component } from 'react';
import NavBar from "../Component/NavBar";
import { withRouter, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { getTourOfCompany } from '../store/actions/tourofcompany';
class TourOfCompany extends Component {

    componentDidMount() {
        this.props.getTourOfCompany(this.props.history.location.pathname.slice(15));
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
                <section className="sales" style={{ marginTop: "100px" }}>
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
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
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
    connect(mapStateProps, mapDispatchToProps)(TourOfCompany)
  );
  