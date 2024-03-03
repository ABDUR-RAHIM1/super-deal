import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom'
import { adminContext } from '../../App'

function AdminProtected({children}) {
    const [isAdminLogin] = useContext(adminContext)
  return  isAdminLogin ? children : <Navigate to="/admin-login"/>
}

export default AdminProtected