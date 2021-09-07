import React, { useState } from "react";
import * as Yup from "yup";
import "@material-tailwind/react/tailwind.css";
import styles from './forms.module.css'
import { Formik } from "formik";
import Router from 'next/router'
// tailwind components
import Button from "@material-tailwind/react/Button";
import Checkbox from "@material-tailwind/react/Checkbox";
import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';
import TextInput from "./TextInput";

const Forms = ({loading, text}) => {
    const [state, setState] = useState({
        country: "",
        region : "",
        phoneNumber: "",
        email: "",
      });
  

  const _onSave = (values) => {
    console.log(values);
  };

  const phoneRegExp = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/

  
  async function handledSubmit(values){

    

    const res = await fetch(`/api/${text}`, {
        method : 'POST',
        headers :{
              "Accept" : "application/json", 
              'Content-Type' : 'application/json'
        },
        body: JSON.stringify(values)
    }).then((t) => t.json())

    console.log(res)
}

    

  return (
  
    <Formik
      className="mx-5 sm:mx-0 "
      initialValues={{ email: state.email, phoneNumber: state.phoneNumber, country : state.country, region : state.region,  checked: true }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        phoneNumber: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
        country: Yup.string()
                    .required('Required')
                    .min(2, 'Enter Country'),
        region: Yup.string()
                    .required('Required')
                    .min(2, 'Enter State'),
                    
        
      })}
      onSubmit={(values) => handledSubmit(values)}
    >

      {({
        values,
        errors,
        touched,
        handleChange,
        setFieldValue,
        handleBlur,
        handleSubmit,
        isSubmitting
      }) => (
        <form onSubmit={handleSubmit}  className="mt-7">
            <div className="mx-5 sm:mx-0 ">
                <TextInput
                    type="email"
                    name="email"
                    placeholder="Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                    error={errors.email && touched.email && errors.email}
                    success={!errors.email && touched.email ? "Valid" : ""}
                />

                <TextInput
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone number"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                    error={errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
                    success={!errors.phoneNumber && touched.phoneNumber ? "Valid" : ""}
                />
              
              <div className="flex items-center align-middle ">
                <CountryDropdown
                    style={{
                        backgroundColor: 'grey',
                        border: "1px solid #ffff",
                        color: 'white',
                        borderRadius : 10,
                        fontSize: 15,
                        height : 40,
                        width : "200px"
                    }}
                    tabIndex={1000}
                    value={values.country}
                    id="my-country-field-id"
                    name="country"
                    classes="my-custom-class second-class"
                    onChange={(_, e) => handleChange(e)}
                />

                <RegionDropdown
                    style={{
                        backgroundColor: 'grey',
                        border: "1px solid #ffff",
                        color: 'white',
                        marginTop : "8px",
                        marginLeft : "5px",
                        borderRadius : 10,
                        fontSize: 15,
                        height : 40,
                        width : "150px"
                    }}
                    country={values.country}
                    value={values.region}
                    name="region"
                    id="my-region-field-id"
                    classes="another-custom-class"
                    onChange={(_, e) => handleChange(e)}
                />
              </div>
                

               

                <div style={{ marginTop:"15px", marginBottom: "30px", width: "100%" }}>
                <Button
                    type="submit"
                    onSubmit={handleSubmit}
                    color="lightBlue"
                    ripple="light"
                    disabled={isSubmitting}
                >
                    Get early access
                </Button>
                </div>

                {loading && <div style={{marginTop:"5px", marginBottom: "30px", width: "100%" }}>
                        
                        <Button
                            type="button"
                            onClick={() => Router.push("/")}
                            color="brown"
                            ripple="light"
                            disabled={isSubmitting}
                        >
                            Or Subscribe as a source user
                        </Button>

                        </div>
                }

                 {!loading && <div style={{marginTop:"5px", marginBottom: "30px", width: "100%" }}>
                        
                        <Button
                            type="button"
                            onClick={() => Router.push("/source_user")}
                            color="brown"
                            ripple="light"
                            disabled={isSubmitting}
                        >
                            Or Subscribe as a Student user
                        </Button>

                        </div>
                }


                
            </div>
        </form>
      )}
    </Formik>
  );
};

export default Forms;
