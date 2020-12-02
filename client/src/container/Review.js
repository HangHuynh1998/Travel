import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { NavLink } from "react-router-dom";

class Review extends Component {
  render() {
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
              to="/addReview"
            >
              Thêm đánh giá
            </NavLink>
          </div>
        </div>

        <section className="magazine">
          <div className="container">
            <div className="magazine-cn">
              <div className="row">
                {/* <!-- Magazine Descript --> */}
                <div className="col-lg-6">
                  <div className="magazine-ds">
                    <div
                      id="owl-magazine-ds"
                      className="owl-carousel owl-theme"
                      style={{ display: " block", opacity: "1" }}
                    >
                      {/* <!-- Magazine Descript Item --> */}
                      <div className="owl-wrapper-outer">
                        <div
                          className="owl-wrapper"
                          style={{
                            width: "4200px",
                            left: "0px",
                            display: "block",
                          }}
                        >
                          <div
                            className="owl-item active"
                            style={{ width: "525px" }}
                          >
                            <div className="magazine-item">
                              <div className="magazine-header">
                                <h2>
                                  Five festivals to look forward to this year
                                </h2>
                                <ul>
                                  <li>
                                    by{" "}
                                    <a href="#void" title="">
                                      Admin
                                    </a>
                                  </li>
                                  <li>03.5.2014</li>
                                </ul>
                                <hr className="hr" />
                              </div>
                              <div className="magazine-body">
                                <p>
                                  Suspendisse ullamcorper lacus et commodo
                                  laoreet. Sed sodales aliquet felis, quis
                                  volutpat massa imperdiet in. Praesent rutrum
                                  malesuada risus, ullamcorper pretium tortor.
                                  Mauris lacinia nisl id massa consectetur, eu
                                  tempus mauris lacinia. Fusce commodo porttitor
                                  sapien quis condimentum.
                                </p>
                                <p>
                                  Curabitur sollicitudin magna sed sem blandit
                                  sodales. Integer in eros sit amet tellus
                                  vulputate laoreet ut in purus. Nullam quis
                                  lacus nisl. <br />
                                  Sed venenatis commodo leo, ac pulvinar ipsum
                                  mattis vitae. Suspendisse eu libero odio.
                                </p>

                                <p>
                                  Curabitur sollicitudin magna sed sem blandit
                                  sodales. Integer in eros sit amet tellus
                                  vulputate laoreet ut in purus. Nullam quis
                                  lacus nisl. <br />
                                  Sed venenatis commodo leo, ac pulvinar ipsum
                                  mattis vitae.
                                </p>
                              </div>
                              <div className="magazine-footer clearfix">
                                <div className="post-share magazine-share float-left">
                                  <a href="#void" title="">
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                  <a href="#void" title="">
                                    <i className="fa fa-google-plus"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Magazine Descript -->
                        <!-- Magazine Thumnail --> */}
                <div
                  className="col-lg-6"
                  style={{ marginTop: "7%", marginRight: "3%", width: "47%" }}
                >
                  <img src="assets/images/travel.jpg" alt="" />
                </div>
              </div>
              {/* <!-- End Magazine Thumnail --> */}
            </div>
            <div className="magazine-cn">
              <div className="row">
                {/* <!-- Magazine Descript --> */}
                <div className="col-lg-6">
                  <div className="magazine-ds">
                    <div
                      id="owl-magazine-ds"
                      className="owl-carousel owl-theme"
                      style={{ display: " block", opacity: "1" }}
                    >
                      {/* <!-- Magazine Descript Item --> */}
                      <div className="owl-wrapper-outer">
                        <div
                          className="owl-wrapper"
                          style={{
                            width: "4200px",
                            left: "0px",
                            display: "block",
                          }}
                        >
                          <div
                            className="owl-item active"
                            style={{ width: "525px" }}
                          >
                            <div className="magazine-item">
                              <div className="magazine-header">
                                <h2>
                                  Five festivals to look forward to this year
                                </h2>
                                <ul>
                                  <li>
                                    by{" "}
                                    <a href="#void" title="">
                                      Admin
                                    </a>
                                  </li>
                                  <li>03.5.2014</li>
                                </ul>
                                <hr className="hr" />
                              </div>
                              <div className="magazine-body">
                                <p>
                                  Suspendisse ullamcorper lacus et commodo
                                  laoreet. Sed sodales aliquet felis, quis
                                  volutpat massa imperdiet in. Praesent rutrum
                                  malesuada risus, ullamcorper pretium tortor.
                                  Mauris lacinia nisl id massa consectetur, eu
                                  tempus mauris lacinia. Fusce commodo porttitor
                                  sapien quis condimentum.
                                </p>
                                <p>
                                  Curabitur sollicitudin magna sed sem blandit
                                  sodales. Integer in eros sit amet tellus
                                  vulputate laoreet ut in purus. Nullam quis
                                  lacus nisl. <br />
                                  Sed venenatis commodo leo, ac pulvinar ipsum
                                  mattis vitae. Suspendisse eu libero odio.
                                </p>

                                <p>
                                  Curabitur sollicitudin magna sed sem blandit
                                  sodales. Integer in eros sit amet tellus
                                  vulputate laoreet ut in purus. Nullam quis
                                  lacus nisl. <br />
                                  Sed venenatis commodo leo, ac pulvinar ipsum
                                  mattis vitae.
                                </p>
                              </div>
                              <div className="magazine-footer clearfix">
                                <div className="post-share magazine-share float-left">
                                  <a href="#void" title="">
                                    <i className="fa fa-facebook"></i>
                                  </a>
                                  <a href="#void" title="">
                                    <i className="fa fa-google-plus"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End Magazine Descript -->
                        <!-- Magazine Thumnail --> */}
                <div
                  className="col-lg-6"
                  style={{ marginTop: "7%", marginRight: "3%", width: "47%" }}
                >
                  <img src="assets/images/travel.jpg" alt="" />
                </div>
              </div>
              {/* <!-- End Magazine Thumnail --> */}
            </div>
          </div>
          {/* <!-- End Magazine Content --> */}
        </section>
      </div>
    );
  }
}

export default Review;
