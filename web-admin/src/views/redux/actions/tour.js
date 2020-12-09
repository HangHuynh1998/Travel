import * as actionTypes from "./actionType";
import axios from "../../../axios-travel";


export const getTourStart = () => {
    return {
      type: actionTypes.GETTOUR_START,
    };
  };
  export const getTourSuccess = (data) => {
    return {
      type: actionTypes.GETTOUR_SUCCESS,
      data: data,
    };
  };
  export const getTourFail = (error) => {
    return {
      type: actionTypes.GETTOUR_FAIL,
      error: error,
    };
  };
  export const getTour = (limit) => {
    return (dispatch) => {
      dispatch(getTourStart());
      axios
        .get(`/tour`)
        .then((res) => {
          dispatch(getTourSuccess(res.data.data));
          // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(getTourFail(err));
        });
    };
  };