import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AdminProtected from './Components/AdminProtected/AdminProtected';
import Cart from './Components/Cart/Cart';
import Dashboard from './Components/Dashboard/Dashboard'; 
import Details from './Components/Details/Details';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Navbar/Navbar'; 
import OrderDetails from './Components/OrderDetails/OrderDetails';
import ProductContainer from './Components/ProductContainer/ProductContainer';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Shipment from './Components/Shipment/Shipment';
import UsersLogin from './Components/UsersLogin/UsersLogin';
import Home from './Pages/Home'

export const CartContext = createContext();
export const loginContext = createContext()
export const adminContext = createContext()


function App() {
    const [cart , setCart] = useState([]) 
    const [isLogin  , setIsLogin] = useState(false)
    const [isAdminLogin ,setIsAdminLogin] = useState(false)

    return ( 
        <adminContext.Provider value={[isAdminLogin ,setIsAdminLogin]}>
        <loginContext.Provider value={[isLogin  , setIsLogin]}>
        <CartContext.Provider value={ [cart , setCart]}>
        <BrowserRouter>
        <Header />
        <Routes>
                <Route path="/" element={ <Home/>} />
                <Route path="/dashboard" element={ <AdminProtected>
                    <Dashboard/>
                </AdminProtected> } /> 
                <Route path="/allProducts" element={ <ProductContainer/>} /> 
                <Route path="/cart" element={ <Cart/>} /> 
                <Route path="/login" element={ <UsersLogin/>} /> 
                <Route path="/admin-login" element={ <AdminLogin/>} /> 
                <Route path="/details/:id" element={ <Details/>} /> 
                <Route path="/orderDetails/:id" element={ <OrderDetails/>} /> 
                <Route path="/shipment" element={<ProtectedRoute>
                    <Shipment/>
                </ProtectedRoute> } /> 
                <Route path="/*" element={ <ErrorPage/>} /> 
        </Routes>
      <Footer />
        </BrowserRouter>
        </CartContext.Provider>
        </loginContext.Provider>
        </adminContext.Provider>
    )
}

export default App