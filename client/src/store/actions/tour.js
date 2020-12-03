import * as actionTypes from "./actionType";
import axios from "../../axios-travel";
import jwt_decode from "jwt-decode";


export const addTourStart = () => {
    return {
      type: actionTypes.ADDTOUR_START,
    };
  };
  export const addTourSuccess = () => {
    return {
      type: actionTypes.ADDTOUR_SUCCESS,
    };
  };
  export const addTourFail = (error) => {
    return {
      type: actionTypes.ADDTOUR_FAIL,
      error: error,
    };
  };
  export const addtour = (name,address,phone,birthday,gender,email, password) => {
    return (dispatch) => {
      dispatch(addTourStart());
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
          console.log(res);
          dispatch(addTourSuccess());
         // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(addTourFail(err));
        });
    };
};

export const getToursStart = () => {
    return {
      type: actionTypes.GETTOURS_START,
    };
  };
  export const getToursSuccess = () => {
    return {
      type: actionTypes.GETTOURS_SUCCESS,
    };
  };
  export const getToursFail = (error) => {
    return {
      type: actionTypes.GETTOURS_FAIL,
      error: error,
    };
  };
  export const gettours = (name,address,phone,birthday,gender,email, password) => {
    return (dispatch) => {
      dispatch(getToursStart());
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
          console.log(res);
          dispatch(getToursSuccess());
         // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(getToursFail(err));
        });
    };
};

export const getOneTourStart = () => {
    return {
      type: actionTypes.GETONETOUR_START,
    };
  };
  export const getOneTourSuccess = () => {
    return {
      type: actionTypes.GETONETOUR_SUCCESS,
    };
  };
  export const getOneTourFail = (error) => {
    return {
      type: actionTypes.GETONETOUR_FAIL,
      error: error,
    };
  };
  export const getOneTour = (name,address,phone,birthday,gender,email, password) => {
    return (dispatch) => {
      dispatch(getOneTourStart());
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
          console.log(res);
          dispatch(getOneTourSuccess());
         // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(getOneTourFail(err));
        });
    };
};

export const editTourStart = () => {
    return {
      type: actionTypes.EDITTOUR_START,
    };
  };
  export const editTourSuccess = () => {
    return {
      type: actionTypes.EDITTOUR_SUCCESS,
    };
  };
  export const editTourFail = (error) => {
    return {
      type: actionTypes.EDITTOUR_FAIL,
      error: error,
    };
  };
  export const edittour = (name,address,phone,birthday,gender,email, password) => {
    return (dispatch) => {
      dispatch(editTourStart());
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
          console.log(res);
          dispatch(editTourSuccess());
         // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(editTourFail(err));
        });
    };
};

export const deleteTourStart = () => {
    return {
      type: actionTypes.DELETETOUR_START,
    };
  };
  export const deleteTourSuccess = () => {
    return {
      type: actionTypes.DELETETOUR_SUCCESS,
    };
  };
  export const deleteTourFail = (error) => {
    return {
      type: actionTypes.DELETETOUR_FAIL,
      error: error,
    };
  };
  export const deletetour = (name,address,phone,birthday,gender,email, password) => {
    return (dispatch) => {
      dispatch(deleteTourStart());
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
          console.log(res);
          dispatch(deleteTourSuccess());
         // dispatch(checkAuthTimeout(res.data.expiresIn));
        })
        .catch((err) => {
          console.log(err);
          dispatch(deleteTourFail(err));
        });
    };
};
