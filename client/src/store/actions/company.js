import * as actionTypes from "./actionType";
import axios from "../../axios-travel";

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
export const getCompany = (id) => {
  return (dispatch) => {
    dispatch(getCompanyStart());
    axios
      .get(`/company/${id}`)
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

export const toggleFollowStart = () => {
    return {
      type: actionTypes.FOLLOWCOMPANY_START,
    };
  };
  export const toggleFollowSuccess = (data) => {
    return {
      type: actionTypes.FOLLOWCOMPANY_SUCCESS,
    };
  };
  export const toggleFollowFail = (error) => {
    return {
      type: actionTypes.FOLLOWCOMPANY_FAIL,
      error: error,
    };
  };
  export const toggleFollow= (id) => {
    return (dispatch) => {
      dispatch(toggleFollowStart());
      axios
        .put(`/customer/detail/followed-companies/${id}`)
        .then((res) => {
          dispatch(toggleFollowSuccess(res.data.data));
          // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(toggleFollowFail(err));
        });
    };
  };
  