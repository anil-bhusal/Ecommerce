import React, {useState} from "react";
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import { useNavigate, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch, useSelector } from 'react-redux'
import {setUserDetails}  from "../../reducers/userSlice"
import { message } from 'antd';

const loginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
});

const Login = () => {
    const navigate = useNavigate() 
    const dispatch = useDispatch()

    const {fullName, userRole} = useSelector(state => state.user)

    const loginUser = async (values, resetForm) => {
        const requestOptions = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        const response = await fetch('http://localhost:4000/login', requestOptions);
        const data = await response.json()

        if (data.msg) {
            data.userDetails.token = data.token
            dispatch(setUserDetails(data.userDetails))
            message.success(data.msg)
        }else{
            message.error(data.errMsg)
        }
    }

    return (
        <div className='App'>
            <Formik
                initialValues={{
                    email: '',
                    password: ''
                }}
                validationSchema={loginSchema}
                onSubmit={(values, { resetForm }) => {
                    loginUser(values)
                    resetForm()
                }}
            >
                {({ errors, touched, values, handleChange, handleBlur, handleSubmit }) => (
                    <div className='auth'>
                        <Form onSubmit={handleSubmit}>
                            <h1>Login</h1>
                            <Field name="email" type="email" placeholder="Enter Email" value={values.email} onChange={handleChange} onBlur={handleBlur} />
                            {errors.email && touched.email ? (<div className="error">{errors.email}</div>) : null}

                            <Field name="password" type="password" placeholder="Enter Password" value={values.password} onChange={handleChange} onBlur={handleBlur} />
                            {errors.password && touched.password ? <div className="error">{errors.password}</div> : null}

                            <button className='btn btn-success' type="submit">Login</button>
                            <p style={{ marginTop: '10px' }}>Dont have an account? <Link to="/register">Signup</Link> here</p>
                        </Form>
                    </div>
                )}
            </Formik>
        </div>
    )
}
export default Login