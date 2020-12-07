import { Switch, Route } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";
import Register from "./container/Register";
import About from "./container/About";
import Review from "./container/Review";
import { connect } from "react-redux";
import BookTour from "./container/BookTour";
import Travel from "./container/Travel";
import AddTour from "./container/AddTour";
import TourDetail from "./container/TourDetail";
import CompanyDetail from "./container/CompanyDetail";
import AddReview from "./container/AddReview";
import ProfileCompany from "./container/ProfileCompany";
import ProfileCustomer from "./container/ProfileCustomer";
import ManagerTourCustomer from "./container/ManagerTourCustomer";
import ManagerTourCompany from "./container/ManagerTourCompany";
import EditTour from "./container/EditTour";
import ChangePass from "./container/ChangePass";
import ChangeProfileCompany from "./container/ChangeProfileCompany";
import ChangeProfileCustomer from "./container/ChangeProfileCustomer";
import { Component } from "react";
import jwt_decode from "jwt-decode";
function NotFound() {
  return (
    <div>
      <h1>404 - NOT FOUND</h1>
    </div>
  );
}
class App extends Component {
  constructor() {
    super();
    this.state = {
      role: null,
      status: "",
      name:"",
      user_id:"",
    };
    this.initState = this.initState.bind(this);
  }
  componentDidMount() {
      this.initState();
  }
  componentDidUpdate(prevProps) {
    if (
      prevProps.loading !== this.props.loading ||
      this.props.loading === "sucess"
    ) {
      this.initState();
    }
  }
  initState() {
    if (localStorage.getItem("token")) {
      let role = jwt_decode(localStorage.getItem("token")).user_id.role;
      let name = jwt_decode(localStorage.getItem("token")).user_id.name;
      let user_id = jwt_decode(localStorage.getItem("token")).user_id._id;
      this.setState({ role: role,name:name,user_id:user_id });
    }
  }
  render() {
    console.log("App",this.props.isAuthenticated);
    let routes = (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/about" component={About} />
        <Route path="/review" component={Review} />
        <Route path="/travel" component={Travel} />
        <Route path="/tourDetail/:tour_id" render={() => <TourDetail role = {this.state.role} user_id ={this.state.user_id}/>}/>
        <Route path="/companyDetail/:company_id" component={CompanyDetail} />
        {this.state.role === "customer" && (
          <>
            <Route path="/booktour/:tour_id" component={BookTour} />
            <Route path="/profileCustomer/:_id" component={ProfileCustomer} />
            <Route
              path="/managerCustomer/:_id"
              component={ManagerTourCustomer}
            />
            <Route
              path="/changeProfileCustomer/:_id"
              component={ChangeProfileCustomer}
            />
            <Route path="/addReview" component={AddReview} />
          </>
        )}
        {this.state.role === "company" && (
          <>
            <Route path="/profileCompany/:_id" component={ProfileCompany} />

            <Route path="/managerCompany/:_id" component={ManagerTourCompany} />
            <Route path="/editTour/:_id" component={EditTour} />
            <Route
              path="/changeProfileCompany/:_id"
              component={ChangeProfileCompany}
            />

            <Route path="/addtour" render={() => <AddTour name = {this.state.name} user_id ={this.state.user_id} />} />
          </>
        )}

        {this.props.isAuthenticated && (
          <Route path="/changePass/:_id" component={ChangePass} />
        )}

        <Route component={NotFound} />
      </Switch>
    );
    return (
      <div className="App">
        <Switch>{routes}</Switch>
      </div>
    );
  }
}
const mapStateProps = (state) => {
  return {
    loading: state.auth.loading,
    isAuthenticated: localStorage.getItem("token") !== null,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    //onTryAutoSignup: () => dispatch(actions.authCheckState()),
  };
};
export default connect(mapStateProps, mapDispatchToProps)(App);
