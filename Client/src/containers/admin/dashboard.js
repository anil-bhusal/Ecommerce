import React from "react";
import { useNavigate, Link } from 'react-router-dom';

function Dashboard() {

  return (
    <h1>i am admin <Link to ="/additem">click</Link> dashboard</h1>
  );
}

export default Dashboard;
