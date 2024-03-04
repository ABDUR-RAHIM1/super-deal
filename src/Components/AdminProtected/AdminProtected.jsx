import React  from 'react'
import { Navigate } from 'react-router-dom' 

function AdminProtected({children}) {
  const isAdminLogin = localStorage.getItem("adminLogin");
  return  isAdminLogin ? children : <Navigate to="/admin-login"/>
}

export default AdminProtected