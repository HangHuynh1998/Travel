import React, { Component } from 'react';
import NavBar from '../Component/NavBar';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { gettours, getToursStart, gettoursCategory } from '../store/actions';

class Travel extends Component {
    constructor(){
      super();
      this.initData = this.initData.bind(this)
      this.state = {
        data:[],
      }
    }
    componentDidMount(){
      this.initData()
    }
    componentWillMount() {
      this.unlisten = this.props.history.listen((location, action) => {
        this.initData()
      });
    }
    // componentWillUnmount() {
    //     this.unlisten();
    // }
    initData(){
      if(this.props.history.location.search === ""){
        this.props.getAllTour()
      }
      if(this.props.history.location.search !== ""){
        let search = this.props.history.location.search
        if(search.slice(0,search.indexOf("="))){
          this.props.getTourCategoty(search.substr(search.indexOf("=")))
        }
      }
    }
    render() {
      console.log("hhshshs",this.props.history);
      let tours= this.props.toursdata?.filter( function (tour) {
        return tour.status === "open"
      });
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
                {tours?.map((item,i)=>(
                  <NavLink className="col-xs-6 col-md-3" to = "/tourDetail/1" key = {i} style = {{marginBottom:"5px"}}>
                  <div className="sales-item">
                    <figure className="home-sales-img">
                      <a href="#void" title="">
                        <img src={item.image} alt="" />
                      </a>
                      {item.save && <figcaption>
                      Save <span>{item.save}</span>%
                      </figcaption>}
                    </figure>
                    <div className="home-sales-text">
                      <div className="home-sales-name-places" style = {{height:"120px"}}>
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
                      <div className="price-box" style = {{marginTop:"15px"}}>
                        {/* <span className="price old-price">
                          From <del>$269</del>
                        </span> */}
                        <span className="price special-price" style = {{fontSize:"15px"}}>
                        <img src = "assets/images/dola.png" style = {{height:"40px"}}/>{item.price}<small>/tour(VND)</small>
                        </span>
                      </div>
                    </div>
                  </div>
                </NavLink>
                ))}
                
                {/* <!-- End HostSales Item -->
                        <!-- HostSales Item --> */}
              </div>
            </div>
          </div>
          {/* <!-- End Hot Sales Content --> */}
        </section>
            </div>
        );
    }
}

function mapStateProps(state) {
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    categorydata: state.category.data,
    tourStatus:state.tour.loading,
    toursdata:state.tour.data
  };
}
function mapDispatchToProps(dispatch) {
  return {
   getAllTourStart:()=> dispatch(getToursStart()),
   getAllTour:()=>dispatch(gettours()),
   getTourCategoty:(category_id)=>dispatch(gettoursCategory(category_id))
  };
}

export default connect(mapStateProps, mapDispatchToProps)(Travel);