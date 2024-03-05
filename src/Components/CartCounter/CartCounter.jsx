import React from 'react' 
import { Link } from 'react-router-dom';  

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
            <h4 className='text-2xl my-3'>Selected Items : {cart.length}</h4>
            <p className='text-red-500 my-2 text-xl'>Products Price : {totalPrice} BDT</p>
            <p className='ny-2 text-xl'>Shipping Cost : {shipping} BDT</p>
            <p className='text-red-500 my-2 text-xl'>Total Price : {totalPrice + shipping} BDT</p>
            {cart.length <= 0 ?
                <button className='btn btn-danger w-100 mt-3' disabled>Cart is Empty</button> :
                <Link to="/shipment">
                    <button className='button py-2 w-full  gradColor hover:gradHoverColor my-4 font-medium'>Order Now</button>
                </Link>
            }
        </div>
    )
}

export default CartCounter