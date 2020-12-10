import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  data: null,
  deleteloading: "loading"
};

  const getTourStart = (state, action) => {
    return { ...state, error: null, loading: "loading" };
  };
  const getTourSuccess = (state, action) => {
    return {
      ...state,
      data: action.data,
      error: null,
      loading: "success",
    };
  };
  const getTourFail = (state, action) => {
    return {
      ...state,
      error: action.error,
      loadin: "error",
    };
  };
  const deleteTourStart = (state, action) => {
    return { ...state, error: null};
  };
  const deleteTourSuccess = (state, action) => {
    return {
      ...state,
      error: null,
      deleteloading: "success",
    };
  };
  const deleteTourFail = (state, action) => {
    return {
      ...state,
      error: action.error,
      deleteloading: "error",
    };
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETTOUR_START:
            return getTourStart(state, action);
          case actionTypes.GETTOUR_SUCCESS:
            return getTourSuccess(state, action);
          case actionTypes.GETTOUR_FAIL:
            return getTourFail(state, action);
            case actionTypes.DELETETOUR_START:
            return deleteTourStart(state, action);
          case actionTypes.DELETETOUR_SUCCESS:
            return deleteTourSuccess(state, action);
          case actionTypes.DELETETOUR_FAIL:
            return deleteTourFail(state, action);
            default:
                return state;
            }
          };
          export default reducer;