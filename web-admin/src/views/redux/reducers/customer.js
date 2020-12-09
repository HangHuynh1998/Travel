import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  data: null,
};

  const getCustomerStart = (state, action) => {
    return { ...state, error: null, loading: "loading" };
  };
  const getCustomerSuccess = (state, action) => {
    return {
      ...state,
      data: action.data,
      error: null,
      loading: "success",
    };
  };
  const getCustomerFail = (state, action) => {
    return {
      ...state,
      error: action.error,
      loadin: "error",
    };
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETCUSTOMER_START:
            return getCustomerStart(state, action);
          case actionTypes.GETCUSTOMER_SUCCESS:
            return getCustomerSuccess(state, action);
          case actionTypes.GETCUSTOMER_FAIL:
            return getCustomerFail(state, action);
            default:
                return state;
            }
          };
          export default reducer;