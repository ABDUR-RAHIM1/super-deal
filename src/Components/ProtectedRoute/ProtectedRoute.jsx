import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { loginContext } from '../../App';

function ProtectedRoute({ children }) {
  const [isLogin  , setIsLogin] = useContext(loginContext);
  return isLogin ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;
