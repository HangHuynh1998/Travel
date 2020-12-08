import * as actionTypes from "../actions/actionType";

const initialState = {
  token: null,
  userId: null,
  error: null,
  loading: "loading",
};
const authStart = (state, action) => {
  return {...state, error: null, loading: "loading" };
};
const authSuccess = (state, action) => {
  return{
    ...state,
    token: action.token,
    userId: action.userId,
    error: null,
    loading: "success",
}};
const authFail = (state, action) => {
  return{
    ...state,
    error: action.error,
    loading: "error",
  }
};
const authLogout = (state, action) => {
  return{
    ...state,
    token:null,
    userId:null
  }
};
const setAuthRedirectPath = (state, action) => {
  return{
    ...state,
    authRedirectPath: action.path
  }
};
const registerStart = (state, action) => {
  return {...state, error: null, loading: "loading" };
};
const registerSuccess = (state, action) => {
  return{
    ...state,
    error: null,
    loading: "success",
}};
const registerFail = (state, action) => {
  return{
    ...state,
    error: action.error,
    loading: "error",
  }
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTH_START:
      return authStart(state, action);
    case actionTypes.AUTH_SUCCESS:
      return authSuccess(state, action);
    case actionTypes.AUTH_FAIL:
      return authFail(state, action);
    case actionTypes.AUTH_LOGOUT:
      return authLogout(state, action);
    case actionTypes.SET_AUTH_REDIRECT_PATH:
      return setAuthRedirectPath(state, action);
      case actionTypes.REGISTER_START:
      return registerStart(state, action);
    case actionTypes.REGISTER_SUCCESS:
      return registerSuccess(state, action);
    case actionTypes.REGISTER_FAIL:
      return registerFail(state, action);

    default:
      return state;
  }
};
export default reducer;
