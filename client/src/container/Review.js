import React, { Component } from 'react';
import NavBar from '../Component/NavBar';

class Review extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <div style = {{height:"70px",marginTop:"100px"}}>
                <div class="container" style = {{position:"fixed",zIndex:"100"}}>
              <a
                href="#void"
                title=""
                class="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
                style = {{backgroundColor:"#25ab4b",color:"#ffffff"}}
              >
               Add Review
              </a>
            </div>
                </div>
                
                <section class="magazine">
               
          <div class="container">
            <div class="magazine-cn">
              <div class="row">
                {/* <!-- Magazine Descript --> */}
                <div class="col-lg-6">
                  <div class="magazine-ds">
                    <div
                      id="owl-magazine-ds"
                      class="owl-carousel owl-theme"
                      style={{ display: " block", opacity: "1" }}
                    >
                      {/* <!-- Magazine Descript Item --> */}
                      <div class="owl-wrapper-outer">
                        <div
                          class="owl-wrapper"
                          style={{
                            width: "4200px",
                            left: "0px",
                            display: "block",
                          }}
                        >
                          <div
                            class="owl-item active"
                            style={{ width: "525px" }}
                          >
                            <div class="magazine-item">
                              <div class="magazine-header">
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
                                <hr class="hr" />
                              </div>
                              <div class="magazine-body">
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
                              <div class="magazine-footer clearfix">
                                <div class="post-share magazine-share float-left">
                                  <a href="#void" title="">
                                    <i class="fa fa-facebook"></i>
                                  </a>
                                  <a href="#void" title="">
                                    <i class="fa fa-twitter"></i>
                                  </a>
                                  <a href="#void" title="">
                                    <i class="fa fa-google-plus"></i>
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
                <div class="col-lg-6" style = {{marginTop:"7%",marginRight:"3%",width:"47%"}}>
                        <img src="assets/images/travel.jpg" alt="" />
                  </div>
                </div>
                {/* <!-- End Magazine Thumnail --> */}
            </div>
            <div class="magazine-cn">
              <div class="row">
                {/* <!-- Magazine Descript --> */}
                <div class="col-lg-6">
                  <div class="magazine-ds">
                    <div
                      id="owl-magazine-ds"
                      class="owl-carousel owl-theme"
                      style={{ display: " block", opacity: "1" }}
                    >
                      {/* <!-- Magazine Descript Item --> */}
                      <div class="owl-wrapper-outer">
                        <div
                          class="owl-wrapper"
                          style={{
                            width: "4200px",
                            left: "0px",
                            display: "block",
                          }}
                        >
                          <div
                            class="owl-item active"
                            style={{ width: "525px" }}
                          >
                            <div class="magazine-item">
                              <div class="magazine-header">
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
                                <hr class="hr" />
                              </div>
                              <div class="magazine-body">
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
                              <div class="magazine-footer clearfix">
                                <div class="post-share magazine-share float-left">
                                  <a href="#void" title="">
                                    <i class="fa fa-facebook"></i>
                                  </a>
                                  <a href="#void" title="">
                                    <i class="fa fa-twitter"></i>
                                  </a>
                                  <a href="#void" title="">
                                    <i class="fa fa-google-plus"></i>
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
                <div class="col-lg-6" style = {{marginTop:"7%",marginRight:"3%",width:"47%"}}>
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