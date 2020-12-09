import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  data: null,
};

  const getCommentStart = (state, action) => {
    return { ...state, error: null, loading: "loading" };
  };
  const getCommentSuccess = (state, action) => {
    return {
      ...state,
      data: action.data,
      error: null,
      loading: "success",
    };
  };
  const getCommentFail = (state, action) => {
    return {
      ...state,
      error: action.error,
      loadin: "error",
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