import * as actionTypes from "./actionType";
import axios from "../../axios-travel";

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
export const addtour = (
  name,
  category_id,
  place,
  numberpeople,
  price,
  image,
  startdate,
  enddate,
  contactInformation,
  description
) => {
  return (dispatch) => {
    dispatch(addTourStart());
    const data = {
      name: name,
      category_id: category_id,
      place: place,
      numberPeople: numberpeople,
      price: price,
      image: image,
      startDate: startdate,
      endDate: enddate,
      contactInformation: contactInformation,
      description: description,
    };
    console.log("data", data);
    axios
      .post("/tour", data)
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
export const getToursSuccess = (data) => {
  return {
    type: actionTypes.GETTOURS_SUCCESS,
    data: data,
  };
};
export const getToursFail = (error) => {
  return {
    type: actionTypes.GETTOURS_FAIL,
    error: error,
  };
};
export const gettours = (limit) => {
  return (dispatch) => {
    dispatch(getToursStart());
    axios
      .get(`/tour?limit=${limit}&&status=open`)
      .then((res) => {
        console.log(res);
        dispatch(getToursSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getToursFail(err));
      });
  };
};
export const gettoursCategory = (category_id) => {
  return (dispatch) => {
    dispatch(getToursStart());
    axios
      .get(`/tour/?searchCategory${category_id}`)
      .then((res) => {
        console.log(res);
        dispatch(getToursSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getToursFail(err));
      });
  };
};
export const getToursPlaceStart = () => {
  return {
    type: actionTypes.GETTOURSPLACE_START,
  };
};
export const getToursPlaceSuccess = (data) => {
  return {
    type: actionTypes.GETTOURSPLACE_SUCCESS,
    data: data,
  };
};
export const getToursPlaceFail = (error) => {
  return {
    type: actionTypes.GETTOURSPLACE_FAIL,
    error: error,
  };
};
export const gettoursPlace = (place) => {
  return (dispatch) => {
    dispatch(getToursPlaceStart());
    const data = {
      searchPlace:place
    }
    axios
      .get(`/tour/place?status=open`,data)
      .then((res) => {
        console.log(res);
        dispatch(getToursPlaceSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getToursPlaceFail(err));
      });
  };
};

export const getToursPriceStart = () => {
  return {
    type: actionTypes.GETTOURSPRICE_START,
  };
};
export const getToursPriceSuccess = (data) => {
  return {
    type: actionTypes.GETTOURSPRICE_SUCCESS,
    data: data,
  };
};
export const getToursPriceFail = (error) => {
  return {
    type: actionTypes.GETTOURSPRICE_FAIL,
    error: error,
  };
};
export const getToursPrice = (price) => {
  return (dispatch) => {
    dispatch(getToursPriceStart());
    const data = {
      searchPrice:price
    }
    axios
      .get(`/tour/price?status=open`,data)
      .then((res) => {
        console.log(res);
        dispatch(getToursPriceSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getToursPriceFail(err));
      });
  };
};

export const getToursNameStart = () => {
  return {
    type: actionTypes.GETTOURSNAME_START,
  };
};
export const getToursNameSuccess = (data) => {
  return {
    type: actionTypes.GETTOURSNAME_SUCCESS,
    dataname: data,
  };
};
export const getToursNameFail = (error) => {
  return {
    type: actionTypes.GETTOURSNAME_FAIL,
    error: error,
  };
};
export const getToursName = (name) => {
  return (dispatch) => {
    dispatch(getToursNameStart());
    const data = {
      searchName:name
    }
    axios
      .get(`/tour/name?status=open`,data)
      .then((res) => {
        console.log(res);
        dispatch(getToursNameSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getToursNameFail(err));
      });
  };
};

export const getToursCompanyStart = () => {
  return {
    type: actionTypes.GETTOURSCOMPANY_START,
  };
};
export const getToursCompanySuccess = (data) => {
  return {
    type: actionTypes.GETTOURSCOMPANY_SUCCESS,
    datacompany: data,
  };
};
export const getToursCompanyFail = (error) => {
  return {
    type: actionTypes.GETTOURSCOMPANY_FAIL,
    error: error,
  };
};
export const getToursCompany = (company) => {
  return (dispatch) => {
    dispatch(getToursCompanyStart());
    const data = {
      searchCompany:company
    }
    axios
      .get(`/tour/company?status=open`,data)
      .then((res) => {
        console.log(res);
        dispatch(getToursCompanySuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getToursCompanyFail(err));
      });
  };
};


export const getToursSaleStart = () => {
  return {
    type: actionTypes.GETTOURSSALE_START,
  };
};
export const getToursSaleSuccess = (data) => {
  return {
    type: actionTypes.GETTOURSSALE_SUCCESS,
    data: data,
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
    const data = {
      limit:limit
    }
    axios
      .get(`/tour/toursale?status=open`,data)
      .then((res) => {
        console.log("res",res);
        dispatch(getToursSaleSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getToursSaleFail(err));
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
export const getOneTour = (
  name,
  address,
  phone,
  birthday,
  gender,
  email,
  password
) => {
  return (dispatch) => {
    dispatch(getOneTourStart());
    const data = {
      name: name,
      email: email,
      password: password,
      birthday: birthday,
      gender: gender,
      address: address,
      phone: phone,
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
export const edittour = (
  name,
  address,
  phone,
  birthday,
  gender,
  email,
  password
) => {
  return (dispatch) => {
    dispatch(editTourStart());
    const data = {
      name: name,
      email: email,
      password: password,
      birthday: birthday,
      gender: gender,
      address: address,
      phone: phone,
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
export const deletetour = (
  name,
  address,
  phone,
  birthday,
  gender,
  email,
  password
) => {
  return (dispatch) => {
    dispatch(deleteTourStart());
    const data = {
      name: name,
      email: email,
      password: password,
      birthday: birthday,
      gender: gender,
      address: address,
      phone: phone,
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
