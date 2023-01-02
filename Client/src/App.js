import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./containers/Registration/register";
import Login from "./containers/Login/login";
import UserDashboard from "./containers/user/dashboard"
import AdminDashboard from "./containers/admin/dashboard"
import AddItem from "./containers/admin/addItem"
import { useDispatch, useSelector } from 'react-redux'

function App() {

  return (
    <Router>
      <ConditionalRouting />
    </Router>
  )
}

const ConditionalRouting = () => {
  const { userRole } = useSelector(state => state.user)
  if (userRole === 'user') {
    return <UserScreen />
  }else if (userRole === 'admin') {
    return (<AdminScreen />)
  } else {
    return <AuthScreens />
  }
}

const AuthScreens = () => {
  return (
    <Routes>
      <Route exact path='/' element={<Login />} />
      <Route exact path='/register' element={<Register />} />
    </Routes>
  )
}

const UserScreen = () => {
  return (
    <Routes>
      <Route exact path='/' element={<UserDashboard />} />
      {/* <Route exact path='/orders' element={<Orders />} />
      <Route exact path='/orderslist' element={<OrdersList />} /> */}
    </Routes>
  )
}
const AdminScreen = () => {
  return (
    <Routes>
      <Route exact path='/' element={<AdminDashboard/>} />
      <Route exact path='/additem' element = { <AddItem/>}/>
    </Routes>
  );
}

export default App;
