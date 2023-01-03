import React from "react";
import { useNavigate, Link } from 'react-router-dom';

function Dashboard() {

  return (
    <>
      <h1>add item in admin dashboard click <Link to="/additem">here</Link></h1> <br /> <hr /> <br />
      <h1>view added item from admin dashboard click<Link to="/itemlist">here</Link> dashboard</h1>
    </>
  );
}

export default Dashboard;
