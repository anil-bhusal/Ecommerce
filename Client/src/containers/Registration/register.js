import React, { useState } from 'react'
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import CountryData from '../../components/countries.json';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css'

const passwordRule = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/

const registerSchema = Yup.object().shape({
    fullName: Yup.string()
        .required('Required'),
    email: Yup.string()
        .email('Invalid email')
        .required('Required'),
    password: Yup.string()
        .required('Required')
        .min(6)
        .matches(passwordRule, { message: 'Please create a stronger password' }),
    confirmPassword: Yup.string()
        .min(8, 'Too Short!')
        .max(16, 'Too Long!')
        .when("password", {
            is: val => (val && val.length > 0 ? true : false),
            then: Yup.string().oneOf(
                [Yup.ref("password")],
                "password didn't match")
        })
        .required('Required'),
    phoneNumber: Yup.string()
        .required('Required'),
    address: Yup.string()
        .required('Required'),
});


const Register = () => {
    const navigate = useNavigate()

    const registerUser = async (values) => {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch('http://localhost:4000/register', requestOptions);
        const data = await response.json()

        if (data) {
            alert(data.msg)
            navigate('/')
        }
    }

    return (
        <div className='App'>
            <Formik
                initialValues={{
                    fullName: '',
                    email: '',
                    password: '',
                    confirmPassword: '',
                    phoneNumber: '',
                    address: '',
                    country: '',
                    zipCode: ''
                }}
                validationSchema={registerSchema}

                onSubmit={(values, { resetForm }) => {
                    registerUser(values)
                    resetForm()
                }}
            >
                {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                    <div className='auth'>
                        <Form onSubmit={handleSubmit}>
                            <h1>Register</h1>
                            <Field name="fullName" type="text" placeholder="Your Full Name" value={values.fullName} onChange={handleChange} onBlur={handleBlur} />
                            {errors.fullName && touched.fullName ? (<div className="error">{errors.fullName}</div>) : null}

                            <Field name="email" type="email" placeholder="Your Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

                            <Field name="password" type="password" placeholder="Your Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.password && touched.password ? (<div className="error">{errors.password}</div>) : null}

                            <Field name="confirmPassword" type="password" placeholder="Re-type Your Password" value={values.confirmPassword} onChange={handleChange} onBlur={handleBlur} />
                            {errors.confirmPassword && touched.confirmPassword ? (<div className="error">{errors.confirmPassword}</div>) : null}

                            <Field name="phoneNumber" type="number" placeholder="Your Phone Number" value={values.phoneNumber} onChange={handleChange} onBlur={handleBlur} />
                            {errors.phoneNumber && touched.phoneNumber ? (<div className="error">{errors.phoneNumber}</div>) : null}

                            <Field name="address" type="text" placeholder="Your Address" value={values.address} onChange={handleChange} onBlur={handleBlur} />
                            {errors.address && touched.address ? (<div className="error">{errors.address}</div>) : null}

                            <select name="country" type="text" value={values.country} onChange={handleChange} onBlur={handleBlur}>
                                <option value="" disabled="disabled" label="Select a Country"></option>
                                {CountryData.map(country => {
                                    const { name } = country
                                    return (
                                        <option value={name} label={name} key={name}>{name}</option>
                                    )
                                })}
                            </select>
                            {errors.country && touched.country ? (<div className="error">{errors.country}</div>) : null}

                            <Field name="zipCode" placeholder="Your ZipCode" value={values.zipCode} onChange={handleChange} onBlur={handleBlur} />
                            {errors.zipCode && touched.zipCode ? (<div className="error">{errors.zipCode}</div>) : null}

                            <button className='btn btn-success' type="submit">Register</button>

                            <p style={{ marginTop: '10px' }}>Already have an account? Please <Link to="/">Login</Link> to continue</p>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}
export default Register