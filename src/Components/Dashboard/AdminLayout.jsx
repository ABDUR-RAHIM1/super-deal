import React from "react";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { IoIosMan , IoIosAdd  } from "react-icons/io";
import { MdFavoriteBorder , MdOutlineManageSearch } from "react-icons/md"; 

function AdminLayout({ children }) {
  return (
    <div className="text-red-500 flex ">
      <div className="adminSidebar">
        <ul>
          <li>  <Link to={"/admin-dashboard"}> <FaHome/> Dashboard</Link></li>
          <li>  <Link to={"/addproduct"}> <IoIosAdd /> Add Product</Link></li>
          <li> <Link> <IoIosMan/> Users</Link></li>
          <li>  <Link> <MdOutlineManageSearch /> Manage Products</Link></li>
          <li> <Link> <MdFavoriteBorder/> orders</Link></li>
        </ul>

        <div style={{height:"1000px"}}></div>
    
      </div>
      <div className=" flex-1 h-screen overflow-y-scroll px-3 py-10 bg-gray-200">{children}</div>
    </div>
  );
}

export default AdminLayout;
