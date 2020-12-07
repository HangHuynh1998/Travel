import * as actionTypes from "./actionType";
import axios from "../../axios-travel";



export const getTourOfCompanyStart = () => {
    return {
      type: actionTypes.GETTOUROFCOMPANY_START,
    };
  };
  export const getTourOfCompanySuccess = (data) => {
    return {
      type: actionTypes.GETTOUROFCOMPANY_SUCCESS,
      tourOfCompany:data
    };
  };
  export const getTourOfCompanyFail = (error) => {
    return {
      type: actionTypes.GETTOUROFCOMPANY_FAIL,
      error: error,
    };
  };
  export const getTourOfCompany = (id) => {
    return (dispatch) => {
      dispatch(getTourOfCompanyStart());
      axios
        .get(`/company/${id}/tours`)
        .then((res) => {
          dispatch(getTourOfCompanySuccess(res.data.data));
          // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          dispatch(getTourOfCompanyFail(err));
        });
    };
  };