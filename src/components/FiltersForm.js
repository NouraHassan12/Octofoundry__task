import  React ,  {useEffect , useState} from 'react';
import { connect, useDispatch , useSelector } from "react-redux";
import { reduxForm, Field } from "redux-form";
import MuiTextField from "../common/MuiTextField/MuiTextField";
import MuiSelectField from "../common/MuiSelectField/MuiSelectField"
import { Grid  , Button , MenuItem} from "@mui/material";
import {fetchcountries} from "../Redux/Countries/action";

const FiltersForm = ({ clearValues }) => {
const dispatch = useDispatch();
const countries = useSelector((state) => state.countries);
console.log(countries?.countries  , "countries")
  useEffect(() => {
     dispatch(fetchcountries()) 
    
  }, []);

  return (
    <>
     
    
     <Grid container columns={12} spacing={2} justifyContent="center" mt={3}>
     <Grid item xs={10} >
     <Field
      
      type="text"
      name="by_email"
      component={MuiTextField}
      label="email"
    />
  </Grid>

  <Grid item xs={10} >
     <Field
      type="number"
      name="by_phone"
      component={MuiTextField}
      label="phone"
    />
  </Grid>

  <Grid item xs={10} >
     <Field
      
      type="text"
      name="by_name"
      component={MuiTextField}
      label="name"
    />
  </Grid>

  <Grid item xs={10} >
     <Field
      
      type="text"
      name="by_company"
      component={MuiTextField}
      label="company"
    />
  </Grid>
  <Grid item xs={10} >
             <Field
                  name="by_counry"
                  component={MuiSelectField}
                  label="counry"
                >
                  {countries?.countries?.map((country)=>(
                   <MenuItem value={country?.counry} label="option 1">
                        {country?.counry}
                   </MenuItem>
                  ))}
              
                 
                </Field>
                </Grid>

  <Grid item xs={10} >
     <Field
      
      type="date"
      name="by_date"
      component={MuiTextField}
      label="date"
    />
  </Grid>
  <Grid  xs={10}  style={{display:"flex" , justifyContent:"center" , }}>
         <Button variant="contained" style={{marginRight:"5px"}} onClick={clearValues} >reset </Button>
         <Button variant="contained" type="submit">Filter</Button>
  </Grid>
       
     </Grid>
    
   
     </>
  );
};

export default FiltersForm

