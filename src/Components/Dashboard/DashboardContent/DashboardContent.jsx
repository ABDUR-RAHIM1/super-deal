import React from 'react'
import "./DashboardContent.css"
import img1 from '../../../images/products/f1.jpg'
import img2 from '../../../images/products/f2.jpg'
import img3 from '../../../images/products/f3.jpg'
import photo from '../../../images/aa.png'
import AdminLayout from '../AdminLayout'
function DashboardContent() {
  return (
    <AdminLayout>
      <div className='DashboardContainer'>
        <h1>Dashboard Home</h1>
        <h5 className='text-center my-4 text-primary'>Best Selling Product</h5>

        <div className="row">
          <div className="col-md-4">
            <div className="pdImg">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="pdImg">
              <img src={img2} alt="" />
            </div>
          </div>
          <div className="col-md-4">
            <div className="pdImg">
              <img src={img3} alt="" />
            </div>
          </div>
        </div>
        <div className="ownerContainer">
          <h2> <span className='text-danger'>Owner : </span> Abdur Rahim</h2>
          <img src={photo} alt="" />
        </div>
      </div>
    </AdminLayout>
  )
}

export default DashboardContent