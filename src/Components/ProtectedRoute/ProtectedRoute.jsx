import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom'; 

function ProtectedRoute( ) { 
   const isUserLogin = localStorage.getItem("userLogin");
  return isUserLogin ? <Outlet/> : <Navigate to="/login" />;
}

export default ProtectedRoute;
