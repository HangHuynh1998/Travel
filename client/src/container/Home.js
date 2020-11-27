import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import SliderSlick from "react-slick";
import { NavLink } from "react-router-dom";
class Home extends Component {
  constructor() {
    super();
    this.state = {
      textIntroduction: [
        "Where would you like to go?",
        "Sapa?",
        "Hạ Long?",
        "Đà Lạt?",
        "Huế?",
        "Đà Nẵng?",
      ],
      imageIntroduction: [
        "assets/images/travel5.jpg",
        "assets/images/travel.jpg",
        "assets/images/travelhalong.jpg",
        "assets/images/traveldalat2.jpg",
        "assets/images/travelHue.jpg",
        "assets/images/TravelDanang.jpg",
      ],
      sliderSetting: {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 6000,
        pauseOnHover: false,
        arrows: false,
      },
      sliderSettings: {
        dots: false,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplaySpeed: 2500,
        autoplay: false,
        arrows: false,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 4,
              slidesToScroll: 4,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 414,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
      isShow: true,
      index: 0,
      showdate: false,
    };
  }
  beforeChange = (current, next) => {
    this.setState({
      index: next,
      isShow: false,
    });
  };

  afterChange = (cur) => {
    this.setState({
      isShow: true,
    });
  };
  render() {
    return (
      <div>
        <NavBar />
        <section className="banner" style={{ marginTop: "72px" }}>
          <div className="bg-parallax">
            <div className="">
              <SliderSlick
                {...this.state.sliderSetting}
                autoplay={true}
                className="slider-images"
                beforeChange={this.beforeChange}
                afterChange={this.afterChange}
              >
                {this.state.imageIntroduction.map((i, index) => {
                  return (
                    <div key={index}>
                      {/* <img alt="ss" src={_url(i)} /> */}
                      <div
                        style={{
                          backgroundImage: `url("${i}")`,
                          width: "100%",
                          height: 700,
                          backgroundSize: "cover",
                        }}
                      ></div>
                    </div>
                  );
                })}
              </SliderSlick>
            </div>
          </div>

          <div className="container" style={{ marginTop: "inherit" }}>
            <div className="banner-cn">
              <div className="tab-content">
                {/* 
                        <!-- Search Hotel --> */}
                <div className="form-cn form-hotel tab-pane active in">
                  <div className="content-text">
                    {this.state.index === 0 ? (
                      <h2>Where would you like to go?</h2>
                    ) : (
                      ""
                    )}

                    {this.state.index !== 0 && this.state.isShow ? (
                      <h2 className="text-animation">
                        {" "}
                        {this.state.textIntroduction[this.state.index]}
                      </h2>
                    ) : (
                      <h2> </h2>
                    )}
                  </div>

                  <div className="form-search clearfix">
                    {/* <div className="form-field field-destination">
                      <label>
                        <span>Điểm đến:</span> 
                      </label>
                      <input type="text" id="destination" className="field-input" />
                    </div> */}
                    <div
                      className="form-field field-date"
                      style={{ width: "40%" }}
                    >
                      <input
                        type="text"
                        className="field-input hasDatepicker"
                        placeholder="Điểm đến: Huế, Đà Nẵng, Hà Nội, Đà Lạt,
                        Sapa,..."
                        id="number"
                      />
                    </div>
                    <div className="form-field field-date">
                      <input
                        type="text"
                        className="field-input hasDatepicker"
                        placeholder="Số ngày du lịch"
                        id="number"
                      />
                    </div>
                    <div
                      className="form-field field-date"
                      style={{ width: "16%" }}
                    >
                      <input
                        type="date"
                        className="field-input hasDatepicker"
                        placeholder="Ngày khởi hành"
                        id="date-start"
                      />
                    </div>
                    <div className="form-field field-date">
                      <input
                        type="text"
                        className="field-input hasDatepicker"
                        placeholder="Số lượng người"
                        id="peoplenumber"
                      />
                    </div>
                    <div className="form-submit">
                      <button
                        type="submit"
                        className="awe-btn awe-btn-lager awe-search"
                      >
                        Search
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <!-- End Tabs Content --> */}
            </div>
            {/* <!-- End Banner Content --> */}
          </div>
        </section>
        {/* <!-- Sales --> */}
        <section className="sales">
          {/* <!-- Title --> */}
          <div className="title-wrap">
            <div className="container">
              <div className="travel-title float-left">
                <h2>
                  Những tour được giảm giá:{" "}
                  <span>Đà Nẵng, Ninh Bình, Phú Quốc, ...</span>
                </h2>
              </div>
              <NavLink
                to="/travel?sale"
                className="awe-btn awe-btn-5 awe-btn-lager arrow-right text-uppercase float-right"
              >
                Xem tất cả
              </NavLink>
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
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
                <NavLink className="col-xs-6 col-md-3" to="/tourDetail/1">
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
                <NavLink className="col-md-6" to="/tourDetail/1">
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
                <NavLink className="col-md-6" to="/tourDetail/1">
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
                <NavLink className="col-xs-6 col-md-3" to="/tourDetail/1">
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
                <NavLink className="col-xs-6 col-md-3" to="/tourDetail/1">
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
        {/* <!-- Travel Destinations --> */}
        <section className="destinations">
          {/* <!-- Title --> */}
          <div className="title-wrap">
            <div className="container">
              <div className="travel-title float-left">
                <h2>Những tour được yêu thích</h2>
              </div>
              <a
                href="#void"
                title=""
                className="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
              >
                Xem tất cả
              </a>
            </div>
          </div>
          {/* <!-- End Title -->

            <!-- Destinations Content --> */}
          <div className="destinations-cn">
            {/* <!-- Background --> */}
            <div
              className="bg-parallax bg-2"
              style={{ backgroundPosition: "50% 62px" }}
            ></div>
            {/* <!-- End Background --> */}

            <div className="container">
              <div className="row">
                {/* <!-- Destinations Filter --> */}
                <div className="col-md-4 col-lg-3">
                  <div className="intro-filter">
                    <ul className="filter">
                      <li className="active">
                        <a data-toggle="tab" href="#void">
                          <i className="fa fa-map-marker"></i> Những gợi ý cho
                          bạn
                        </a>
                      </li>
                      <li>
                        <NavLink to="/travel?sightseeing">
                          <i className="fa fa-map-marker"></i> Du lịch tham quan
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/travel?cultural">
                          <i className="fa fa-map-marker"></i> Du lịch văn hóa
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/travel?cuisine">
                          <i className="fa fa-map-marker"></i> Du lịch ẩm thực
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/travel?green">
                          <i className="fa fa-map-marker"></i> Du lịch xanh
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/travel?mice">
                          <i className="fa fa-map-marker"></i> Du lịch MICE
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/travel?building">
                          <i className="fa fa-map-marker"></i> Team building
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End Destinations Filter -->
                        <!-- Destinations Grid --> */}
                <div className="col-md-8 col-lg-9">
                  <div className="tab-content destinations-grid">
                    {/* <!-- Tab One --> */}
                    <div
                      id="destinations-1"
                      className="clearfix tab-pane fade active in "
                    >
                      {/* <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item ">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                London - UK
                              </a>
                            </div>
                            <span className="properties-nb">
                              <ins>1289</ins> properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travel.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                Paris - France
                              </a>
                            </div>
                            <span className="properties-nb">
                              239 properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travelsapa.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                Rome - Italy
                              </a>
                            </div>
                            <span className="properties-nb">
                              478 properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/travelSonDoong.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                Barcelona - Spain
                              </a>
                            </div>
                            <span className="properties-nb">
                              452 properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/TravelDanang.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                Madrid - Spain
                              </a>
                            </div>
                            <span className="properties-nb">
                              794 properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/traveldalat2.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                Vienna - Austria
                              </a>
                            </div>
                            <span className="properties-nb">
                              1289 properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travel5.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item --> */}
                    </div>
                    {/* <!-- End Tab One -->
                                <!-- Tab Two --> */}
                    <div id="destinations-2" className="clearfix tab-pane fade">
                      {/* <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item ">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                London - UK
                              </a>
                            </div>
                            <span className="properties-nb">
                              <ins>1289</ins> properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/travelhalong.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                Paris - France
                              </a>
                            </div>
                            <span className="properties-nb">
                              239 properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travelHue.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                Rome - Italy
                              </a>
                            </div>
                            <span className="properties-nb">
                              478 properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travel.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                Barcelona - Spain
                              </a>
                            </div>
                            <span className="properties-nb">
                              452 properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/travelDanang.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                Madrid - Spain
                              </a>
                            </div>
                            <span className="properties-nb">
                              794 properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/traveldalat2.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <NavLink
                        className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                        to="/tourDetail/1"
                      >
                        <div className="destinations-item">
                          <div className="destinations-text">
                            <div className="destinations-name">
                              <a href="#void" title="">
                                Vienna - Austria
                              </a>
                            </div>
                            <span className="properties-nb">
                              1289 properties
                            </span>
                          </div>
                          <figure className="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travel5.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </NavLink>
                      {/* <!-- End Destinations Item --> */}
                    </div>
                    {/* <!-- End Tab Two --> */}
                  </div>
                </div>
                {/* <!-- ENd Destinations Grid --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Destinations Content --> */}
        </section>
        {/* <!-- End Travel Destinations --> */}
        {/* <!-- Magazine Content --> */}
        <section className="magazine">
          {/* <!-- Title --> */}
          <div className="title-wrap">
            <div className="container">
              <div className="travel-title float-left">
                <h2>Những đánh giá</h2>
              </div>
              <NavLink
                to="/review"
                className="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
              >
                Xem tất cả
              </NavLink>
            </div>
          </div>
          {/* <!-- End Title --> */}
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
                                    <i className="fa fa-twitter"></i>
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
                <div className="col-lg-6" style={{ marginBottom: "10px" }}>
                  <div className="magazine-thum" id="magazine-thum">
                    {/* <!--Thumnail Item--> */}
                    <NavLink to="/tourDetail/1">
                      <div className="thumnail-item clearfix">
                        <figure className="float-left">
                          <img src="assets/images/travel.jpg" alt="" />
                        </figure>
                        <div className="thumnail-text">
                          <h4>
                            Thailand by Train with Eastern and Oriental Express
                          </h4>
                          <span>03.5.2014</span>
                        </div>
                      </div>
                    </NavLink>
                    {/* <!--End Thumnail Item-->
                                <!--Thumnail Item--> */}

                    <NavLink to="/tourDetail/1">
                      <div className="thumnail-item clearfix">
                        <figure className="float-left">
                          <img src="assets/images/traveldalat.jpg" alt="" />
                        </figure>
                        <div className="thumnail-text">
                          <h4>
                            Thailand by Train with Eastern and Oriental Express
                          </h4>
                          <span>03.5.2014</span>
                        </div>
                      </div>
                    </NavLink>
                    {/* <!--End Thumnail Item-->
                                <!--Thumnail Item--> */}
                    <NavLink to="/tourDetail/1">
                      <div className="thumnail-item clearfix">
                        <figure className="float-left">
                          <img src="assets/images/travel5.jpg" alt="" />
                        </figure>
                        <div className="thumnail-text">
                          <h4>
                            Thailand by Train with Eastern and Oriental Express
                          </h4>
                          <span>03.5.2014</span>
                        </div>
                      </div>
                    </NavLink>

                    {/* <!--End Thumnail Item-->
                                <!--Thumnail Item--> */}
                    <NavLink to="/tourDetail/1">
                      <div className="thumnail-item clearfix">
                        <figure className="float-left">
                          <img src="assets/images/travelhalong.jpg" alt="" />
                        </figure>
                        <div className="thumnail-text">
                          <h4>
                            Thailand by Train with Eastern and Oriental Express
                          </h4>
                          <span>03.5.2014</span>
                        </div>
                      </div>
                    </NavLink>

                    {/* <!--End Thumnail Item--> */}
                  </div>
                </div>
                {/* <!-- End Magazine Thumnail --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Magazine Content --> */}
        </section>
        {/* <!-- End Travel Magazine --> */}
        {/* <!-- Footer --> */}
        <footer>
          <div className="container" style={{ marginTop: "20px" }}>
            <div className="row">
              {/* <!-- Logo --> */}
              <div className="col-md-4">
                <div className="logo-foter">
                  <a
                    href="#"
                    className="navbar-brand"
                    style={{ float: "none" }}
                  >
                    <img
                      style={{ maxHeight: "70px" }}
                      alt="Travel!"
                      src="assets/images/logo.png"
                    />
                    <span>&nbsp; Travel!</span>
                  </a>
                </div>
              </div>
              {/* <!-- End Logo -->
                    <!-- Navigation Footer --> */}
              <div className="col-xs-6 col-sm-3 col-md-2">
                <div className="ul-ft">
                  <ul>
                    <li>
                      <a href="#void" title="">
                        About
                      </a>
                    </li>
                    <li>
                      <a href="#void" title="">
                        Blog
                      </a>
                    </li>
                    <li>
                      <a href="#void" title="">
                        FQA
                      </a>
                    </li>
                    <li>
                      <a href="#void" title="">
                        Carrers
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End Navigation Footer -->
                    <!-- Navigation Footer --> */}
              <div className="col-xs-6 col-sm-3 col-md-2">
                <div className="ul-ft">
                  <ul>
                    <li>
                      <a href="#void" title="">
                        Contact Us
                      </a>
                    </li>
                    <li>
                      <a href="#void" title="">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#void" title="">
                        Term of Service
                      </a>
                    </li>
                    <li>
                      <a href="#void" title="">
                        Security
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* <!-- End Navigation Footer -->
                    <!-- Footer Currency, Language --> */}
              <div className="col-sm-6 col-md-4">
                {/* <!-- Language --> */}
                <div className="currency-lang-bottom dropdown-cn float-left">
                  <div className="dropdown-head">
                    English
                    <span className="angle-down">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </div>
                  <div className="dropdown-body">
                    <ul>
                      <li className="current">
                        <a href="#void" title="">
                          English
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          Bahasa Melayu
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          Català
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          Dansk
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          Deutsch
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          Francais
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          Italiano
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End Language -->
                        <!-- Currency --> */}
                <div className="currency-lang-bottom dropdown-cn float-left">
                  <div className="dropdown-head">
                    US
                    <span className="angle-down">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </div>
                  <div className="dropdown-body">
                    <ul>
                      <li className="current">
                        <a href="#void" title="">
                          US
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          ARS
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          ADU
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          CAD
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          CHF
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          CNY
                        </a>
                      </li>
                      <li>
                        <a href="#void" title="">
                          CZK
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End Currency -->
                        <!--CopyRight--> */}

                {/* <!--CopyRight--> */}
              </div>
              {/* <!-- End Footer Currency, Language --> */}
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Home;
