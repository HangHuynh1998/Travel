import * as actionTypes from "./actionType";
import axios from "../../../axios-travel";


export const getCompanyStart = () => {
    return {
      type: actionTypes.GETCOMPANY_START,
    };
  };
  export const getCompanySuccess = (data) => {
    return {
      type: actionTypes.GETCOMPANY_SUCCESS,
      data: data,
    };
  };
  export const getCompanyFail = (error) => {
    return {
      type: actionTypes.GETCOMPANY_FAIL,
      error: error,
    };
  };
  export const getCompany = (limit) => {
    return (dispatch) => {
      dispatch(getCompanyStart());
      axios
        .get(`/company`)
        .then((res) => {
          dispatch(getCompanySuccess(res.data.data));
          // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(getCompanyFail(err));
        });
    };
  };