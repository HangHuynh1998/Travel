import * as actionTypes from "./actionType";
import axios from "../../axios-travel";

export const changePassStart = () => {
  return {
    type: actionTypes.CHANGEPASS_START,
  };
};
export const changePassSuccess = (data) => {
  return {
    type: actionTypes.CHANGEPASS_SUCCESS,
  };
};
export const changePassFail = (error) => {
  return {
    type: actionTypes.CHANGEPASS_FAIL,
    error: error,
  };
};
export const changePass = (old_pass, new_pass, new_pass_retype) => {
  return (dispatch) => {
    dispatch(changePassStart());
    const data = {
        old_pass:old_pass, new_pass:new_pass, new_pass_retype:new_pass_retype
    };
    console.log(
        "data",data
    );
    axios
      .put(`/users/change-password`, data)
      .then((res) => {
        dispatch(changePassSuccess(res.data.data));
      })
      .catch((res,err) => {
        console.log(err);
        console.log("ressss",res);
        dispatch(changePassFail(err));
      });
  };
};
