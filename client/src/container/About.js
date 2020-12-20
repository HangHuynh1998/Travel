import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { message, Modal } from "antd";
class About extends Component {
  state = {
    content: "",
  };
  render() {
    return (
      <div>
        <NavBar />
        {/* <Modal
          visible={this.state.showModal}
          title={null}
          footer={null}
          onCancel={this.handleAfterSubmited}
        >
          <div id="unsubscribe">
            <h5>Cảm ơn bạn đã gửi yêu cầu cho chúng tôi!</h5>
            <p>
              Chúng tôi sẽ gửi những công việc hoặc những ứng tiên phù hợp đến
              email của bạn trong thời gian sớm nhất.
            </p>
          </div>
        </Modal> */}
        <div className="wrapper">
          <div className="container" style={{ marginTop: "120px" }}>
            <div className="row justify-content-center">
              <div className="col-sm-6">
                <div className="contents-main" id="contents-main">
                  <div className="container">
                    <div className="row">
                      <div className="wpb_wrapper">
                        <div
                          className="main-article-content"
                          style={{ fontSize: "17px", margin: "50px" }}
                        >
                          {/* <h2 class="article-title">Giới thiệu  về website www.danang43.vn</h2> */}
                          <div
                            className="shortcode-content"
                            style={{ width: "50%" }}
                          >
                            <h2>Giới thiệu về website Travel</h2>
                            <div className="mt-20">
                              <p>
                                <strong>1. Giới thiệu về website</strong>
                              </p>
                              <p className="ml-30">
                                Với sự bùng nổ của các trang thương mại điện tử
                                hiện nay đang dần thay đổi xu hướng mua hàng của
                                người sử dụng. Và kể cả là các dịch vụ trực
                                tuyến như đặt tour du lịch, vé máy bay, khách
                                sạn,… giúp khách hàng và bên quản lý dễ dàng
                                trao đổi, hoặc tìm kiếm được thông tin, dịch vụ
                                phù hợp. Với lẽ đó website Travel được thành lập
                                giúp việc tìm kiếm các tour du lịch trở nên dễ
                                dàng hơn.
                              </p>
                            </div>
                            <div className="mt-20">
                              <p>
                                <strong>2. Giới thiệu về Công ty&nbsp;</strong>
                              </p>
                              <div className="ml-30">
                                <p>CÔNG TY TRAVEL</p>
                                <p>
                                  Địa chỉ : 54 Nguyễn Lương Bằng, Liên Chiểu, Đà
                                  Nẵng
                                </p>
                                <p>Tel: 0123456789</p>
                                <p>Website:&nbsp;travel.com</p>
                                <p>
                                  Giấy chứng nhận đăng ký kinh doanh số
                                  0401809246 của Sở Kế hoạch Đầu tư thành phố Đà
                                  Nẵng.
                                </p>
                              </div>
                            </div>
                            <div className="mt-20">
                              <p>
                                <strong>3. Tầm nhìn:</strong>
                              </p>
                              <p className="ml-30">
                                Travel.com nỗ lực phát triển để trở thành cổng
                                thông tin hỗ trợ tìm kiếm và đặt tour nhanh,
                                tiện lợi, an toàn cho khách hàng.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6" style = {{marginTop:"100px"}}>
                {/* <div className="form-wrapper iw-contact-form-7 contact-map">
                  <div className="title">
                    <h3>GỬI LIÊN HỆ</h3>
                  </div>
                  <div className="field">
                    <label>Email?</label>
                    <div className="iw-input">
                      <i className="fa fa-user" />
                      <span className="wpcf7-form-control-wrap your-email">
                        <input
                          type="email"
                          name="email"
                          placeholder="Nhập vào địa chỉ email."
                          value={this.state.email}
                          onChange={(e) =>
                            this.setState({ email: e.target.value })
                          }
                          required
                        />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label>Chủ đề?</label>
                    <div className="iw-input">
                      <i className="fa fa-edit" />
                      <span className="wpcf7-form-control-wrap your-subject">
                        <input
                          type="text"
                          name="contact[subject]"
                          placeholder="Nhập vào chủ đề."
                          value={this.state.subject}
                          onChange={(e) =>
                            this.setState({ subject: e.target.value })
                          }
                          required
                        />
                      </span>
                    </div>
                  </div>
                  <div className="field">
                    <label>Nội dung!</label>
                    <div className="iw-input">
                      <i className="fa fa-keyboard-o" />
                      <span className="wpcf7-form-control-wrap your-message">
                        <textarea
                          cols={40}
                          rows={4}
                          placeholder="Nhập vào nội dung."
                          name="contact[content]"
                          value={this.state.content}
                          onChange={(e) =>
                            this.setState({ content: e.target.value })
                          }
                          required
                          defaultValue={""}
                        />
                      </span>
                    </div>
                  </div>
                  <div className="submit-button">
                    <input
                      type="submit"
                      onClick={() => this.sendmail()}
                      name="btn_submit"
                      value="Gửi"
                      defaultValue="Gửi"
                    />
                  </div>
                </div> */}
                <img src ="assets/images/login.jpg" style = {{height:"800px"}}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
