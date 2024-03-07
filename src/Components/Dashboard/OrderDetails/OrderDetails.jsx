import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom' 
import Spinner from "../../Spinner/Spinner" 

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

    console.log(findOrder)

    return (


        <div className='invoiceContainer'>
            <div className="invoiceHeader">
                <div>
                    <h2>Invoice</h2>
                    <p>Invoice No : {findOrder._id}</p>
                    <p className='my-2'>Date : {new Date(findOrder.orderDate).getDate()} - {new Date(findOrder.orderDate).getMonth() + 1} - {new Date(findOrder.orderDate).getFullYear()}</p>
                </div>
                <div>
                    <h2>Super-Deal</h2>
                    <p>Best Online Buying Platform</p>
                </div>
            </div>

            <div className='invoiceAddress'>
                <div className='w-[48%]'>
                    <h2> Order From </h2>
                    <p>City : {findOrder.city}</p>
                    <p> Present Address : {findOrder.presentAddress}</p>
                    <p>permanent Address : {findOrder.permanentAddress}</p>
                    <p>Zip Code : {findOrder.zip}</p>
                </div>
                <div className='w-[48%]'>
                    <h2> Order To </h2>
                    <p>City : Rangpur </p>
                    <p> Present Address : Rangpur </p>
                    <p>permanent Address : Lalmonirhat -Road. 208 </p>
                    <p>Zip Code : 5400</p>
                </div>
            </div>

            {/*  costomer table */}
            <div className="costomerInfo">
                <h2 className='text-xl text-center italic my-2'>Costomer Information</h2>
                <table className='table bg-gray-50 border-b border-blue-700'>
                    <thead>
                        <tr>
                            <th>  <p>Costomer Name </p></th>
                            <th>  <p>Phone Number </p></th>
                            <th >  <p>Email </p></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td> {findOrder.name}</td>
                            <td> {findOrder.phone}</td>
                            <td> {findOrder.email}</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        {null}
                    </tfoot>
                </table>
            </div>

            {/*  odrder table */}
            <div className="orderInfo">
                <h2 className='text-xl text-center italic my-2'>Product Information</h2>
                <table className='table bg-gray-50 border-b border-blue-700'>
                    <thead>
                        <tr>
                            <th>sl</th>
                            <th>Product ID</th>
                            <th>Image</th>
                            <th>category</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            findOrder &&
                            findOrder.order.map((or, i) => (
                                <tr>
                                    <td>{i}</td>
                                    <td>{or._id}</td>
                                    <td><img className='w-10 h-10' src={or.image} alt="" /></td>
                                    <td>{or.categorie}</td>
                                    <td>{or.price} BDT </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <tfoot>
                        {null}
                    </tfoot>
                </table>
            </div>

            <div className="paymentArea">
                <div className='w-[48%]'>
                    <h2>Payment Info</h2>
                    <p className='font-medium text-lg uppercase text-blue-900'> Cash On Delivery </p>
                    <p>Stay With Us for Better Services</p>
                </div>
                <div className='w-[48%]'>
                    <p> Total Items : {findOrder.order.length} </p>
                    <p>Shipping Cost : {shipping} BDT</p>
                    <p>Products Cost : {totalPrice} BDT</p>
                    <h2>Total Price : {totalPrice + shipping} BDT</h2>
                </div>
            </div>

            <div className='invoiceFooter'>
                 <h1 className='text-3xl uppercase my-3 font-medium text-blue-900'>Thank You !</h1>
                 <p className='capitalize text-blue-900 font-medium'>
                 for choosing Super-deal for your product needs. We appreciate  hope to continue serving you in the future. If you have any questions or concerns, please don't hesitate to reach out.
                 </p>
            </div>


        </div>



        // <div className='container orderTableConatiner'>
        //           <div className="printOrderArea">
        //         <button onClick={()=> window.print()} className='btn btn-success btn-lg mb-4'>Print</button>
        //     </div>
        //     <div className="orderHeader">
        //         <h1>

        //             Welcome to  <span className='text-danger'>𝖘𝖚𝖕𝖊𝖗 𝖉𝖊𝖆𝖑</span> </h1>
        //         <h5>Order Sheet</h5>
        //     </div>
        //     <div className="orderTable">
        //     <h2 className='text-center my-3 text-2xl italic text-gray-600'>Costomar Information</h2>
        //         {findOrder && (<Table striped bordered hover variant="light">
        //             <thead>
        //                 <tr>
        //                     <th>SL</th>
        //                     <th>Order ID / Email /City</th>
        //                     <th> Name/ Ps Address/zip Code</th>
        //                     <th>Email/Pm Address/ Date</th>
        //                 </tr>
        //             </thead>
        //             <tbody>
        //                 <tr>
        //                     <td>1</td>
        //                     <td>Order ID : {findOrder._id} </td>
        //                     <td>Costomar Name : {findOrder.name} </td>
        //                     <td>Phone No : {"+880 " + findOrder.phone}  </td>
        //                 </tr>
        //                 <tr>
        //                     <td>2</td>
        //                     <td>Email: {findOrder.email} </td>
        //                     <td>Present Address : {findOrder.presentAddress}</td>
        //                     <td>Permanent Address : {findOrder.permanentAddress}</td>
        //                 </tr>
        //                 <tr>
        //                     <td>3</td>
        //                     <td >City : {findOrder.city}</td>
        //                     <td>ZIP Code : {findOrder.zip} </td>
        //                     <td>Order Date : {findOrder.orderDate} </td>
        //                 </tr>
        //             </tbody>
        //         </Table>)}
        //     </div>
        //     {findOrder &&
        //         <div className="orderProduct">
        //             <h2 className='text-center my-3 text-2xl italic text-gray-600'>Products Information</h2>

        //             <Table striped bordered hover variant="light">
        //                 <thead>
        //                     <tr>
        //                         <th>PRODUCT ID</th>
        //                         <th>CATEGORIES</th>
        //                         <th>PRICE</th>
        //                     </tr>
        //                 </thead>
        //                 {
        //                     findOrder.order.map((fOrder, index) => {
        //                         return (
        //                             <tbody key={index}>
        //                                 <tr>
        //                                     <td>{fOrder._id}</td>
        //                                     <td>{fOrder.categorie}</td>
        //                                     <td>{fOrder.price} ৳</td>
        //                                 </tr>

        //                             </tbody>

        //                         )
        //                     })
        //                 }
        //                 <tbody>
        //                     <tr className='text-danger'>
        //                         <th> Order Quantity : {findOrder.order.length} </th>
        //                         <th>Total Price :  </th>
        //                         <th>{totalPrice + shipping} ৳</th>
        //                     </tr>
        //                     <tr>
        //                         <td colSpan={2}></td>
        //                         <td>With Shipping Cost</td>
        //                     </tr>
        //                 </tbody>

        //             </Table>
        //         </div>
        //     }

        // </div>
    )
}

export default OrderDetails