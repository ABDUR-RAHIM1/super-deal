import React, { useContext } from 'react'
import { CartContext } from '../../App'
import CartCounter from '../CartCounter/CartCounter'
import CartItems from '../CartItems/CartItems'
import './Cart.css'
function Cart() {
    const [cart, setCart] = useContext(CartContext)
    // ...

    const handleRemove = (id) => { 
        const index = cart.findIndex((item) => item._id === id);
        if (index !== -1) {
            const updatedCart = [...cart];
            updatedCart.splice(index, 1);
            setCart(updatedCart);
        }
    };
 

    return (
        <div className='cart container mt-4'>
            <div className="row">
                <div className="col-md-8">
                    <div className="cartItemContainer">
                        {
                            cart.map(cart => <CartItems
                                cart={cart}
                                key={cart._id}
                                handleRemove={handleRemove}
                            />)
                        }
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="cartCounter">
                        <h4>

                            <CartCounter cart={cart} />
                        </h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart