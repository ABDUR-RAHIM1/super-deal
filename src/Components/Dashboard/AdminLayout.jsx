import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHome, FaProductHunt } from "react-icons/fa";
import { IoIosMan, IoIosAdd, IoMdLogOut } from "react-icons/io";
import { MdFavoriteBorder, MdOutlineMenuOpen, MdClose } from "react-icons/md";


function AdminLayout({ children }) {
  const [arrowClick, setArrowClick] = useState(true)
  const navigate = useNavigate()
  
  const handleAdminLogin = () => {
    localStorage.removeItem("adminLogin")
    setTimeout(() => {
      navigate("/admin-login")
    }, 1500);
  }
  return (
    <div className="flex">
      <div className={`adminSidebar ${arrowClick ? "w-[100px]" : "w-[300px]"}`}>
        <div className="text-4xl w-auto text-center ">
          {
            arrowClick ?
              <MdOutlineMenuOpen onClick={() => setArrowClick(!arrowClick)} className="inline text-[color:var(--special-color)] cursor-pointer" />
              :
              <MdClose onClick={() => setArrowClick(!arrowClick)} className="inline text-red-500 cursor-pointer" />
          }
        </div>
        <ul>
          <li>  <Link to={"/admin-dashboard"}> <FaHome />  <span className={arrowClick ? "hidden" : ""}>Dashboard</span> </Link></li>
          <li>  <Link to={"/addproduct"}> <IoIosAdd /> <span className={arrowClick ? "hidden" : ""}> Add Product</span></Link></li>
          <li> <Link to={"/manage-users"}> <IoIosMan />  <span className={arrowClick ? "hidden" : ""}>Users</span> </Link></li>
          <li>  <Link to={"/manage-products"}> <FaProductHunt /> <span className={arrowClick ? "hidden" : ""}>Manage Products</span> </Link></li>
          <li> <Link to={"/manage-orders"}> <MdFavoriteBorder />  <span className={arrowClick ? "hidden" : ""}>orders</span> </Link></li>
          <li  onClick={handleAdminLogin}>
            <Link >
              <IoMdLogOut />  <span className={arrowClick ? "hidden" : ""}>Log-out</span>
            </Link>
          </li>
        </ul>



      </div>
      <div className=" flex-1 h-screen overflow-y-scroll px-3 py-10 bg-gray-100">
        {children}

      </div>
    </div>
  );
}

export default AdminLayout;
