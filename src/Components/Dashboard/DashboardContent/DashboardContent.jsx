import React, { useEffect, useState } from 'react'
import AdminLayout from '../AdminLayout'
import { MdFavoriteBorder } from 'react-icons/md'
import { GiProgression } from "react-icons/gi";
import { FaSortAmountDown } from "react-icons/fa"; 



//  total order
// total prouducts
// total seling product
// selling product price value
// total users
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
  orderList.forEach(or=>{
     console.log(or.order)
     const order = or.order;

     order.forEach(orP => {
       console.log(orP.price)
       totalRevinew  += orP.price
     })
  })


  
  return (
    <AdminLayout>
      <h2 className='text-2xl italic my-3 border-b border-blue-300 capitalize'> <span className='text-blue-900 text-3xl'>Welocme</span> To your Dashboar , Super-deal</h2>
      <div className='DashboardContainer'>
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
              <FaSortAmountDown className="text-3xl" />
            </div>
          </div>

          <div className="orderCard">
            <h4>Total Revenue</h4>
            <div className='flex items-center justify-between my-3'>
              <h2 >{totalRevinew}</h2>
              <p className='font-medium'>{products.length / 100}<span className='text-blue-700'>%</span> </p>
              <FaSortAmountDown className="text-3xl" />
            </div>
          </div>
          <div className="orderCard">
            <h4>Total Earning</h4>
            <div className='flex items-center justify-between my-3'>
              <h2 >  {totalRevinew - totalPrice(products)}</h2>
              <p className='font-medium'>{products.length / 100}<span className='text-blue-700'>%</span> </p>
              <FaSortAmountDown className="text-3xl" />
            </div>
          </div>


        </div>
      </div>
    </AdminLayout>
  )
}

export default DashboardContent