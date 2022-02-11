import React from "react";
import { Formik, Form} from 'formik';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import * as Yup from 'yup';
import axios from 'axios';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import ButtonAppBar from './AppBar';
import { countrylist } from '../utils/CountryCodes';

export interface Values {
    firstName :string;
    lastName: string;
    phoneNumber: string;
    country: string;
}

export interface Country {
    name :string;
    dial_code: string;
    code: string;
}
export interface Props {
    onSubmit: (values: Values) => void;
}

//Registration page
export const RegistrationPage: React.FC<Props> = ({onSubmit}) => {
    const history = useHistory()
    return(
        <React.Fragment>
        <ButtonAppBar />
            <Formik
            initialValues={{
                firstName: '',
                lastName: '',
                phoneNumber: '',
                country: '',

            }}
            onSubmit={async values => {
                try {
                    const response = await axios.post('http://localhost:3000/registrations',{id:Math.floor(Math.random() * 100),...values});
                    if(response.statusText === "Created"){
                        localStorage.setItem('name', response.data.firstName)
                        history.push('/success');
                    }else{
                        alert("Error creating account");

                    }
                } catch (error) {
                    console.error(error);
                }
            
            }}
            validationSchema={Yup.object().shape({
                firstName: Yup.string()
                .matches(/^[a-z A-z]+$/, "Must be only alphabets")
                .min(5, 'Must be atleast 5 digits')
                .required('First Name is required'),
                lastName: Yup.string()
                .matches(/^[a-z A-z]+$/, "Must be only alphabets")
                .min(5, 'Must be atleast 5 digits')
                .required('Last Name is required'),
                country: Yup.string()
                .required('Country is required'),
                phoneNumber: Yup.string()
                .matches(/^[0-9]+$/, "Must be only digits")
                .required('Mobile no is required'),
            })}
            
        >
            {formikProps => {
            const {
                values,
                touched,
                errors,
                isValid,
                dirty,
                handleChange,
                handleBlur,
                handleSubmit,
            } = formikProps;
            return (
                <div style={{textAlign:"center", backgroundColor:"white", width: "300px" ,  borderRadius: "10px", margin: "auto", marginTop: "50px", padding: "20px"}}>
                    <h1>Register Here</h1>
                    <Form onSubmit={handleSubmit}>
                        <div style={{marginTop:'10px'}}>
                        <FormControl sx={{ m: 1, minWidth: 230 }}>
                                <InputLabel id="demo-first"></InputLabel>
                                    <TextField
                                        name="firstName"
                                        label="Fisrt Name"
                                        required
                                        value={values.firstName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={
                                            errors.firstName && touched.firstName ? errors.firstName : ''
                                        }
                                    />
                            </FormControl>
                        </div>
                        <div style={{marginTop:'10px'}}>
                        
                        <FormControl sx={{ m: 1, minWidth: 230 }}>
                                <InputLabel id="demo-last"></InputLabel>
                                    <TextField
                                        name="lastName"
                                        label="Last Name"
                                        required
                                        value={values.lastName}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={
                                            errors.lastName && touched.lastName ? errors.lastName : ''
                                        }
                                    />
                            </FormControl>
                        </div>
                        <div style={{marginTop:'10px'}}>
                            <FormControl sx={{ m: 1, minWidth: 230 }}>
                                <InputLabel id="demo-number"></InputLabel>
                                    <TextField
                                        name="phoneNumber"
                                        required
                                        label="Phone Number"
                                        value={values.phoneNumber}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        helperText={
                                            errors.phoneNumber && touched.phoneNumber ? errors.phoneNumber : ''
                                        }
                                    />
                            </FormControl>
                        </div>
                        <div style={{marginTop:'10px'}}>
                        <FormControl sx={{ m: 1, minWidth: 230 }}
                        >
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                                <Select
                                    inputProps={{ "data-testid": "select-input" }}
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={values.country}
                                    placeholder="Country"
                                    name="country"
                                    label="Country"
                                    autoWidth
                                    required
                                    onChange={handleChange}
                                
                                    >
                                         {countrylist.map(function (country:Country) {
                                            return(
                                                <MenuItem key={country.code} value={country.name}>{country.name}</MenuItem>
                                            );
                                        })}
                                </Select>
                                </FormControl>
                        </div>
                    <Button name="submitbutton" style={{backgroundColor:"rgb(128, 181, 246)", color:"white", width:"200px", marginTop:"20px"}} disabled={!(isValid && dirty)} type="submit"> Submit </Button>
                
                </Form>
                </div>
            );
            }}
            </Formik>
        </React.Fragment>
    )
}
