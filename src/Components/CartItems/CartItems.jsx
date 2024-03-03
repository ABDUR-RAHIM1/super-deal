import React from 'react'
import "./CartItems.css"
import img from "../../images/banner-images/s1.png"
function CartItems(props) {
    const { title, desc, price, _id } = props.cart;
 
    return (
        <div className='cartItems'>
            <div className="cartImg">
                <img src={img} alt="" />
            </div>
            <div className="cartText">
                <h4>{title}</h4>
                <h6>Price : {price} ৳</h6>
                <p>{desc.slice(0,100) + " . . ."}</p>
                <button onClick={()=>props.handleRemove(_id)} className='btn btn-sm btn-danger fw-bold'>Remove items</button>
            </div>
        </div>
    )
}

export default CartItems