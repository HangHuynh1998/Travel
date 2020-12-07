import * as actionTypes from "../actions/actionType";

const initialState = {
  data: null,
  error: null,
  loading: "loading",
  datasale: null,
  loadingsale: "loading",
  dataplace: null,
  loadingplace: "loading",
  datacompany: null,
  loadingcompany: "loading",
  dataprice: null,
  loadingprice: "loading",
  dataname: null,
  loadingname: "loading",
};

const addTourStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const addTourSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    error: null,
    loading: "success",
  };
};
const addTourFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: "error",
  };
};

const getToursStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const getToursSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    error: null,
    loading: "success",
    dataplace: null,
    datacompany: null,
    dataprice: null,
    dataname: null,
    datasale:null
  };
};
const getToursFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: "error",
  };
};
const getToursPlaceStart = (state, action) => {
  return { ...state, error: null, loadingplace: "loading" };
};
const getToursPlaceSuccess = (state, action) => {
  return {
    ...state,
    dataplace: action.dataplace,
    error: null,
    loadingplace: "success",
    data: null,
    datacompany: null,
    dataprice: null,
    dataname: null,
    datasale: null
  };
};
const getToursPlaceFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loadingplace: "error",
  };
};
const getToursNameStart = (state, action) => {
  return { ...state, error: null, loadingname: "loading" };
};
const getToursNameSuccess = (state, action) => {
  console.log("jajaja", action.data);
  return {
    ...state,
    dataname: action.dataname,
    error: null,
    loadingname: "success",
    data: null,
    datacompany: null,
    dataprice: null,
    dataplace: null,
    datasale: null
  };
};
const getToursNameFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loadingname: "error",
  };
};
const getToursPriceStart = (state, action) => {
  return { ...state, error: null, loadingprice: "loading" };
};
const getToursPriceSuccess = (state, action) => {
  console.log("jajaja", action.data);
  return {
    ...state,
    dataprice: action.dataprice,
    error: null,
    loadingprice: "success",
    data: null,
    datacompany: null,
    dataname: null,
    dataplace: null,
    datasale: null
  };
};
const getToursPriceFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loadingprice: "error",
  };
};
const getToursCompanyStart = (state, action) => {
  return { ...state, error: null, loadingcompany: "loading" };
};
const getToursCompanySuccess = (state, action) => {
  return {
    ...state,
    datacompany: action.datacompany,
    error: null,
    loadingcompany: "success",
    data: null,
    dataname: null,
    dataprice: null,
    dataplace: null,
    datasale: null
  };
};
const getToursCompanyFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: "error",
  };
};
const getToursSaleStart = (state, action) => {
  return { ...state, error: null, loadingsale: "loading" };
};
const getToursSaleSuccess = (state, action) => {
  return {
    ...state,
    datasale: action.datasale,
    error: null,
    loadingsale: "success",
    data: null,
    dataname: null,
    dataprice: null,
    dataplace: null,
    datacompany: null
  };
};
const getToursSaleFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loadingsale: "error",
  };
};

const editTourStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const editTourSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    error: null,
    loading: "success",
  };
};
const editTourFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: "error",
  };
};

const deleteTourStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const deleteTourSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    error: null,
    loading: "success",
  };
};
const deleteTourFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: "error",
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADDTOUR_START:
      return addTourStart(state, action);
    case actionTypes.ADDTOUR_SUCCESS:
      return addTourSuccess(state, action);
    case actionTypes.ADDTOUR_FAIL:
      return addTourFail(state, action);
    case actionTypes.GETTOURS_START:
      return getToursStart(state, action);
    case actionTypes.GETTOURS_SUCCESS:
      return getToursSuccess(state, action);
    case actionTypes.GETTOURS_FAIL:
      return getToursFail(state, action);
    case actionTypes.GETTOURSPLACE_START:
      return getToursPlaceStart(state, action);
    case actionTypes.GETTOURSPLACE_SUCCESS:
      return getToursPlaceSuccess(state, action);
    case actionTypes.GETTOURSPLACE_FAIL:
      return getToursPlaceFail(state, action);
    case actionTypes.GETTOURSPRICE_START:
      return getToursPriceStart(state, action);
    case actionTypes.GETTOURSPRICE_SUCCESS:
      return getToursPriceSuccess(state, action);
    case actionTypes.GETTOURSPRICE_FAIL:
      return getToursPriceFail(state, action);
    case actionTypes.GETTOURSNAME_START:
      return getToursNameStart(state, action);
    case actionTypes.GETTOURSNAME_SUCCESS:
      return getToursNameSuccess(state, action);
    case actionTypes.GETTOURSNAME_FAIL:
      return getToursNameFail(state, action);
    case actionTypes.GETTOURSCOMPANY_START:
      return getToursCompanyStart(state, action);
    case actionTypes.GETTOURSCOMPANY_SUCCESS:
      return getToursCompanySuccess(state, action);
    case actionTypes.GETTOURSCOMPANY_FAIL:
      return getToursCompanyFail(state, action);
    case actionTypes.EDITTOUR_START:
      return editTourStart(state, action);
    case actionTypes.EDITTOUR_SUCCESS:
      return editTourSuccess(state, action);
    case actionTypes.EDITTOUR_FAIL:
      return editTourFail(state, action);
    case actionTypes.DELETETOUR_START:
      return deleteTourStart(state, action);
    case actionTypes.DELETETOUR_SUCCESS:
      return deleteTourSuccess(state, action);
    case actionTypes.DELETETOUR_FAIL:
      return deleteTourFail(state, action);
      case actionTypes.GETTOURSSALE_START:
        return getToursSaleStart(state, action);
      case actionTypes.GETTOURSSALE_SUCCESS:
        return getToursSaleSuccess(state, action);
      case actionTypes.GETTOURSSALE_FAIL:
        return getToursSaleFail(state, action);
    default:
      return state;
  }
};
export default reducer;
