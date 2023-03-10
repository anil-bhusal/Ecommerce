import React from "react";
import { Routes, Route } from "react-router-dom";
import Register from "../containers/Registration/register";
import Login from "../containers/Login/login";
import UserDashboard from "../containers/user/dashboard"
import AdminDashboard from "../containers/admin/dashboard"
import AddItem from "../containers/admin/addItem"
import { useDispatch, useSelector } from 'react-redux'
import ItemList from "../containers/admin/itemList";
import ChangePassword from "./changePassword";
import ItemDetails from "../containers/user/ItemDetails";
import CartDetails from "../containers/user/cartDetails";

const ConditionalRouting = () => {
    const { userRole } = useSelector(state => state.user)
    if (userRole === 'user') {
        return <UserScreen/>
    } else if (userRole === 'admin') {
        return (<AdminScreen/>)
    } else {
        return <AuthScreens/>
    }
}

const AuthScreens = () => {
    return (
        <Routes>
            <Route exact path='/' element={<Login/>} />
            <Route exact path='/register' element={<Register/>} />
        </Routes>
    )
}

const UserScreen = () => {
    return (
        <Routes>
            <Route exact path='/' element={<UserDashboard/>} />
            <Route exact path="/itemdetails" element={<ItemDetails/>} />
            <Route exact path="/changepassword" element={<ChangePassword/>} />
            <Route exact path="/cartdetails" element={<CartDetails/>} />
        </Routes>
    )
}
const AdminScreen = () => {
    return (
        <Routes>
            <Route exact path='/' element={<AdminDashboard/>} />
            <Route exact path='/additem' element={<AddItem/>} />
            <Route exact path='/itemlist' element={<ItemList/>} />
            <Route exact path="/changepassword" element={<ChangePassword/>} />
        </Routes>
    );
}

export default ConditionalRouting;