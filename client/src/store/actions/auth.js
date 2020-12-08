import * as actionTypes from "./actionType";
import axios from "../../axios-travel";
import jwt_decode from "jwt-decode";
export const authStart = () => {
  return {
    type: actionTypes.AUTH_START,
  };
};
export const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    //authData: authData,
    token: token,
    userId: userId,
  };
};
export const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error,
  };
};
export const registerStart = () => {
  return {
    type: actionTypes.REGISTER_START,
  };
};
export const registerSuccess = () => {
  return {
    type: actionTypes.REGISTER_SUCCESS,
  };
};
export const registerFail = (error) => {
  return {
    type: actionTypes.REGISTER_FAIL,
    error: error,
  };
};
export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationTime");
  localStorage.removeItem("userId");
  return {
    type: actionTypes.AUTH_LOGOUT,
  };
};
// export const checkAuthTimeout = (expirationTime) => {
//   return (dispatch) => {
//     setTimeout(() => {
//       dispatch(logout());
//     }, expirationTime * 1000);
//   };
// };
export const auth = (email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const authData = {
      email: email,
      password: password,
      returnSecureToken: true,
    };
    axios
      .post("/auth/login", authData)
      .then((res) => {
        const expirationDate = new Date(
          new Date().getTime() + res.data.expiresIn * 1000
        );
        localStorage.setItem("token", res.data.data.token);
        const userId = jwt_decode(res.data.data.token).user_id._id
        localStorage.setItem("expirationDate", expirationDate);
        localStorage.setItem("userId", userId);
        dispatch(authSuccess(res.data.data.token, res.data.localId));
       // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};
export const registerCustomer = (name,address,phone,birthday,gender,email, password) => {
  return (dispatch) => {
    dispatch(authStart());
    const data = {
      name:name,
      email: email,
      password: password,
      birthday: birthday,
      gender: gender,
      address:address,
      phone:phone,
    };
    axios
      .post("/auth/register/customer", data)
      .then((res) => {
        dispatch(authSuccess());
       // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};
export const registerCompany = (name,address,phone,avatar,email, password,description) => {
  return (dispatch) => {
    dispatch(authStart());
    const data = {
      name:name,
      email: email,
      password: password,
      address: address,
      phone: phone,
      avatar: avatar,
      description: description  
    };
    axios
      .post("/auth/register/company", data)
      .then((res) => {
        dispatch(authSuccess());
       // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(authFail(err));
      });
  };
};

export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");
    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));
      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        const userId = localStorage.getItem("userId");

        dispatch(authSuccess(token, userId));
        // dispatch(
        //   checkAuthTimeout(
        //     (expirationDate.getTime() - new Date().getTime()) / 1000
        //   )
        // );
      }
    }
  };
};
