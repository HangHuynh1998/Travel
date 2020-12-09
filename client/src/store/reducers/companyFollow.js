import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  data: null,
};

const getCompanyFollowStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const getCompanyFollowSuccess = (state, action) => {
  return {
    ...state,
    data: action.data,
    error: null,
    loading: "success",
  };
};
const getCompanyFollowFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: "error",
  };
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GETCOMPANYFOLLOW_START:
        return getCompanyFollowStart(state, action);
      case actionTypes.GETCOMPANYFOLLOW_SUCCESS:
        return getCompanyFollowSuccess(state, action);
      case actionTypes.GETCOMPANYFOLLOW_FAIL:
        return getCompanyFollowFail(state, action);
      default:
        return state;
    }
  };
  export default reducer;
  