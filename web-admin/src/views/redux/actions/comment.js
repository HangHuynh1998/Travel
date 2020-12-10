import * as actionTypes from "./actionType";
import axios from "../../../axios-travel";
import { deleteCompanyStart } from "./company";


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
  export const deleteCommentStart = () => {
    return {
      type: actionTypes.DELETECOMPANY_START,
    };
  };
  export const deleteCommentSuccess = () => {
    return {
      type: actionTypes.DELETECOMPANY_SUCCESS,
    };
  };
  export const deleteCommentFail = (error) => {
    return {
      type: actionTypes.DELETECOMPANY_FAIL,
      error: error,
    };
  };
  export const deleteComment = (id) => {
    return (dispatch) => {
      dispatch(deleteCommentStart());
      axios
        .delete(`/comment/${id}`)
        .then((res) => {
          dispatch(deleteCommentSuccess(res.data.data));
          // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(deleteCommentFail(err));
        });
    };
  };