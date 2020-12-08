import * as actionTypes from "../actions/actionType";

const initialState = {
  datacomment: null,
  error: null,
  loadingcomment: "loading",
};

const getCommentStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const getCommentSuccess = (state, action) => {
  return {
    ...state,
    datacomment: action.datacomment,
    error: null,
    loadingcomment:"success",
  };
};
const getCommentFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loadingcomment:"error",
  };
};
const addCommentStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const addCommentSuccess = (state, action) => {
  return {
    ...state,
    error: null,
    loadingcomment: "success",
  };
};
const addCommentFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loadingcomment: "error",
  };
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GETCOMMENT_START:
        return getCommentStart(state, action);
      case actionTypes.GETCOMMENT_SUCCESS:
        return getCommentSuccess(state, action);
      case actionTypes.GETCOMMENT_FAIL:
        return getCommentFail(state, action);
        case actionTypes.ADDCOMMENT_START:
        return addCommentStart(state, action);
      case actionTypes.ADDCOMMENT_SUCCESS:
        return addCommentSuccess(state, action);
      case actionTypes.ADDCOMMENT_FAIL:
        return addCommentFail(state, action);
        default:
            return state;
        }
      };
export default reducer;