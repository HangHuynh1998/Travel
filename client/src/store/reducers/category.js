import * as actionTypes from "../actions/actionType";

const initialState = {
  data:null,
  error: null,
  loading: "loading",
};

const getCategoryStart = (state, action) => {
    return {...state, error: null, loading: "loading" };
  };
  const getCategorySuccess = (state, action) => {
    return{
      ...state,
      data: action.data,
      error: null,
      loading: "success",
  }};
  const getCategoryFail = (state, action) => {
    return{
      ...state,
      error: action.error,
      loading: "error",
    }
  };

  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case actionTypes.GETCATEGORY_START:
        return getCategoryStart(state, action);
      case actionTypes.GETCATEGORY_SUCCESS:
        return getCategorySuccess(state, action);
      case actionTypes.GETCATEGORY_FAIL:
        return getCategoryFail(state, action);
      default:
        return state;
    }
  };
  export default reducer;