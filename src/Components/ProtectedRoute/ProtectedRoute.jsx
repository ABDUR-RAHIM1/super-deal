import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom'; 

function ProtectedRoute({ children }) { 
   const isUserLogin = localStorage.getItem("userLogin");
  return isUserLogin ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
