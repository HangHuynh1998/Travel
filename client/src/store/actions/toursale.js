import * as actionTypes from "./actionType";
import axios from "../../axios-travel";


export const getToursSaleStart = () => {
    return {
      type: actionTypes.GETTOURSSALE_START,
    };
  };
  export const getToursSaleSuccess = (data) => {
    return {
      type: actionTypes.GETTOURSSALE_SUCCESS,
      datasale: data,
    };
  };
  export const getToursSaleFail = (error) => {
    return {
      type: actionTypes.GETTOURSSALE_FAIL,
      error: error,
    };
  };
  export const getToursSale = (limit) => {
    return (dispatch) => {
      dispatch(getToursSaleStart());
      axios
        .get(`/tour/toursale?status=open&&limit=${limit}`)
        .then((res) => {
          dispatch(getToursSaleSuccess(res.data.data));
          // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(getToursSaleFail(err));
        });
    };
  };