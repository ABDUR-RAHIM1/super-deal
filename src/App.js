import React, { createContext, useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from './Components/AdminLogin/AdminLogin';
import AdminProtected from './Components/AdminProtected/AdminProtected';
import Cart from './Components/Cart/Cart'; 
import Details from './Components/Details/Details';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Footer from './Components/Footer/Footer';
import Header from './Components/Navbar/Navbar';
import ProductContainer from './Components/ProductContainer/ProductContainer';
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import Shipment from './Components/Shipment/Shipment';
import UsersLogin from './Components/UsersLogin/UsersLogin';
import Home from './Pages/Home'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'; 
import DashboardContent from './Components/Dashboard/DashboardContent/DashboardContent';
import AddProduct from './Components/Dashboard/Addpost/AddProduct';
import Users from './Components/Dashboard/Users/Users';
import ManageProducts from './Components/Dashboard/ManageProducts/ManageProducts';
import Order from './Components/Dashboard/Order/Order';
import OrderDetails from './Components/Dashboard/OrderDetails/OrderDetails';


export const CartContext = createContext();
export const loginContext = createContext()
export const adminContext = createContext()


function App() {
    const [cart, setCart] = useState([])
    const [isLogin, setIsLogin] = useState(false)
    const [isAdminLogin, setIsAdminLogin] = useState(false)

    return (
        <adminContext.Provider value={[isAdminLogin, setIsAdminLogin]}>
            <loginContext.Provider value={[isLogin, setIsLogin]}>
                <CartContext.Provider value={[cart, setCart]}>
                    <BrowserRouter>
                        <Header />
                        <ToastContainer />
                        <Routes>
                            <Route path="/" element={<Home />} />

                            {/*  admin protected */}
                            <Route element={<AdminProtected />}> 
                                <Route path="/admin-dashboard" element={<DashboardContent />} />
                                <Route path='/addproduct' element={<AddProduct />} />
                                <Route path='/manage-users' element={<Users />} />
                                <Route path='/manage-products' element={<ManageProducts />} />
                                <Route path='/manage-orders' element={<Order />} />
                            </Route>
                            {/*  admin protected routes  end*/}
                            <Route path="/allProducts" element={<ProductContainer />} />
                            <Route path="/cart" element={<Cart />} />
                            <Route path="/login" element={<UsersLogin />} />
                            <Route path="/admin-login" element={<AdminLogin />} />
                            <Route path="/details" element={<Details />} />
                            <Route path="/orderDetails/:id" element={<OrderDetails />} />
                            {/*  shipment protected */}
                            <Route element={<ProtectedRoute />}>
                                <Route path='/shipment' element={<Shipment />} />
                            </Route>

                            <Route path="/*" element={<ErrorPage />} />
                        </Routes>
                        <Footer />
                    </BrowserRouter>
                </CartContext.Provider>
            </loginContext.Provider>
        </adminContext.Provider>
    )
}

export default App