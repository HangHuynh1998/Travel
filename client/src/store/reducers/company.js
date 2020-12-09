import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  data: null,
  loadingFollow:"loading"
};

const getCompanyStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const getCompanySuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    error: null,
    loading: "success",
  };
};
const getCompanyFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: "error",
  };
};
const toggleFollowStart = (state, action) => {
  return { ...state, error: null, loadingFollow: "loading" };
};
const toggleFollowSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    loadingFollow: "success",
  };
};
const toggleFollowFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loadingFollow: "error",
  };
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETCOMPANY_START:
      return getCompanyStart(state, action);
    case actionTypes.GETCOMPANY_SUCCESS:
      return getCompanySuccess(state, action);
    case actionTypes.GETCOMPANY_FAIL:
      return getCompanyFail(state, action);
    case actionTypes.FOLLOWCOMPANY_START:
      return toggleFollowStart(state, action);
    case actionTypes.FOLLOWCOMPANY_SUCCESS:
      return toggleFollowSuccess(state, action);
    case actionTypes.FOLLOWCOMPANY_FAIL:
      return toggleFollowFail(state, action);
    default:
      return state;
  }
};
export default reducer;
