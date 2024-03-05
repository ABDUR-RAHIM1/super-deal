import React  from 'react'
import { Navigate, Outlet } from 'react-router-dom' 

function AdminProtected() {
  const isAdminLogin = localStorage.getItem("adminLogin");
  return  isAdminLogin ? <Outlet/> : <Navigate to="/admin-login"/>
}

export default AdminProtected