import React, { Component } from 'react';
import NavBar from '../Component/NavBar';
import { NavLink, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { getUser } from '../store/actions/user';
import { getCompany, toggleFollow, toggleFollowStart } from '../store/actions/company';

class CompanyDetail extends Component {
  constructor() {
    super();
    this.toggleFollow = this.toggleFollow.bind(this);
  }
  componentDidMount(){
    this.props.getCompany(this.props.history.location.pathname.slice(15))
  }
  componentWillReceiveProps(nextProps) {
    this.props.toggleFollowStart()
    if(nextProps.toggleLoading === "success"){
        this.props.history.push(`/managerCustomer/${this.props.user_id}`)}
  }
  toggleFollow(){
    this.props.toggleFollow(this.props.history.location.pathname.slice(15))
  }
    render() {
        return (
            <div>
                <NavBar />
                <div className="limiter">
          <div className="container-login100">
            <div className="wrap-login100" style={{backgroundImage:"none"}}>
            <div
                className="login100-more"
                style = {{width: "calc(100% - 800px)"}}
              >
                  <img src={this.props.company?.user_id.avatar} alt="..." className="round-circle"></img>
              </div>
              <form className="login100-form validate-form" style = {{width:"800px"}}>
                <span className="login100-form-title p-b-43">
                  Chi tiết Công ty
                </span>
                <div className="form-group">
                  <span>Tên công ty: </span>
                  <span>{this.props.company?.user_id.name}</span>
                </div>
                <div className="form-group">
                  <span>Địa chỉ:</span>
                  <span>{this.props.company?.user_id.address}</span>
                </div>
                <div className="form-group">
                <span>Email:  </span>
                  <span>{this.props.company?.user_id.email}</span>
                </div>
                <div className="form-group">
                <span>Mô tả: </span>
                  <span>{this.props.company?.user_id.description}</span>
                </div>
                <div
                  className="container-login100-form-btn"
                  style={{ display: "flex",marginTop:"40px" }}
                >
                  <button
                    className="login100-form-btn"
                    style={{ width: "200px", marginRight: "20px" }}
                    type="button"
                    onClick = {this.toggleFollow}
                  >
                      Theo dõi/ Hủy theo dõi
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
            </div>
        );
    }
}
function mapStateProps(state) {
  return {
    loading: state.company.loading,
    company: state.company.data,
    toggleLoading: state.company.loadingFollow
  };
}
function mapDispatchToProps(dispatch) {
  return {
     getCompany:(id) => dispatch(getCompany(id)),
     toggleFollowStart:() => dispatch(toggleFollowStart()),
     toggleFollow:(id) => dispatch(toggleFollow(id)),
  };
}

export default withRouter(connect(mapStateProps, mapDispatchToProps)(CompanyDetail));