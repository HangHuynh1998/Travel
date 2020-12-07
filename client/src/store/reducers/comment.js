import * as actionTypes from "../actions/actionType";

const initialState = {
  datacomment: null,
  error: null,
  loading: "loading",
};

const getCommentStart = (state, action) => {
  return { ...state, error: null, loading: "loading" };
};
const getCommentSuccess = (state, action) => {
  return {
    ...state,
    datacomment: action.datacomment,
    error: null,
    loading: "success",
  };
};
const getCommentFail = (state, action) => {
  return {
    ...state,
    error: action.error,
    loading: "error",
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
        default:
            return state;
        }
      };
export default reducer;