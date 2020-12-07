import * as actionTypes from "./actionType";
import axios from "../../axios-travel";

export const getOneTourStart = () => {
    return {
      type: actionTypes.GETONETOUR_START,
    };
  };
  export const getOneTourSuccess = (data) => {
    return {
      type: actionTypes.GETONETOUR_SUCCESS,
      tourdetail:data
    };
  };
  export const getOneTourFail = (error) => {
    return {
      type: actionTypes.GETONETOUR_FAIL,
      error: error,
    };
  };
  export const getOneTour = (id) => {
    return (dispatch) => {
      dispatch(getOneTourStart());
      axios
        .post(`/tour/${id}`)
        .then((res) => {
          dispatch(getOneTourSuccess(res.data.data));
          // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          dispatch(getOneTourFail(err));
        });
    };
  };
  