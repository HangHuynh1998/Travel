import * as actionTypes from "./actionType";
import axios from "../../axios-travel";

export const getUserStart = () => {
  return {
    type: actionTypes.GETUSER_START,
  };
};
export const getUserSuccess = (data) => {
  return {
    type: actionTypes.GETUSER_SUCCESS,
    data: data,
  };
};
export const getUserFail = (error) => {
  return {
    type: actionTypes.GETUSER_FAIL,
    error: error,
  };
};
export const getUser = () => {
  return (dispatch) => {
    dispatch(getUserStart());
    axios
      .get(`/users/detail`)
      .then((res) => {
        dispatch(getUserSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getUserFail(err));
      });
  };
};

export const editUserStart = () => {
  return {
    type: actionTypes.EDITUSER_START,
  };
};
export const editUserSuccess = (data) => {
  return {
    type: actionTypes.EDITUSER_SUCCESS,
  };
};
export const editUserFail = (error) => {
  return {
    type: actionTypes.EDITUSER_FAIL,
    error: error,
  };
};
export const editUser = (name, email, address, phone, avatar, description) => {
  return (dispatch) => {
    dispatch(editUserStart());
    const data = {
      name: name,
      email: email,
      address: address,
      phone: phone,
      avatar: avatar,
      description: description,
    };
    axios
      .put(`/users/update`, data)
      .then((res) => {
        dispatch(editUserSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(editUserFail(err));
      });
  };
};
