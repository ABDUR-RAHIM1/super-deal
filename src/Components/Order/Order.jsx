import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Notification from "../../Components/Notification/Notification"
import Loading from '../Spinner/Spinner'
import "./Order.css"

function Order() {
    const [loading, setLoading] = useState(true)
    const [message, setMessage] = useState('')
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
            .then(data => setMessage(data.message))
    }

 
    if (loading) {
        return <Loading />
      }
    return (
        <div className='orderContainer'>
            {message === "Order Cancel Succcessfully Done" && <Notification message={message} />}
            <table className='table table-striped'>
                <thead>
                    <tr>
                        <td>Order Id</td>
                        <td>Costomar Name:</td>
                        <td>Order Details</td>
                        <td>Cancel Order</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        order.map(order => {
                            return (
                                <tr key={order._id}>
                                    <td>{order._id}</td>
                                    <td>{order.name}</td>
                                    <td>
                                        <Link to={`/orderDetails/${order._id}`}>
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
        </div>
    )
}

export default Order