import * as actionTypes from "../actions/actionType";

const initialState = {
  data:null,
  error: null,
  loading: "loading",
};


const bookTourStart = (state, action) => {
    return {...state, error: null, loading: "loading" };
  };
  const bookTourSuccess = (state, action) => {
    return{
      ...state,
      data: action.data,
      error: null,
      loading: "success",
  }};
  const bookTourFail = (state, action) => {
    return{
      ...state,
      error: action.error,
      loading: "error",
    }
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.BOOKTOUR_START:
        return bookTourStart(state, action);
      case actionTypes.BOOKTOUR_SUCCESS:
        return bookTourSuccess(state, action);
      case actionTypes.BOOKTOUR_FAIL:
        return bookTourFail(state, action);
  
      default:
        return state;
    }
  };
  export default reducer;
