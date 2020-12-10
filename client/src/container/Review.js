import React, { Component } from "react";
import NavBar from "../Component/NavBar";
import { NavLink, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { getComment } from "../store/actions/comment";

class Review extends Component {
  componentDidMount(){
    this.props.getComment()
  }
  componentWillMount() {
    this.unlisten = this.props.history.listen((location, action) => {
      this.props.getComment()
    });
  }
  componentWillUnmount() {
    this.unlisten();
  }
  render() {
    return (
      <div>
        <NavBar />
        <div style={{ height: "70px", marginTop: "100px" }}>
          {this.props.role !== "company"
           &&<div
          className="container"
          style={{ position: "fixed", zIndex: "100" }}
        >
          <a
            className="awe-btn awe-btn-5 arrow-right awe-btn-lager text-uppercase float-right"
            style={{ backgroundColor: "#25ab4b", color: "#ffffff" }}
            href={this.props.role === "customer" ?"/addReview" :"/login"}
          >
            Thêm đánh giá
          </a>
        </div>
          }
          
        </div>

        <section className="magazine" style = {{marginBottom:"20px"}}>
          <div className="container">
            <div className="magazine-cn">
              <div className="row">
              {this.props.commentdata ?.map((item,i)=>(
              <div className="magazine-cn" key = {i} style = {{paddingBottom:"10px",borderBottom: "2px dotted gray"}}>
              <div className="row">
                {/* <!-- Magazine Descript --> */}
                <div className="col-lg-6" >
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
                                <h3>
                                  {item.title}
                                </h3>
                                <ul>
                                  <li>
                                    by{" "}
                                    <a href="#void" title="">
                                      {item.name}
                                    </a>
                                  </li>
                                </ul>
                                <hr className="hr" />
                              </div>
                              <div className="magazine-body">
                                <p>
                                  {item.comment}
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
                <div
                  className="col-lg-6"
                  style={{ marginTop: "7%", marginRight: "3%", width: "47%" }}
                >
                  <img src={item.image} alt="" />
                </div>
              </div>

            </div>
            ))}
              </div>
              {/* <!-- End Magazine Thumnail --> */}
            </div>

          </div>

        </section>
      </div>
    );
  }
}
function mapStateProps(state) {
  return {
    commentdata: state.comment.datacomment,
    loadingcomment: state.comment.loading,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getComment: () => dispatch(getComment()),
  };
}

export default withRouter(connect(mapStateProps, mapDispatchToProps)(Review));
