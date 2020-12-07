import * as actionTypes from "../actions/actionType";

const initialState = {
   tourdetail:null,
   loading:"loading"
}


const getOneTourStart = (state, action) => {
    return { ...state, error: null, loading: "loading" };
  };
  const getOneTourSuccess = (state, action) => {
    return {
      ...state,
      tourdetail: action.tourdetail,
      error: null,
      loading: "success",
    };
  };
  const getOneTourFail = (state, action) => {
    return {
      ...state,
      error: action.error,
      loading: "error",
    };
  };
  const reducer = (state = initialState, action) => {
  switch (action.type) {    
  case actionTypes.GETONETOUR_START:
    return getOneTourStart(state, action);
  case actionTypes.GETONETOUR_SUCCESS:
    return getOneTourSuccess(state, action);
  case actionTypes.GETONETOUR_FAIL:
    return getOneTourFail(state, action);
    default:
        return state;
    }
  };
  export default reducer;