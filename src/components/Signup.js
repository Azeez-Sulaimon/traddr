import React, {Component} from 'react';
import { Formik } from 'formik';
import { Redirect } from 'react-router-dom';
import {Link} from 'react-router-dom';


 const Signup = () => {

    
        
    return (
        
        <div>
                <h4 className="text-center user-text">Create Your Account</h4>
                <p className="pw-text text-center">Manage, understand and make profit from their business.</p>
                <Formik
                 initialValues={{ email: '', password: '', fullName: '' }}
                 validate={values => {
                   let errors = {};

                   if (!values.fullName) {
                    errors.fullName = 'Full name is required';
                  } 

                   if (!values.email) {
                     errors.email = 'email is required';
                   } else if (
                     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                   ) {
                     errors.email = 'Invalid email address';
                   }

                   if (!values.password) {
                    errors.password = 'Password is required';
                  } 

                   return errors;
                 }}
                 onSubmit={(values, { setSubmitting }) => {
                   setTimeout(() => {
                     alert(JSON.stringify(values, null, 2));
                     setSubmitting(false);
                   }, 400);

                   
                 }}
               >
                 {({
                   values,
                   errors,
                   touched,
                   handleChange,
                   handleBlur,
                   handleSubmit,
                   isSubmitting,
                   /* and other goodies */
                 }) => (
                <form onSubmit={handleSubmit}>
                    <div className="form-group ph-text"> 
                       
                        <input  type="button"
                                className="google p-text"
                                value="Continue with Google" 
                                 
                                />
                        
                    </div>
                    <p className="pw-text text-center">Or signup with email</p>
                    <div className="form-group ph-text"> 
                        <label>What's your full name </label>
                        <input  type="text"
                               name="fullName"
                               onChange={handleChange}
                                className="form-control p-text"
                                placeholder="Enter your first and last name"
                                onBlur={handleBlur}
                                value={values.fullName}
                                
                                />
                                  <p className="error">{errors.fullName && touched.fullName && errors.fullName}</p>
                    </div>
                    <div className="form-group ph-text">
                        <label>What's your Email</label>
                        <input 
                                type="email" 
                                name="email"
                                onChange={handleChange}
                                className="form-control p-text"
                                placeholder="Enter your email address"
                                value={values.email}
                                onBlur={handleBlur}
                                value={values.email}
                              
                             />
                                <p className="error">{errors.email && touched.email && errors.email}</p>                         
                    </div>
                    <div className="form-group ph-text"> 
                        <label>Enter password </label>
                        <input  type="password"
                               name="password"
                               onChange={handleChange}
                                className="form-control p-text"
                                placeholder="Enter a password" 
                                onBlur={handleBlur}
                                value={values.password}
                           
                              />
                         <p className="error">{errors.password && touched.password && errors.password}</p>
                    </div>
                    <p className="pw-text text-center">By signing up you are agreeing to our terms of services and privacy policy</p>
                    <div className="form-group">
                       <Link to="/create-store">
                        <input type="submit" disabled={isSubmitting}  value="Create your account" className="btn save-btn btn-danger btn-lg" />
                        </Link>
                    </div>
                </form>
                 )}
                </Formik>
            </div>
   
    )
}
export default Signup;