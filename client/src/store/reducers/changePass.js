import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  data: null,
  error:null
};

const changePassStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const changePassSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    loading: "success",
  };
};
const changePassFail = (state, action) => {
    console.log("erroe",action.error);
  return {
    ...state,
    error: action.error,
    loading: "error",
  };
};


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CHANGEPASS_START:
      return changePassStart(state, action);
    case actionTypes.CHANGEPASS_SUCCESS:
      return changePassSuccess(state, action);
    case actionTypes.CHANGEPASS_FAIL:
      return changePassFail(state, action);
    default:
      return state;
  }
};
export default reducer;
