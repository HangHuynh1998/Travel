import React, { useReducer } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
// import burgerBuilderReducer from "./store/reducers/burgerBuilder";
// import orderReducer from "./store/reducers/order";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "./styles/main.css";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import authReducer from "./store/reducers/auth";
import tourReducer from "./store/reducers/tour";
import categoryReducer from './store/reducers/category'
import commentReducer from './store/reducers/comment'
import tourDetailReducer from './store/reducers/tourdetail'
import tourOfCompanyReducer from './store/reducers/tourofcompany'
import tourSaleReducer from './store/reducers/toursale'
import userReducer from './store/reducers/user'
import changePassReducer from './store/reducers/changePass'
import saveTourReducer from './store/reducers/saveTour'
import companyReducer from './store/reducers/company'
import companyFollowReducer from './store/reducers/companyFollow'
import bookTourReducer from './store/reducers/bookTour'
import { createHashHistory } from "history";
const history = createHashHistory()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  tour: tourReducer,
  auth: authReducer,
  category: categoryReducer,
  comment:commentReducer,
  tourdetail:tourDetailReducer,
  tourOfCompany:tourOfCompanyReducer,
  toursale:tourSaleReducer,
  user:userReducer,
  changePass:changePassReducer,
  saveTour: saveTourReducer,
  company:companyReducer,
  companyFollow: companyFollowReducer,
  bookTour:bookTourReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
const app = (
  <Provider store={store}>
    <BrowserRouter history = {history}>
      <App />
    </BrowserRouter>
  </Provider>
);
ReactDOM.render(app, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
