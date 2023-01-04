import React from 'react'
import '../components/style/adminNav.css'
import { useDispatch, useSelector } from "react-redux"
import { setUserDetailsNull } from '../reducers/userSlice'
import { useNavigate, Link } from 'react-router-dom';

const AdminNav = () => {
    const dispatch = useDispatch()

    return (
        <>
            <nav class="navbar">
                <div class="navbar-container container">
                    <input type="checkbox" name="" id="" />
                    <div class="hamburger-lines">
                        <span class="line line1"></span>
                        <span class="line line2"></span>
                        <span class="line line3"></span>
                    </div>
                    <ul class="menu-items">
                        <li><a href="/additem">Add Item</a></li>
                        <li><a href="/itemlist">View Item</a></li>
                        <li><a href="#">Change Password</a></li>
                        <li><a href="/" onClick={() => { dispatch(setUserDetailsNull()) }}>Logout</a></li>
                    </ul>
                    <h1 class="logo">Amazon Lite</h1>
                </div>
            </nav>
        </>
    )
}
export default AdminNav;