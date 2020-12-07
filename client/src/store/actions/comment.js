import * as actionTypes from "./actionType";
import axios from "../../axios-travel";

export const getCommentStart = () => {
  return {
    type: actionTypes.ADDTOUR_START,
  };
};
export const getCommentSuccess = (data) => {
  return {
    type: actionTypes.ADDTOUR_SUCCESS,
    datacomment: data
  };
};
export const getCommentFail = (error) => {
  return {
    type: actionTypes.ADDTOUR_FAIL,
    error: error,
  };
};
export const getComment = (limit) => {
  return (dispatch) => {
    dispatch(getCommentStart());
    axios
      .get(`/comment?limit=${limit}&&status=open`)
      .then((res) => {
        console.log(res);
        dispatch(getCommentSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getCommentFail(err));
      });
  };
};
