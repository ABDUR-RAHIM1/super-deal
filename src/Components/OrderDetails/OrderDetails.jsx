import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import Spinner from "../../Components/Spinner/Spinner"
import "./OrderDetails.css" 
function OrderDetails() {
    const { id } = useParams()
    const [order, setOrder] = useState([])
    useEffect(() => {
        fetch("https://panda-backend.onrender.com/order/getOrder")
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const findOrder = order.find(order => order._id === id)

    if (!findOrder) {
        return <Spinner />
    }
    // total price counter 
    let totalPrice = 0;
    if (findOrder) {
        findOrder.order.forEach(element => {
            console.log(element.price)
            totalPrice += element.price
        });
    }
    // shimpment cost 
    let shipping = 0;
    if (totalPrice <= 0) {
        shipping = 0
    } else if (totalPrice <= 100) {
        shipping = 32
    }
    else if (totalPrice >= 501) {
        shipping = 56
    }
    return (
        <div className='container orderTableConatiner'>
                  <div className="printOrderArea">
                <button onClick={()=> window.print()} className='btn btn-success btn-lg mb-4'>Print</button>
            </div>
            <div className="orderHeader">
                <h1>

                    Welcome to  <span className='text-danger'>𝖘𝖚𝖕𝖊𝖗 𝖉𝖊𝖆𝖑</span> </h1>
                <h5>Order Sheet</h5>
            </div>
            <div className="orderTable">
                <h2 className='text-center my-3 text-primary'>Costomer Information</h2>
                {findOrder && (<Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th>SL</th>
                            <th>Order ID / Email /City</th>
                            <th> Name/ Ps Address/zip Code</th>
                            <th>Email/Pm Address/ Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Order ID : {findOrder._id} </td>
                            <td>Costomar Name : {findOrder.name} </td>
                            <td>Phone No : {"+880 " + findOrder.phone}  </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Email: {findOrder.email} </td>
                            <td>Present Address : {findOrder.presentAddress}</td>
                            <td>Permanent Address : {findOrder.permanentAddress}</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td >City : {findOrder.city}</td>
                            <td>ZIP Code : {findOrder.zip} </td>
                            <td>Order Date : {findOrder.orderDate} </td>
                        </tr>
                    </tbody>
                </Table>)}
            </div>
            {findOrder &&
                <div className="orderProduct">
                    <h2 className='text-center my-3 text-primary'>Order Information</h2>

                    <Table striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>PRODUCT ID</th>
                                <th>CATEGORIES</th>
                                <th>PRICE</th>
                            </tr>
                        </thead>
                        {
                            findOrder.order.map((fOrder, index) => {
                                return (
                                    <tbody key={index}>
                                        <tr>
                                            <td>{fOrder._id}</td>
                                            <td>{fOrder.categorie}</td>
                                            <td>{fOrder.price} ৳</td>
                                        </tr>

                                    </tbody>

                                )
                            })
                        }
                        <tbody>
                            <tr className='text-danger'>
                                <th> Order Quantity : {findOrder.order.length} </th>
                                <th>Total Price :  </th>
                                <th>{totalPrice + shipping} ৳</th>
                            </tr>
                            <tr>
                                <td colSpan={2}></td>
                                <td>With Shipping Cost</td>
                            </tr>
                        </tbody>

                    </Table>
                </div>
            }
      
        </div>
    )
}

export default OrderDetails