import * as actionTypes from "./actionType";
import axios from "../../../axios-travel";


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
  export const getCustomer = (limit) => {
    return (dispatch) => {
      dispatch(getCustomerStart());
      axios
        .get(`/customer`)
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

  export const deleteCustomerStart = () => {
    return {
      type: actionTypes.DELETECUSTOMER_START,
    };
  };
  export const deleteCustomerSuccess = () => {
    return {
      type: actionTypes.DELETECUSTOMER_SUCCESS,
    };
  };
  export const deleteCustomerFail = (error) => {
    return {
      type: actionTypes.DELETECUSTOMER_FAIL,
      error: error,
    };
  };
  export const deleteCustomer= (id) => {
    return (dispatch) => {
      dispatch(deleteCustomerStart());
      axios
        .delete(`/customer/${id}`)
        .then((res) => {
          dispatch(deleteCustomerSuccess(res.data.data));
          // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(deleteCustomerFail(err));
        });
    };
  };