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
  export const deleteTourStart = () => {
    return {
      type: actionTypes.DELETETOUR_START,
    };
  };
  export const deleteTourSuccess = () => {
    return {
      type: actionTypes.DELETETOUR_SUCCESS,
    };
  };
  export const deleteTourFail = (error) => {
    return {
      type: actionTypes.DELETETOUR_FAIL,
      error: error,
    };
  };
  export const deleteTour= (id) => {
    return (dispatch) => {
      dispatch(deleteTourStart());
      axios
        .delete(`/tour/${id}`)
        .then((res) => {
          dispatch(deleteTourSuccess(res.data.data));
          // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(deleteTourFail(err));
        });
    };
  };