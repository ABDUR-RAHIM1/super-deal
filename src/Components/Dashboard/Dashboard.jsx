import React from 'react' 
import { useState } from 'react';  
import DashboardContent from './DashboardContent/DashboardContent';
import Users from "../Users/Users" 
import {AiOutlineHome , AiOutlinePlus, AiOutlineBorderInner} from "react-icons/ai"
import {FcBusinessman} from "react-icons/fc"
import "./Dashboard.css"
import Order from '../Order/Order';
import AddProduct from './Addpost/AddProduct';

function Dashboard() {
  const [component, setComponent] = useState(<DashboardContent />)
  const handleBtn = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "HOME") {
      setComponent(<DashboardContent />)
    } else if (btnText === "POST") {
      setComponent(<AddProduct />)
    } else if (btnText === "USERS") {
      setComponent(<Users />)
    } else if (btnText === "ORDERS") {
       setComponent(<Order/>)
    }

  }
  return (
    <div className='dashboardContainer container'>
      <div className="dashMenu"> 
        <button onClick={handleBtn} className='btn btn-outline-info mt-3 fw-bold'> <AiOutlineHome className='btnIcon'/> HOME</button>
        <button onClick={handleBtn} className='btn btn-outline-info mt-3 fw-bold'>  <AiOutlinePlus className='btnIcon'/>POST</button>
        <button onClick={handleBtn} className='btn btn-outline-info mt-3 fw-bold'><FcBusinessman className='btnIcon'/> USERS</button>
        <button onClick={handleBtn} className='btn btn-outline-info mt-3 fw-bold'><AiOutlineBorderInner className='btnIcon'/> ORDERS</button>
      </div>
      <div className="dashContent">
        {component}
      </div>
    </div>
  )
}

export default Dashboard