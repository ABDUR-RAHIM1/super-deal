import React from "react";
import { Link } from "react-router-dom";

function AdminLayout({ children }) {
  return (
    <div className="text-red-500 flex ">
      <div className="adminSidebar">
        <ul>
          <li> <Link>Dashboard</Link></li>
          <li> <Link>Users</Link></li>
          <li>  <Link>Add Product</Link></li>
          <li> <Link>More</Link></li>
        </ul>

        <div style={{height:"1000px"}}></div>
    
      </div>
      <div className="px-5 py-10">{children}</div>
    </div>
  );
}

export default AdminLayout;
