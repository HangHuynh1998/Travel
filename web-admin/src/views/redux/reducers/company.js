import * as actionTypes from "../actions/actionType";
import { deleteCommentFail } from "../actions/comment";

const initialState = {
  loading: "loading",
  data: null,
  deleteloading: "loading"
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
      loadin: "error",
    };
  };

  const deleteCompanyStart = (state, action) => {
    return { ...state, error: null, deleteloading: "loading" };
  };
  const deleteCompanySuccess = (state, action) => {
    return {
      ...state,
      error: null,
      deleteloading: "success",
    };
  };
  const deleteCompanyFail = (state, action) => {
    return {
      ...state,
      error: action.error,
      deleteloading: "error",
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
            case actionTypes.DELETECOMPANY_START:
              return deleteCompanyStart(state, action);
            case actionTypes.DELETECOMPANY_SUCCESS:
              return deleteCompanySuccess(state, action);
            case actionTypes.DELETECOMPANY_FAIL:
              return deleteCompanyFail(state, action);
            default:
                return state;
            }
          };
          export default reducer;