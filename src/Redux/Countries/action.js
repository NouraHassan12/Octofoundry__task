import {
    FETCH_COUNTRIES_LIST_REQUEST,
    FETCH_COUNTRIES_LIST_SUCCESS,
    FETCH_COUNTRIES_LIST_FAILURE,
  } from "./types";
  
  import axios from "axios";
  
  export const fetchcountriesRequest = () => {
    return {
      type: FETCH_COUNTRIES_LIST_REQUEST,
    };
  };
  
  const fetchcountriesSuccess = (countries) => {
    return {
      type: FETCH_COUNTRIES_LIST_SUCCESS,
      payload: countries,
    };
  };
  
  const fetchcountriesFailure = (error) => {
    return {
      type: FETCH_COUNTRIES_LIST_FAILURE,
      payload: error,
    };
  };
  
  export const fetchcountries = () => {
    return (dispatch) => {
      dispatch(fetchcountriesRequest);
      axios
        .get(`http://localhost:3000/countries`)
        .then((res) => {
          console.log(res?.data
            , "countries");
          const countries = res.data;
          dispatch(fetchcountriesSuccess(countries, "redux countries"));
        })
  
        .catch((error) => {
          const errorMsg = error.message;
          dispatch(fetchcountriesFailure(errorMsg));
        });
    };
  };

  
  