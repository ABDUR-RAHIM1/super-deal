import React from 'react' 
import { Link } from 'react-router-dom'; 
import "./CartCounter.css"

function CartCounter(props) {
    const { cart } = props; 
    
    let totalPrice = 0;
    let shipping = 0;
    for (let i = 0; i < cart.length; i++) {
        const price = cart[i].price;
        totalPrice += price
    }

    if (totalPrice <= 0) {
        shipping = 0
    } else if (totalPrice <= 100) {
        shipping = 32
    }
    else if (totalPrice >= 501) {
        shipping = 56
    }

    return (
        <div className='cartCounter'>
            <h4>Selected Items : {cart.length}</h4>
            <p>Product Price : {totalPrice} ৳</p>
            <p>Shiping Cost : {shipping} ৳</p>
            <p>Total Price : {totalPrice + shipping} ৳</p>
            {cart.length <= 0 ?
                <button className='btn btn-danger w-100 mt-3' disabled>Cart is Empty</button> :
                <Link to="/shipment">
                    <button className='btn btn-warning w-100 mt-3'>Order Now</button>
                </Link>
            }
        </div>
    )
}

export default CartCounter