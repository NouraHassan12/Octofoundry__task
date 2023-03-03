import {
    FETCH_COUNTRIES_LIST_REQUEST,
    FETCH_COUNTRIES_LIST_SUCCESS,
    FETCH_COUNTRIES_LIST_FAILURE,
  } from "./types";
  
  const initialState = {
    loading: false,
    countries: [],
    error: "",
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_COUNTRIES_LIST_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case FETCH_COUNTRIES_LIST_SUCCESS:
        return {
          loading: false,
          countries: action.payload,
          error: "",
        };
  
      case FETCH_COUNTRIES_LIST_FAILURE:
        return {
          loading: false,
          countries: [],
          error: action.payload,
        };
  
      default:
        return state;
    }
  };
  
  export default reducer;
  