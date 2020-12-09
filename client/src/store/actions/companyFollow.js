import * as actionTypes from "./actionType";
import axios from "../../axios-travel";

export const getCompanyFollowStart = () => {
  return {
    type: actionTypes.GETCOMPANYFOLLOW_FAIL,
  };
};
export const getCompanyFollowSuccess = (data) => {
  return {
    type: actionTypes.GETCOMPANYFOLLOW_SUCCESS,
    data: data,
  };
};
export const getCompanyFollowFail = (error) => {
  return {
    type: actionTypes.GETCOMPANYFOLLOW_FAIL,
    error: error,
  };
};
export const getCompanyFollow= () => {
  return (dispatch) => {
    dispatch(getCompanyFollowStart());
    axios
      .get(`/customer/detail/followed-companies`)
      .then((res) => {
        dispatch(getCompanyFollowSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getCompanyFollowFail(err));
      });
  };
};