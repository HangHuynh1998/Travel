import * as actionTypes from "./actionType";
import axios from "../../axios-travel";
import jwt_decode from "jwt-decode";


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
  export const bookTour = (name,address,phone,email,requirement,userId,tourId,nameTour) => {
    return (dispatch) => {
      dispatch(bookTourStart());
      const data = {
        name:name,
        email: email,
        address:address,
        phone:phone,
        requirement: requirement,
        userId:userId,
        tourId:tourId,
        nameTour:nameTour,
      };
      axios
        .post("/booktour", data)
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