import * as actionTypes from "./actionType";
import axios from "../../axios-travel";

export const getCustomerStart = () => {
  return {
    type: actionTypes.GETCUSTOMER_START,
  };
};
export const getCustomerSuccess = (data) => {
  return {
    type: actionTypes.GETCUSTOMER_SUCCESS,
    data: data,
  };
};
export const getCustomerFail = (error) => {
  return {
    type: actionTypes.GETCUSTOMER_FAIL,
    error: error,
  };
};
export const getCustomer = (id) => {
    console.log("wwww");
  return (dispatch) => {
    dispatch(getCustomerStart());
    axios
      .get(`/customer/user_id/${id}`)
      .then((res) => {
        dispatch(getCustomerSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getCustomerFail(err));
      });
  };
};