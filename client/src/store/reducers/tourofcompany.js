import * as actionTypes from "../actions/actionType";

const initialState = {
   tourOfCompany:null,
   loading:"loading"
}


const getTourOfCompanyStart = (state, action) => {
    return { ...state, error: null, loading: "loading" };
  };
  const getTourOfCompanySuccess = (state, action) => {
    return {
      ...state,
      tourOfCompany: action.tourOfCompany,
      error: null,
      loading: "success",
    };
  };
  const getTourOfCompanyFail = (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: "error",
    };
  };
  const reducer = (state = initialState, action) => {
  switch (action.type) {    
  case actionTypes.GETTOUROFCOMPANY_START:
    return getTourOfCompanyStart(state, action);
  case actionTypes.GETTOUROFCOMPANY_SUCCESS:
    return getTourOfCompanySuccess(state, action);
  case actionTypes.GETTOUROFCOMPANY_FAIL:
    return getTourOfCompanyFail(state, action);
    default:
        return state;
    }
  };
  export default reducer;