import React, { useContext } from 'react'
import { AiOutlineShoppingCart, AiOutlineArrowRight, AiFillDelete, AiFillEdit } from 'react-icons/ai'
import img from "../../images/demo.png"
import { adminContext, CartContext } from '../../App'
import { Link } from 'react-router-dom' 
function ProductList(props) {  
    const [cart, setCart] = useContext(CartContext)
    const { title, price, categorie, image, _id } = props.product
    const handleClick = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
  
 

    return (
        <>

            <div className='productCard'>
                {/*  product cards */}
                <div className='px-2'>

                    <div className='w-full overflow-hidden'>
                        <img src={image || img} alt="" />
                    </div>

                    <h5 className='my-3'>{title.slice(0, 25) + " . . . "}</h5>
                    <h6>Price : {price} ৳</h6>
                    <p className='text-primary'>Categories : {categorie}</p>
                    <div className=" flex items-center justify-between flex-wrap my-3">
                        <button
                            onClick={() => handleClick(props.product)}
                            className='cardBtn'>
                            <AiOutlineShoppingCart className='addCartIcon' />

                        </button>
                        <Link to={"/details"} state={props.product} className='cardLink addCartIcon'>
                            <AiOutlineArrowRight />
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductList