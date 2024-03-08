import React, { useEffect, useState } from 'react'
import AdminLayout from '../AdminLayout'
import { MdFavoriteBorder, MdNotificationsActive } from 'react-icons/md'
import { GiPayMoney, GiProgression, GiReceiveMoney, GiTakeMyMoney } from "react-icons/gi";
import { FaRegUser, FaRegCheckCircle } from "react-icons/fa";
import {motion} from "framer-motion"
 
function DashboardContent() {
  const [orderList, setOrderList] = useState([])
  const [products, setProducts] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    //  get all orders
    fetch("https://panda-backend.onrender.com/order/getOrder")
      .then(res => res.json())
      .then(data => {
        setOrderList(data)
      });


    //   total products
    fetch("https://panda-backend.onrender.com/product/all")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      });

    // get All users api
    fetch("https://panda-backend.onrender.com/users/getUser")
      .then(res => res.json())
      .then(data => {
        setUsers(data.user)
      })

  }, [])

  function totalPrice(prices) {
    let totalPrice = 0;
    prices.forEach(pd => {
      totalPrice += pd.price;
    });
    return totalPrice;
  }

  let totalRevinew = 0
  orderList.forEach(or => {
    console.log(or.order)
    const order = or.order;

    order.forEach(orP => {
      console.log(orP.price)
      totalRevinew += orP.price
    })
  })



  return (
    <AdminLayout>
      <h2 className='text-2xl italic my-3 border-b border-blue-300 capitalize'> <span className='text-blue-900 text-3xl'>Welocme</span> To your Dashboar , Super-deal</h2>
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: "0.2" }}
        viewport={{ once: true }}
    
      className='DashboardContainer'>
        <div className="orderArea">
          <div className="orderCard">
            <h4>Totol Orders</h4>
            <div className='flex items-center justify-between my-3'>
              <h2 >{orderList.length}</h2>
              <p className='font-medium'>{products.length / 100}<span className='text-blue-700'>%</span> </p>
              <MdFavoriteBorder className="text-3xl" />
            </div>
          </div>

          <div className="orderCard">
            <h4>Totol Products</h4>
            <div className='flex items-center justify-between my-3'>
              <h2 >{products.length}</h2>
              <p className='font-medium'>{orderList.length / 100}<span className='text-blue-700'>%</span> </p>
              <GiProgression className="text-3xl" />
            </div>
          </div>

          <div className="orderCard">
            <h4>prices of All product </h4>
            <div className='flex items-center justify-between my-3'>
              <h2 >{totalPrice(products)}</h2>
              <p className='font-medium'>{products.length}<span className='text-blue-700'>( Products )</span> </p>
              <GiPayMoney className="text-3xl" />
            </div>
          </div>

          <div className="orderCard">
            <h4>Total Revenue</h4>
            <div className='flex items-center justify-between my-3'>
              <h2 >{totalRevinew}</h2>
              <p className='font-medium'>{totalRevinew - totalPrice(products)} <span className='text-blue-700'>BDT</span> </p>
              <GiTakeMyMoney className="text-3xl" />
            </div>
          </div>
          <div className="orderCard">
            <h4>Total Earning</h4>
            <div className='flex items-center justify-between my-3'>
              <h2 >  {totalRevinew - totalPrice(products)}</h2>
              <p className='font-medium'>in {orderList.length}<span className='text-blue-700'>  Orders</span> </p>
              <GiReceiveMoney className="text-3xl" />
            </div>
          </div>
        
          <div className="orderCard">
            <h4>Total Customers</h4>
            <div className='flex items-center justify-between my-3'>
              <h2 >  {users.length}</h2>
              <p className='font-medium'> Active  <span className='text-blue-700'>users</span> </p>
              <FaRegUser className="text-3xl" />
            </div>
          </div>
        </div>

{/*  analytics */}
        <div className='analysisContainer'>
          <div className='analysisCol'>
            <h5 className='flex items-center gap-2'>Active Status <span className='text-3xl text-blue-800'><MdNotificationsActive /></span> </h5>
            <ul className='ml-4'>
              <li>Total Order <span>25%</span> </li>
              <li>Running Order <span>15%</span> </li>
              <li>Customers Growth <span>30%</span> </li>
              <li>Total Revenue <span>40%</span> </li>
            </ul>
          </div>
          <div className='analysisCol'>
            <h5>Analysis</h5>
            <div className='flex items-center gap-2'>
              <FaRegCheckCircle className='text-8xl' />
                <h2 className='text-2xl'>
                     Under Proccesing !
                </h2>
            </div>
          </div>
        </div>

      </motion.div>
    </AdminLayout>
  )
}

export default DashboardContent