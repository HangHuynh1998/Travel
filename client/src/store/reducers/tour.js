import * as actionTypes from "../actions/actionType";

const initialState = {
  data:null,
  error: null,
  loading: "loading",
};


const addTourStart = (state, action) => {
    return {...state, error: null, loading: "loading" };
  };
  const addTourSuccess = (state, action) => {
    return{
      ...state,
      data: action.data,
      error: null,
      loading: "success",
  }};
  const addTourFail = (state, action) => {
    return{
      ...state,
      error: action.error,
      loading: "error",
    }
  };

  const getToursStart = (state, action) => {
    return {...state, error: null, loading: "loading" };
  };
  const getToursSuccess = (state, action) => {
    return{
      ...state,
      data: action.data,
      error: null,
      loading: "success",
  }};
  const getToursFail = (state, action) => {
    return{
      ...state,
      error: action.error,
      loading: "error",
    }
  };

  const getOneTourStart = (state, action) => {
    return {...state, error: null, loading: "loading" };
  };
  const getOneTourSuccess = (state, action) => {
    return{
      ...state,
      data: action.data,
      error: null,
      loading: "success",
  }};
  const getOneTourFail = (state, action) => {
    return{
      ...state,
      error: action.error,
      loading: "error",
    }
  };

  const editTourStart = (state, action) => {
    return {...state, error: null, loading: "loading" };
  };
  const editTourSuccess = (state, action) => {
    return{
      ...state,
      data: action.data,
      error: null,
      loading: "success",
  }};
  const editTourFail = (state, action) => {
    return{
      ...state,
      error: action.error,
      loading: "error",
    }
  };

  const deleteTourStart = (state, action) => {
    return {...state, error: null, loading: "loading" };
  };
  const deleteTourSuccess = (state, action) => {
    return{
      ...state,
      data: action.data,
      error: null,
      loading: "success",
  }};
  const deleteTourFail = (state, action) => {
    return{
      ...state,
      error: action.error,
      loading: "error",
    }
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
      case actionTypes.GETONETOUR_START:
        return getOneTourStart(state, action);
      case actionTypes.GETONETOUR_SUCCESS:
        return getOneTourSuccess(state, action);
        case actionTypes.GETONETOUR_FAIL:
        return getOneTourFail(state, action);
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
  
      default:
        return state;
    }
  };
  export default reducer;

