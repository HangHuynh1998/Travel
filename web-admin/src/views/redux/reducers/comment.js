import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  data: null,
  deleteloading:"loading"
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
  const deleteCommentStart = (state, action) => {
    return { ...state, error: null, deleteloading: "loading" };
  };
  const deleteCommentSuccess = (state, action) => {
    return {
      ...state,
      error: null,
      deleteloading: "success",
    };
  };
  const deleteCommentFail = (state, action) => {
    return {
      ...state,
      error: action.error,
      deleteloading: "error",
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
            case actionTypes.DELETECOMMENT_START:
              return deleteCommentStart(state, action);
            case actionTypes.DELETECOMMENT_SUCCESS:
              return deleteCommentSuccess(state, action);
            case actionTypes.DELETECOMMENT_FAIL:
              return deleteCommentFail(state, action);
            default:
                return state;
            }
          };
          export default reducer;