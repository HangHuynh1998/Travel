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
    axios
      .post("/tour", data)
      .then((res) => {
        dispatch(addTourSuccess());
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
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
  console.log("getour success",data);
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
        dispatch(getToursSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
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
        dispatch(getToursSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
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
    // dataplace: data,
    data:data
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
    axios
      .get(`/tour/place?status=open&&place${place}`)
      .then((res) => {
        dispatch(getToursPlaceSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
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
    // dataprice: data,
    data:data
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
    axios
      .get(`/tour/price?status=open&&price${price}`)
      .then((res) => {
        dispatch(getToursPriceSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
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
    // dataname: data,
    data:data
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
    axios
      .get(`/tour/name?status=open&&name${name}`,)
      .then((res) => {
        dispatch(getToursNameSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
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
    // datacompany: data,
    data:data
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
    axios
      .get(`/tour/company?status=open&&company${company}`)
      .then((res) => {
        dispatch(getToursCompanySuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(getToursCompanyFail(err));
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
  id,
  name,
  category_id,
  place,
  numberpeople,
  price,
  image,
  startdate,
  enddate,
  contactInformation,
  description,
  sale
) => {
  return (dispatch) => {
    dispatch(editTourStart());
    const data = {
      name:name,
      category_id:category_id,
      place:place,
      numberPeople:numberpeople,
      price:price,
      image:image,
      startDate:startdate,
      endDate:enddate,
      contactInformation:contactInformation,
      description:description,
      sale:sale
    };
    axios
      .put(`/tour/${id}`, data)
      .then((res) => {
        dispatch(editTourSuccess());
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(editTourFail(err));
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
    // datasale: data,
    data:data
  };
};
export const getToursSaleFail = (error) => {
  return {
    type: actionTypes.GETTOURSSALE_FAIL,
    error: error,
  };
};
export const getToursSale = () => {
  console.log("dddddd");
  return (dispatch) => {
    dispatch(getToursSaleStart());
    axios
      .get(`/tour/toursale?status=open`)
      .then((res) => {
        dispatch(getToursSaleSuccess(res.data.data));
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        console.log(err);
        dispatch(getToursSaleFail(err));
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
id
) => {
  return (dispatch) => {
    dispatch(deleteTourStart());
    axios
      .delete(`/tour/${id}`)
      .then((res) => {
        dispatch(deleteTourSuccess());
        // dispatch(checkAuthTimeout(res.data.expiresIn));
      })
      .catch((err) => {
        dispatch(deleteTourFail(err));
      });
  };
};
