import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom' 
import AdminLayout from '../AdminLayout'
import { toast } from 'react-toastify'
import {motion} from "framer-motion"
function Order() {
    const [loading, setLoading] = useState(true)
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch("https://panda-backend.onrender.com/order/getOrder")
            .then(res => res.json())
            .then(data => {
                setOrder(data)
                setLoading(false)
            })

    }, [order])

    //  cancel order 
    const handleCancel = (id) => {
        fetch(`https://panda-backend.onrender.com/order/deleteOrder/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => toast(data.message))
    } 

    return (
        <AdminLayout>
            <motion.div
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: "2" }}
          
            className='oveflow-x-auto text-center'>
                   <h2 className='text-center text-2xl mb-5 text-gray-600 uppercase'>List Of Orders</h2>
                {
                    loading ? "Loading . . ." :
                      
                        <table className='table bg-gray-50'>
                            <thead className='uppercase font-medium'>
                                <tr>
                                    <th>SL</th>
                                    <th>Order Date</th>
                                    <th>Costomar Name:</th>
                                    <th>Order Details</th>
                                    <th>Cancel Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                  order &&  order.slice().reverse().map((order , i) => {
                                       
                                        return (
                                            <tr key={order._id}>
                                                <td>{i+1}</td>
                                                <td>
                                                {new Date(order.orderDate).getDate()}/{new Date(order.orderDate).getMonth() + 1}/{new Date(order.orderDate).getFullYear()}
                                                </td>
                                                <td>{order.name}</td>
                                                <td>
                                                    <Link state={order.order} to={`/orderDetails/${order._id}`}>
                                                        <button download className='btn btn-primary btn-sm'>Details</button>
                                                    </Link>
                                                </td>
                                                <td><button onClick={() => handleCancel(order._id)} className='btn btn-danger btn-sm'>Cancel </button></td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                }
            </motion.div>
        </AdminLayout>
    )
}

export default Order