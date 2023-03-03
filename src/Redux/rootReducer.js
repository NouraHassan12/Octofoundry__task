import { combineReducers } from "redux";
import EmloyeesReducer from "./EmployeesList/reducer";
import CountriesReducer from "./Countries/reducer"
import { reducer as formReducer } from "redux-form";
const rootReducer = combineReducers({
    employees: EmloyeesReducer,
    countries:CountriesReducer,
    form: formReducer,
    

});

export default rootReducer;
