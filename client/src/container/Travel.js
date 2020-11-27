import React, { Component } from 'react';
import NavBar from '../Component/NavBar';
import { NavLink } from 'react-router-dom';

class Travel extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <section className="sales" style = {{marginTop:"100px",marginBottom:"30px"}}>
          {/* 
            <!-- Hot Sales Content --> */}
          <div className="container">
            <div className="sales-cn">
              <div className="row">
                {/* <!-- HostSales Item --> */}
                <NavLink className="col-xs-6 col-md-3" to = "/tourDetail/1">
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
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
                <NavLink className="col-xs-6 col-md-3"  to = "/tourDetail/1" >
                  <div className="sales-item">
                    <figure className="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/travelsapa.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>

                    <div className="home-sales-text">
                      <div className="home-sales-name-places">
                        <div className="home-sales-name">
                          <a href="#void" title="">
                            Grand Hotel Bagni Nuovi
                          </a>
                        </div>
                        <div className="home-sales-places">
                          <a href="#void" title="">
                            Boston
                          </a>
                          ,
                          <a href="#void" title="">
                            Italy
                          </a>
                        </div>
                      </div>
                      <hr className="hr" />
                      <div className="price-box">
                        <span className="price old-price">
                          From <del>$632</del>
                        </span>
                        <span className="price special-price">
                          $345<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </NavLink>
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
                <NavLink className="col-md-6"  to = "/tourDetail/1" >
                  <div className="sales-item ">
                    <figure className="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/traveldalat.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>
                    <div className="home-sales-text">
                      <div className="home-sales-name-places">
                        <div className="home-sales-name">
                          <a href="#void" title="">
                            The Standard, East Village
                          </a>
                        </div>
                        <div className="home-sales-places">
                          <a href="#void" title="">
                            New York
                          </a>
                          ,
                          <a href="#void" title="">
                            New York
                          </a>
                        </div>
                      </div>
                      <hr className="hr" />
                      <div className="price-box">
                        <span className="price old-price">
                          From <del>$582</del>
                        </span>
                        <span className="price special-price">
                          $258<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </NavLink>
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
                <NavLink className="col-md-6"  to = "/tourDetail/1">
                  <div className="sales-item">
                    <figure className="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/travelSonDoong.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>
                    <div className="home-sales-text">
                      <div className="home-sales-name-places">
                        <div className="home-sales-name">
                          <a href="#void" title="">
                            Ganges River Cruise
                          </a>
                        </div>
                        <div className="home-sales-places">
                          <a href="#void" title="">
                            London
                          </a>
                          ,
                          <a href="#void" title="">
                            United Kingdom
                          </a>
                        </div>
                      </div>
                      <hr className="hr" />
                      <div className="price-box">
                        <span className="price old-price">
                          From <del>$457</del>
                        </span>
                        <span className="price special-price">
                          $258<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </NavLink>
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
                <NavLink className="col-xs-6 col-md-3"  to = "/tourDetail/1">
                  <div className="sales-item">
                    <figure className="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/travelHue.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>
                    <div className="home-sales-text">
                      <div className="home-sales-name-places">
                        <div className="home-sales-name">
                          <a href="#void" title="">
                            Town Hall Hotel
                          </a>
                        </div>
                        <div className="home-sales-places">
                          <a href="#void" title="">
                            Boston
                          </a>
                          ,
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
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
                <NavLink className="col-xs-6 col-md-3"  to = "/tourDetail/1">
                  <div className="sales-item">
                    <figure className="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/TravelDanang.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>
                    <div className="home-sales-text">
                      <div className="home-sales-name-places">
                        <div className="home-sales-name">
                          <a href="#void" title="">
                            A Hidden NYC Mystery Hotel
                          </a>
                        </div>
                        <div className="home-sales-places">
                          <a href="#void" title="">
                            Boston
                          </a>
                          ,
                          <a href="#void" title="">
                            Italy
                          </a>
                        </div>
                      </div>
                      <hr className="hr" />
                      <div className="price-box">
                        <span className="price old-price">
                          From <del>$354</del>
                        </span>
                        <span className="price special-price">
                          $255<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </NavLink>
                {/* <!-- End HostSales Item --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Hot Sales Content --> */}
        </section>
            </div>
        );
    }
}

export default Travel;