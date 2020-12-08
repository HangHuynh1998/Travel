import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  data: null,
  loadingChange:"loading"
};

const getUserStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const getUserSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    error: null,
    loading: "success",
  };
};
const getUserFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: "error",
  };
};

const editUserStart = (state, action) => {
  return { ...state, error: null, loadingChange: "loading" };
};
const editUserSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    loadingChange: "success",
  };
};
const editUserFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loadingChange: "error",
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETUSER_START:
      return getUserStart(state, action);
    case actionTypes.GETUSER_SUCCESS:
      return getUserSuccess(state, action);
    case actionTypes.GETUSER_FAIL:
      return getUserFail(state, action);
    case actionTypes.EDITUSER_START:
      return editUserStart(state, action);
    case actionTypes.EDITUSER_SUCCESS:
      return editUserSuccess(state, action);
    case actionTypes.EDITUSER_FAIL:
      return editUserFail(state, action);
    default:
      return state;
  }
};
export default reducer;
