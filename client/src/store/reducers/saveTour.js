import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  data: [],
  loadingToggle:"loading"
};

const getTourSaveStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const getTourSaveSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    error: null,
    loading: "success",
  };
};
const getTourSaveFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: "error",
  };
};

const toggleSaveTourStart = (state, action) => {
  return { ...state, error: null, loadingToggle: "loading" };
};
const toggleSaveTourSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    loadingToggle: "success",
  };
};
const toggleSaveTourFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loadingToggle: "error",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTOURSAVE_START:
      return getTourSaveStart(state, action);
    case actionTypes.GETTOURSAVE_SUCCESS:
      return getTourSaveSuccess(state, action);
    case actionTypes.GETTOURSAVE_FAIL:
      return getTourSaveFail(state, action);
    case actionTypes.SAVETOUR_START:
      return toggleSaveTourStart(state, action);
    case actionTypes.SAVETOUR_SUCCESS:
      return toggleSaveTourSuccess(state, action);
    case actionTypes.SAVETOUR_FAIL:
      return toggleSaveTourFail(state, action);
    default:
      return state;
  }
};
export default reducer;
