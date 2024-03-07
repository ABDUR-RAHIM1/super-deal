import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Notification from "../../Notification/Notification"
import AdminLayout from '../AdminLayout'
import { toast } from 'react-toastify'

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
            <div className='oveflow-x-auto text-center'>
                {
                    loading ? "Loading . . ." :

                        <table className='table bg-gray-50'>
                            <thead className='uppercase font-medium'>
                                <tr>
                                    <th>Order Id</th>
                                    <th>Costomar Name:</th>
                                    <th>Order Details</th>
                                    <th>Cancel Order</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                  order &&  order.slice().reverse().map(order => {
                                        console.log(order)
                                        return (
                                            <tr key={order._id}>
                                                <td>{order._id}</td>
                                                <td>{order.name}</td>
                                                <td>
                                                    <Link state={order.order} to={`/orderDetails/${order._id}`}>
                                                        <button className='btn btn-primary btn-sm'>Details</button>
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
            </div>
        </AdminLayout>
    )
}

export default Order