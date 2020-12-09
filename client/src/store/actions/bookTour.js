import * as actionTypes from "./actionType";
import axios from "../../axios-travel";


export const bookTourStart = () => {
    return {
      type: actionTypes.BOOKTOUR_START,
    };
  };
  export const bookTourSuccess = () => {
    return {
      type: actionTypes.BOOKTOUR_SUCCESS,
    };
  };
  export const bookTourFail = (error) => {
    return {
      type: actionTypes.BOOKTOUR_FAIL,
      error: error,
    };
  };
  export const bookTour = (tour_id,emailcompany,nameCompany,nameTour,nameCustomer,emailCustomer,address,phone,required) => {
    return (dispatch) => {
      dispatch(bookTourStart());
      const data = {
      tour_id:tour_id,
      emailcompany:emailcompany,
      nameCompany:nameCompany,
      nameTour:nameTour,
      nameCustomer:nameCustomer,
      emailCustomer:emailCustomer,
      address:address,
      phone:phone,
      required: required,
    }
    axios.post('/contact/send-refer-friend', data)
        .then((res) => {
          console.log(res);
          dispatch(bookTourSuccess());
         // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(bookTourFail(err));
        });
    };
};