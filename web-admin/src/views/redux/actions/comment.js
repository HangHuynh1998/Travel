import * as actionTypes from "./actionType";
import axios from "../../../axios-travel";


export const getCommentStart = () => {
    return {
      type: actionTypes.GETCOMMENT_START,
    };
  };
  export const getCommentSuccess = (data) => {
    return {
      type: actionTypes.GETCOMMENT_SUCCESS,
      data: data,
    };
  };
  export const getCommentFail = (error) => {
    return {
      type: actionTypes.GETCOMMENT_FAIL,
      error: error,
    };
  };
  export const getComment = (limit) => {
    return (dispatch) => {
      dispatch(getCommentStart());
      axios
        .get(`/comment`)
        .then((res) => {
          dispatch(getCommentSuccess(res.data.data));
          // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(getCommentFail(err));
        });
    };
  };