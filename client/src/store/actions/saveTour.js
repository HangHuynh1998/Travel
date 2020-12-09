import * as actionTypes from "./actionType";
import axios from "../../axios-travel";

export const getTourSaveStart = () => {
  return {
    type: actionTypes.GETTOURSAVE_START,
  };
};
export const getTourSaveSuccess = (data) => {
  return {
    type: actionTypes.GETTOURSAVE_SUCCESS,
    data: data,
  };
};
export const getTourSaveFail = (error) => {
  return {
    type: actionTypes.GETTOURSAVE_FAIL,
    error: error,
  };
};
export const getTourSave = () => {
  return (dispatch) => {
    dispatch(getTourSaveStart());
    axios
      .get(`/customer/detail/saved-tours`)
      .then((res) => {
        dispatch(getTourSaveSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getTourSaveFail(err));
      });
  };
};

export const togglesaveTourStart = () => {
  return {
    type: actionTypes.SAVETOUR_START,
  };
};
export const togglesaveTourSuccess = (data) => {
  return {
    type: actionTypes.SAVETOUR_SUCCESS,
  };
};
export const togglesaveTourFail = (error) => {
  return {
    type: actionTypes.SAVETOUR_FAIL,
    error: error,
  };
};
export const toggleSaveTour = (id) => {
  return (dispatch) => {
    dispatch(togglesaveTourStart());
    axios
      .put(`/customer/detail/saved-tours/${id}`)
      .then((res) => {
        dispatch(togglesaveTourSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(togglesaveTourFail(err));
      });
  };
};
