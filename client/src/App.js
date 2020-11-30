
import { Switch, Route } from 'react-router-dom';
import Home from './container/Home';
import Login from './container/Login';
import Register from './container/Register';
import About from './container/About';
import Review from './container/Review';
import { connect } from 'react-redux';
import BookTour from './container/BookTour';
import Tour from './container/AddTour';
import * as actions from './store/actions/index'
import Travel from './container/Travel';
import AddTour from './container/AddTour';
import TourDetail from './container/TourDetail';
import CompanyDetail from './container/CompanyDetail';
import LogOut from './container/LogOut';
import AddReview from './container/AddReview';
import Profile from './container/ProfileCompany'
import ProfileCompany from './container/ProfileCompany';
import ProfileCustomer from './container/ProfileCustomer';
import ManagerTourCustomer from './container/ManagerTourCustomer';
import ManagerTour from './container/ManagerTourCompany';
import ManagerTourCompany from './container/ManagerTourCompany';
import EditTour from './container/EditTour';
import ChangePass from './container/ChangePass';
import ChangeProfileCompany from './container/ChangeProfileCompany';
import ChangeProfileCustomer from './container/ChangeProfileCustomer';
import { extend } from 'jquery';
import { Component } from 'react';
function NotFound() {
  return (
      <div>
          <h1>404 - NOT FOUND</h1>
      </div>
  )
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      token:null
    };
    // this.handleSubmit=this.handleSubmit.bind(this)
  }
  render(){
    let routes=(
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/login" exact component={Login}/>
          <Route path="/register" component={Register}/>
          <Route path="/about" component={About}/>
          <Route path="/review" component={Review}/>
          <Route path="/travel" component={Travel}/>
          <Route path="/tourDetail/:tour_id" component={TourDetail}/>
          <Route path="/companyDetail/:company_id" component={CompanyDetail}/>
          <Route path="/booktour/:tour_id" component={BookTour} />
          <Route path="/profileCompany/:_id" component={ProfileCompany}/>
          <Route path="/profileCustomer/:_id" component={ProfileCustomer}/>
          <Route path="/managerCustomer/:_id" component={ManagerTourCustomer}/>
          <Route path="/managerCompany/:_id" component={ManagerTourCompany}/>
          <Route path="/editTour/:_id" component={EditTour}/>
          <Route path="/changePass/:_id" component={ChangePass}/>
          <Route path="/changeProfileCompany/:_id" component={ChangeProfileCompany}/>
          <Route path="/changeProfileCustomer/:_id" component={ChangeProfileCustomer}/>
          <Route path="/addtour" component={AddTour} />
          <Route path ="/addReview" component={AddReview}/>
          <Route path="/logout" component = {LogOut}/>
          <Route component={NotFound}/>
        </Switch>
    )
    return (
      <div className="App">
      <Switch>
      {routes}
      </Switch>
      </div>
    );
  }
  
}
const mapStateProps = (state) => {
  console.log("state",state.auth.token);
  return {
    isAuthenticated: state.auth.token !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};
 export default connect(mapStateProps,mapDispatchToProps) (App);
