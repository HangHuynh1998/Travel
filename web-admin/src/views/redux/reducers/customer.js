import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  data: null,
  deleteloading: "loading"
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
  const deleteCustomerStart = (state, action) => {
    return { ...state, error: null, deleteloading: "loading" };
  };
  const deleteCustomerSuccess = (state, action) => {
    return {
      ...state,
      error: null,
      deleteloading: "success",
    };
  };
  const deleteCustomerFail = (state, action) => {
    return {
      ...state,
      error: action.error,
      deleteloading: "error",
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
            case actionTypes.DELETECUSTOMER_START:
            return deleteCustomerStart(state, action);
          case actionTypes.DELETECUSTOMER_SUCCESS:
            return deleteCustomerSuccess(state, action);
          case actionTypes.DELETECUSTOMER_FAIL:
            return deleteCustomerFail(state, action);
            
            default:
                return state;
            }
          };
          export default reducer;