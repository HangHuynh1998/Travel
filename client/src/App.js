
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
import Profile from './container/Profile'
function NotFound() {
  return (
      <div>
          <h1>404 - NOT FOUND</h1>
      </div>
  )
}
function App() {
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
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/booktour/:tour_id" component={BookTour} />
        <Route path="/profile" component={Profile}/>
        <Route path="/addtour" component={AddTour} />
        <Route path ="/addReview" component={AddReview}/>
        <Route path="/logout" component = {LogOut}/>
        <Route component={NotFound}/>
      </Switch>
  )
  // if(this.props.isAuthenticated){
  let routeslogin = (
      <Switch>
       
      </Switch>
    );
  // }
  return (
    <div className="App">
    <Switch>
    {routes}
     {routeslogin}
    </Switch>
    </div>
  );
}
// const mapStateProps = (state) => {
//   return {
//     isAuthenticated: state.auth.token !== null,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onTryAutoSignup: () => dispatch(actions.authCheckState()),
//   };
// };
// export default connect(mapStateProps,mapDispatchToProps) (App);
export default (App);
