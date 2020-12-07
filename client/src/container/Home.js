import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import SliderSlick from "react-slick";
import { NavLink } from "react-router-dom";
import { gettours, getToursStart, getCategory } from "../store/actions";
import { connect } from "react-redux";
import { getToursSale } from "../store/actions/tour";
import { getComment } from "../store/actions/comment";
class Home extends Component {
  constructor() {
    super();
    // this.initTourSale = this.initTourSale.bind(this)
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
  componentDidMount() {
    this.props.getAllTour(6);
    this.props.getCategoty();
    this.props.getTourSale(8);
    this.props.getComment(5);
  }
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
                        placeholder="Tên tour"
                        id="nameTour"
                      />
                    </div>
                    <div
                      className="form-field field-date"
                      style={{ width: "16%" }}
                    >
                      <input
                        type="text"
                        className="field-input hasDatepicker"
                        placeholder="Tên công ty"
                        id="company_name"
                      />
                    </div>
                    <div className="form-field field-date">
                      <input
                        type="text"
                        className="field-input hasDatepicker"
                        placeholder="Giá tiền"
                        id="price"
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
        <section className="sales">
          <div className="title-wrap">
            <div className="container">
              <div className="travel-title float-left">
                <h2>Những tour được giảm giá: </h2>
              </div>
              <NavLink
                to="/travel?sale"
                className="awe-btn awe-btn-5 awe-btn-lager arrow-right text-uppercase float-right"
              >
                Xem tất cả
              </NavLink>
            </div>
          </div>
          <div className="container">
            <div className="sales-cn">
              <div className="row">
                {/* <!-- HostSales Item --> */}
                {this.props.toursale?.map((item, i) => (
                  <NavLink
                    className="col-xs-6 col-md-3"
                    to={`/tourDetail/${item._id}`}
                  >
                    <div className="sales-item">
                      <figure className="home-sales-img">
                        <a href="#void" title="">
                          <img src={item.image} alt="" />
                        </a>
                        <figcaption>
                          Save <span>{item.sale}</span>%
                        </figcaption>
                      </figure>
                      <div className="home-sales-text">
                        <div className="home-sales-name-places">
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
                      </div>
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Travel Destinations --> */}
        <section className="destinations">
          {/* <!-- Title --> */}
          <div className="title-wrap">
            <div className="container">
              <div className="travel-title float-left">
                <h2>Những tour du lịch </h2>
              </div>
              <NavLink
                to="/travel"
                className="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
              >
                Xem tất cả
              </NavLink>
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
                      {this.props.categorydata?.map((item, i) => (
                        <li>
                          <NavLink to={`/travel?${item._id}`} key={i}>
                            <i className="fa fa-map-marker"></i> {item.name}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                {/* <!-- End Destinations Filter -->
                        <!-- Destinations Grid --> */}
                <div className="col-md-8 col-lg-9">
                  <div className="tab-content destinations-grid">
                    <div
                      id="destinations-1"
                      className="clearfix tab-pane fade active in "
                    >
                      {this.props.toursdata?.map((item, i) => (
                        <NavLink
                          key={i}
                          className="col-xs-6 col-sm-4 col-md-6 col-lg-4"
                          to={`/tourDetail/${item._id}`}
                        >
                          <div className="destinations-item ">
                            <div className="destinations-text">
                              <div className="destinations-name">
                                <a href="#void" title="">
                                  {item.name}
                                </a>
                              </div>
                              <div>
                                {console.log("item", item)}
                                <span className="properties-nb">
                                  Công ty: {item.company_id.name}
                                </span>
                              </div>
                              <div>
                                <span className="properties-nb">
                                  {item.category_id.name}
                                </span>
                              </div>

                              {/* <a href="#void" title="">
                            Công ty: {item.company_id.name}
                            </a> */}
                              {/* <a href="#void" title="">
                            {item.category_id.name}
                          </a> */}
                            </div>
                            <figure className="destinations-img">
                              <a href="#void" title="">
                                <img src={item.image} alt="" />
                              </a>
                            </figure>
                          </div>
                        </NavLink>
                      ))}
                    </div>
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
                                  Địa điểm du lịch ấn tượng nhất định phải đến
                                  !!!
                                </h2>
                                <ul>
                                  <li>
                                    by{" "}
                                    <a href="#void" title="">
                                      Admin
                                    </a>
                                  </li>
                                  <li>10.12.2020</li>
                                </ul>
                                <hr className="hr" />
                              </div>
                              <div className="magazine-body">
                                <p>
                                  Bạn sẽ không có trải nghiệm tuổi trẻ nếu chỉ
                                  biết mỗi con đường từ nhà đến công ty mà hãy
                                  mở rộng con đường đi của mình đến những vùng
                                  đất mới để biết thêm những nét văn hóa độc
                                  đáo, những ngôn ngữ thú vị và nói chuyện cùng
                                  con người địa phương thân thiện. Trong những
                                  năm gần đây, du lịch ngày càng phát triển mạnh
                                  hơn với một loạt các xu hướng vô cùng thú vị
                                  do chính giới trẻ tạo nên. Trong báo cáo “Sức
                                  mạnh của du lịch giới trẻ”, UNWTO cho biết
                                  rằng, người trẻ hiện nay đầu tư rất nhiều cho
                                  các trải nghiệm trong mỗi chuyến du lịch bởi
                                  nó mang lại cho họ một giá trị lâu dài.
                                </p>
                                <p>
                                  Chúng ta – sống thế nào để “đáng mặt” tuổi trẻ ?
                                </p>

                                <p>
                                  Lên kế hoạch cho những chuyến đi khám phá
                                  những vùng đất mới để hòa mình vào thiên
                                  nhiên, làm quen với những con người mới, quyết
                                  định táo bạo để bước ra khỏi vùng an toàn và
                                  ghi lại từng khoảnh khắc đáng nhớ là cách ghi
                                  dấu thanh xuân tươi đẹp.
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

                <div className="col-lg-6" style={{ marginBottom: "10px" }}>
                  <div className="magazine-thum" id="magazine-thum">
                    {this.props.commentdata?.map((item,i)=>(
                      <NavLink to={`/commentDetail/${item._id}`} key = {i}>
                      <div className="thumnail-item clearfix">
                        <figure className="float-left">
                          <img src={item.image} alt="" />
                        </figure>
                        <div className="thumnail-text">
                          <h4>
                            {item.title}
                          </h4>
                          <span>{item.name}</span>
                        </div>
                      </div>
                    </NavLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
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
function mapStateProps(state) {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    categorydata: state.category.data,
    tourStatus: state.tour.loading,
    toursdata: state.tour.data,
    toursale: state.tour.datasale,
    loadingsale: state.tour.loadingsale,
    commentdata: state.comment.datacomment,
    loadingcomment: state.comment.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getAllTourStart: () => dispatch(getToursStart()),
    getAllTour: (limit) => dispatch(gettours(limit)),
    getTourSale: (limit) => dispatch(getToursSale(limit)),
    getCategoty: () => dispatch(getCategory()),
    getComment: (limit) => dispatch(getComment(limit)),
  };
}

export default connect(mapStateProps, mapDispatchToProps)(Home);
