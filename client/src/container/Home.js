import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import SliderSlick from "react-slick";
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
        <section class="banner" style={{ marginTop: "72px" }}>
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

          <div class="container" style={{ marginTop: "inherit" }}>
            <div class="banner-cn">
              <div class="tab-content">
                {/* 
                        <!-- Search Hotel --> */}
                <div class="form-cn form-hotel tab-pane active in">
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

                  <div class="form-search clearfix">
                    <div class="form-field field-destination">
                      <label for="destination">
                        <span>Điểm đến:</span> Country, City, Airport, Area,
                        Landmark
                      </label>
                      <input type="text" id="destination" class="field-input" />
                    </div>
                    <div class="form-field field-date">
                      <input
                        type="text"
                        class="field-input hasDatepicker"
                        placeholder="Check in"
                        id="check-in"
                      />
                    </div>
                    <div class="form-field field-date">
                      <input
                        type="text"
                        class="field-input hasDatepicker"
                        placeholder="Check out"
                        id="check-out"
                      />
                    </div>
                    <div class="form-field field-select">
                      <div class="select">
                        <span>Guest</span>
                        <select>
                          <option>Guest</option>
                          <option>1 Guest</option>
                          <option>2 Guest</option>
                          <option>3 Guest</option>
                        </select>
                      </div>
                    </div>
                    <div class="form-submit">
                      <button
                        type="submit"
                        class="awe-btn awe-btn-lager awe-search"
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
        <section class="sales">
          {/* <!-- Title --> */}
          <div class="title-wrap">
            <div class="container">
              <div class="travel-title float-left">
                <h2>
                  Hot Sale Today: <span>Đà Nẵng, Ninh Bình, Phú Quốc, ...</span>
                </h2>
              </div>
              <a
                href="#void"
                title=""
                class="awe-btn awe-btn-5 awe-btn-lager arrow-right text-uppercase float-right"
              >
                ALL SALES
              </a>
            </div>
          </div>
          {/* <!-- End Title -->
            <!-- Hot Sales Content --> */}
          <div class="container">
            <div class="sales-cn">
              <div class="row">
                {/* <!-- HostSales Item --> */}
                <div class="col-xs-6 col-md-3">
                  <div class="sales-item">
                    <figure class="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/traveldalat2.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>
                    <div class="home-sales-text">
                      <div class="home-sales-name-places">
                        <div class="home-sales-name">
                          <a href="#void" title="">
                            Copley Square Hotel
                          </a>
                        </div>
                        <div class="home-sales-places">
                          <a href="#void" title="">
                            Boston
                          </a>
                          <a href="#void" title="">
                            Massachusetts
                          </a>
                        </div>
                      </div>
                      <hr class="hr" />
                      <div class="price-box">
                        <span class="price old-price">
                          From <del>$269</del>
                        </span>
                        <span class="price special-price">
                          $175<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
                <div class="col-xs-6 col-md-3">
                  <div class="sales-item">
                    <figure class="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/travelsapa.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>

                    <div class="home-sales-text">
                      <div class="home-sales-name-places">
                        <div class="home-sales-name">
                          <a href="#void" title="">
                            Grand Hotel Bagni Nuovi
                          </a>
                        </div>
                        <div class="home-sales-places">
                          <a href="#void" title="">
                            Boston
                          </a>
                          ,
                          <a href="#void" title="">
                            Italy
                          </a>
                        </div>
                      </div>
                      <hr class="hr" />
                      <div class="price-box">
                        <span class="price old-price">
                          From <del>$632</del>
                        </span>
                        <span class="price special-price">
                          $345<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
                <div class="col-md-6">
                  <div class="sales-item ">
                    <figure class="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/traveldalat.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>
                    <div class="home-sales-text">
                      <div class="home-sales-name-places">
                        <div class="home-sales-name">
                          <a href="#void" title="">
                            The Standard, East Village
                          </a>
                        </div>
                        <div class="home-sales-places">
                          <a href="#void" title="">
                            New York
                          </a>
                          ,
                          <a href="#void" title="">
                            New York
                          </a>
                        </div>
                      </div>
                      <hr class="hr" />
                      <div class="price-box">
                        <span class="price old-price">
                          From <del>$582</del>
                        </span>
                        <span class="price special-price">
                          $258<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
                <div class="col-md-6">
                  <div class="sales-item">
                    <figure class="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/travelSonDoong.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>
                    <div class="home-sales-text">
                      <div class="home-sales-name-places">
                        <div class="home-sales-name">
                          <a href="#void" title="">
                            Ganges River Cruise
                          </a>
                        </div>
                        <div class="home-sales-places">
                          <a href="#void" title="">
                            London
                          </a>
                          ,
                          <a href="#void" title="">
                            United Kingdom
                          </a>
                        </div>
                      </div>
                      <hr class="hr" />
                      <div class="price-box">
                        <span class="price old-price">
                          From <del>$457</del>
                        </span>
                        <span class="price special-price">
                          $258<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
                <div class="col-xs-6 col-md-3">
                  <div class="sales-item">
                    <figure class="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/travelHue.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>
                    <div class="home-sales-text">
                      <div class="home-sales-name-places">
                        <div class="home-sales-name">
                          <a href="#void" title="">
                            Town Hall Hotel
                          </a>
                        </div>
                        <div class="home-sales-places">
                          <a href="#void" title="">
                            Boston
                          </a>
                          ,
                          <a href="#void" title="">
                            Massachusetts
                          </a>
                        </div>
                      </div>
                      <hr class="hr" />
                      <div class="price-box">
                        <span class="price old-price">
                          From <del>$269</del>
                        </span>
                        <span class="price special-price">
                          $175<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
                <div class="col-xs-6 col-md-3">
                  <div class="sales-item">
                    <figure class="home-sales-img">
                      <a href="#void" title="">
                        <img src="assets/images/TravelDanang.jpg" alt="" />
                      </a>
                      <figcaption>
                        Save <span>30</span>%
                      </figcaption>
                    </figure>
                    <div class="home-sales-text">
                      <div class="home-sales-name-places">
                        <div class="home-sales-name">
                          <a href="#void" title="">
                            A Hidden NYC Mystery Hotel
                          </a>
                        </div>
                        <div class="home-sales-places">
                          <a href="#void" title="">
                            Boston
                          </a>
                          ,
                          <a href="#void" title="">
                            Italy
                          </a>
                        </div>
                      </div>
                      <hr class="hr" />
                      <div class="price-box">
                        <span class="price old-price">
                          From <del>$354</del>
                        </span>
                        <span class="price special-price">
                          $255<small>/night</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- End HostSales Item --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Hot Sales Content --> */}
        </section>
        {/* <!-- Travel Destinations --> */}
        <section class="destinations">
          {/* <!-- Title --> */}
          <div class="title-wrap">
            <div class="container">
              <div class="travel-title float-left">
                <h2>Top Travel Destinations</h2>
              </div>
              <a
                href="#void"
                title=""
                class="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
              >
                view all
              </a>
            </div>
          </div>
          {/* <!-- End Title -->

            <!-- Destinations Content --> */}
          <div class="destinations-cn">
            {/* <!-- Background --> */}
            <div
              class="bg-parallax bg-2"
              style={{ backgroundPosition: "50% 62px" }}
            ></div>
            {/* <!-- End Background --> */}

            <div class="container">
              <div class="row">
                {/* <!-- Destinations Filter --> */}
                <div class="col-md-4 col-lg-3">
                  <div class="intro-filter">
                    <ul class="filter">
                      <li class="active">
                        <a data-toggle="tab" href="#void">
                          <i class="fa fa-map-marker"></i> Recommendation for
                          you
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#void">
                          <i class="fa fa-map-marker"></i> Australia &amp;
                          Oceania
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#void">
                          <i class="fa fa-map-marker"></i> Asia
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#void">
                          <i class="fa fa-map-marker"></i> Europe
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="#void">
                          <i class="fa fa-map-marker"></i> USA &amp; Canada
                        </a>
                      </li>
                      <li>
                        <a data-toggle="tab" href="void">
                          <i class="fa fa-map-marker"></i> The rest of the world
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* <!-- End Destinations Filter -->
                        <!-- Destinations Grid --> */}
                <div class="col-md-8 col-lg-9">
                  <div class="tab-content destinations-grid">
                    {/* <!-- Tab One --> */}
                    <div
                      id="destinations-1"
                      class="clearfix tab-pane fade active in "
                    >
                      {/* <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item ">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                London - UK
                              </a>
                            </div>
                            <span class="properties-nb">
                              <ins>1289</ins> properties
                            </span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travel.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </div>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                Paris - France
                              </a>
                            </div>
                            <span class="properties-nb">239 properties</span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travelsapa.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </div>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                Rome - Italy
                              </a>
                            </div>
                            <span class="properties-nb">478 properties</span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/travelSonDoong.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                Barcelona - Spain
                              </a>
                            </div>
                            <span class="properties-nb">452 properties</span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/TravelDanang.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                Madrid - Spain
                              </a>
                            </div>
                            <span class="properties-nb">794 properties</span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/traveldalat2.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                Vienna - Austria
                              </a>
                            </div>
                            <span class="properties-nb">1289 properties</span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travel5.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </div>
                      {/* <!-- End Destinations Item --> */}
                    </div>
                    {/* <!-- End Tab One -->
                                <!-- Tab Two --> */}
                    <div id="destinations-2" class="clearfix tab-pane fade">
                      {/* <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item ">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                London - UK
                              </a>
                            </div>
                            <span class="properties-nb">
                              <ins>1289</ins> properties
                            </span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/travelhalong.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                Paris - France
                              </a>
                            </div>
                            <span class="properties-nb">239 properties</span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travelHue.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </div>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                Rome - Italy
                              </a>
                            </div>
                            <span class="properties-nb">478 properties</span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travel.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </div>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                Barcelona - Spain
                              </a>
                            </div>
                            <span class="properties-nb">452 properties</span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/travelDanang.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                Madrid - Spain
                              </a>
                            </div>
                            <span class="properties-nb">794 properties</span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img
                                src="assets/images/traveldalat2.jpg"
                                alt=""
                              />
                            </a>
                          </figure>
                        </div>
                      </div>
                      {/* <!-- End Destinations Item -->
                                    <!-- Destinations Item --> */}
                      <div class="col-xs-6 col-sm-4 col-md-6 col-lg-4">
                        <div class="destinations-item">
                          <div class="destinations-text">
                            <div class="destinations-name">
                              <a href="#void" title="">
                                Vienna - Austria
                              </a>
                            </div>
                            <span class="properties-nb">1289 properties</span>
                          </div>
                          <figure class="destinations-img">
                            <a href="#void" title="">
                              <img src="assets/images/travel5.jpg" alt="" />
                            </a>
                          </figure>
                        </div>
                      </div>
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
        <section class="magazine">
          {/* <!-- Title --> */}
          <div class="title-wrap">
            <div class="container">
              <div class="travel-title float-left">
                <h2>Travel Magazine</h2>
              </div>
              <a
                href="#void"
                title=""
                class="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
              >
                view all
              </a>
            </div>
          </div>
          {/* <!-- End Title --> */}
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
                                <a
                                  href="#void"
                                  title=""
                                  class="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
                                >
                                  view more
                                </a>
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
                <div class="col-lg-6">
                  <div class="magazine-thum" id="magazine-thum">
                    {/* <!--Thumnail Item--> */}
                    <div class="thumnail-item clearfix active">
                      <figure class="float-left">
                        <img src="assets/images/travel.jpg" alt="" />
                      </figure>
                      <div class="thumnail-text">
                        <h4>
                          Thailand by Train with Eastern and Oriental Express
                        </h4>
                        <span>03.5.2014</span>
                      </div>
                    </div>
                    {/* <!--End Thumnail Item-->
                                <!--Thumnail Item--> */}
                    <div class="thumnail-item clearfix">
                      <figure class="float-left">
                        <img src="assets/images/traveldalat.jpg" alt="" />
                      </figure>
                      <div class="thumnail-text">
                        <h4>
                          Thailand by Train with Eastern and Oriental Express
                        </h4>
                        <span>03.5.2014</span>
                      </div>
                    </div>
                    {/* <!--End Thumnail Item-->
                                <!--Thumnail Item--> */}
                    <div class="thumnail-item clearfix">
                      <figure class="float-left">
                        <img src="assets/images/travel5.jpg" alt="" />
                      </figure>
                      <div class="thumnail-text">
                        <h4>
                          Thailand by Train with Eastern and Oriental Express
                        </h4>
                        <span>03.5.2014</span>
                      </div>
                    </div>
                    {/* <!--End Thumnail Item-->
                                <!--Thumnail Item--> */}
                    <div class="thumnail-item clearfix">
                      <figure class="float-left">
                        <img src="assets/images/travelhalong.jpg" alt="" />
                      </figure>
                      <div class="thumnail-text">
                        <h4>
                          Thailand by Train with Eastern and Oriental Express
                        </h4>
                        <span>03.5.2014</span>
                      </div>
                    </div>
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
            <div class="container">
                <div class="row">
                    {/* <!-- Logo --> */}
                    <div class="col-md-4">
                        <div class="logo-foter">
                        <a href="#" class="navbar-brand" style= {{float:"none"}}><img style ={{maxHeight:"70px"}} alt="Travel!" src="assets/images/logo.png"/><span>&nbsp; Travel!</span></a>
                        </div>
                    </div>
                    {/* <!-- End Logo -->
                    <!-- Navigation Footer --> */}
                    <div class="col-xs-6 col-sm-3 col-md-2">
                        <div class="ul-ft">
                            <ul>
                                <li><a href="#void" title="">About</a></li>
                                <li><a href="#void" title="">Blog</a></li>
                                <li><a href="#void" title="">FQA</a></li>
                                <li><a href="#void" title="">Carrers</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- End Navigation Footer -->
                    <!-- Navigation Footer --> */}
                    <div class="col-xs-6 col-sm-3 col-md-2">
                        <div class="ul-ft">
                            <ul>
                                <li><a href="#void" title="">Contact Us</a></li>
                                <li><a href="#void" title="">Privacy Policy</a></li>
                                <li><a href="#void" title="">Term of Service</a></li>
                                <li><a href="#void" title="">Security</a></li>
                            </ul>
                        </div>
                    </div>
                    {/* <!-- End Navigation Footer -->
                    <!-- Footer Currency, Language --> */}
                    <div class="col-sm-6 col-md-4">
                        {/* <!-- Language --> */}
                        <div class="currency-lang-bottom dropdown-cn float-left">
                            <div class="dropdown-head">English
                                <span class="angle-down"><i class="fa fa-angle-down"></i></span>
                            </div>
                            <div class="dropdown-body">
                                <ul>
                                    <li class="current"><a href="#void" title="">English</a></li>
                                    <li><a href="#void" title="">Bahasa Melayu</a></li>
                                    <li><a href="#void" title="">Català</a></li>
                                    <li><a href="#void" title="">Dansk</a></li>
                                    <li><a href="#void" title="">Deutsch</a></li>
                                    <li><a href="#void" title="">Francais</a></li>
                                    <li><a href="#void" title="">Italiano</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End Language -->
                        <!-- Currency --> */}
                        <div class="currency-lang-bottom dropdown-cn float-left">
                            <div class="dropdown-head">US
                                <span class="angle-down"><i class="fa fa-angle-down"></i></span>
                            </div>
                            <div class="dropdown-body">
                                <ul>
                                    <li class="current"><a href="#void" title="">US</a></li>
                                    <li><a href="#void" title="">ARS</a></li>
                                    <li><a href="#void" title="">ADU</a></li>
                                    <li><a href="#void" title="">CAD</a></li>
                                    <li><a href="#void" title="">CHF</a></li>
                                    <li><a href="#void" title="">CNY</a></li>
                                    <li><a href="#void" title="">CZK</a></li>
                                </ul>
                            </div>
                        </div>
                        {/* <!-- End Currency -->
                        <!--CopyRight--> */}
                        <p class="copyright">
                            © 2009 – 2014 Bookyourtrip™ All rights reserved.
                        </p>
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
