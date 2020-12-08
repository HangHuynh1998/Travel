import * as actionTypes from "../actions/actionType";

const initialState = {
  loading: "loading",
  datasale: null,
};

  const getToursSaleStart = (state, action) => {
    return { ...state, error: null, loadingsale: "loading" };
  };
  const getToursSaleSuccess = (state, action) => {
    return {
      ...state,
      datasale: action.datasale,
      error: null,
      loadingsale: "success",
    };
  };
  const getToursSaleFail = (state, action) => {
    return {
      ...state,
      error: action.error,
      loadingsale: "error",
    };
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GETTOURSSALEHOME_START:
            return getToursSaleStart(state, action);
          case actionTypes.GETTOURSSALEHOME_SUCCESS:
            return getToursSaleSuccess(state, action);
          case actionTypes.GETTOURSSALEHOME_FAIL:
            return getToursSaleFail(state, action);
            default:
                return state;
            }
          };
          export default reducer;