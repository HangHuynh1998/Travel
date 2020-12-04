import * as actionTypes from "./actionType";
import axios from "../../axios-travel";


export const getCategoryStart = () => {
    return {
      type: actionTypes.GETCATEGORY_START,
    };
  };
  export const getCategorySuccess = () => {
    return {
      type: actionTypes.GETCATEGORY_SUCCESS,
    };
  };
  export const getCategoryFail = (error) => {
    return {
      type: actionTypes.GETCATEGORY_FAIL,
      error: error,
    };
  };
  export const getCategory = () => {
    return (dispatch) => {
      dispatch(getCategoryStart());
      axios
        .get("/category")
        .then((res) => {
          console.log(res);
          dispatch(getCategorySuccess(res));
         // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(getCategoryFail(err));
        });
    };
};
