import React from "react";
import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Register from "./containers/Registration/register";
import Login from "./containers/Login/login";
import Home from "./containers/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/register' element={<Register/>}/>
        <Route exact path='/' element={<Login/>}/>
        <Route exact path='/home' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
