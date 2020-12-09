import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  data: null,
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
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETCOMPANY_START:
            return getCompanyStart(state, action);
          case actionTypes.GETCOMPANY_SUCCESS:
            return getCompanySuccess(state, action);
          case actionTypes.GETCOMPANY_FAIL:
            return getCompanyFail(state, action);
            default:
                return state;
            }
          };
          export default reducer;