import * as actionTypes from "./actionType";
import axios from "../../axios-travel";

export const getCommentStart = () => {
  return {
    type: actionTypes.GETCOMMENT_START,
  };
};
export const getCommentSuccess = (data) => {
  return {
    type: actionTypes.GETCOMMENT_SUCCESS,
    datacomment: data
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
      .get(`/comment?limit=${limit}&&status=open`)
      .then((res) => {
        dispatch(getCommentSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(getCommentFail(err));
      });
  };
};

export const addCommentStart = () => {
  return {
    type: actionTypes.ADDCOMMENT_START,
  };
};
export const addCommentSuccess = () => {
  return {
    type: actionTypes.ADDTOUR_SUCCESS,
  };
};
export const addCommentFail = (error) => {
  return {
    type: actionTypes.ADDTOUR_FAIL,
    error: error,
  };
};
export const addComment= (
  name,
  title,
  image,
  comment
) => {
  return (dispatch) => {
    dispatch(addCommentStart());
    const data = {
      name: name,
  title:title,
  image:image,
  comment:comment,
    };
    axios
      .post("/comment", data)
      .then((res) => {
        dispatch(addCommentSuccess());
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(addCommentFail(err));
      });
  };
};