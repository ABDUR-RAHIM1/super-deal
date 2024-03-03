import React, { useContext, useState } from 'react'
import "./ProductList.css"
import { AiOutlineShoppingCart, AiOutlineArrowRight, AiFillDelete, AiFillEdit } from 'react-icons/ai'
import img from "../../images/demo.png"
import { adminContext, CartContext } from '../../App'
import { Link } from 'react-router-dom'
function ProductList(props) {
    const [message, setMessage] = useState("")
    const [isAdminLogin] = useContext(adminContext) 
    const [cart, setCart] = useContext(CartContext)
    const { title, desc, price, categorie, image , _id } = props.product
    const handleClick = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    // delete product 
    const handleDeleteProduct = (id) => {
        fetch(`https://panda-backend.onrender.com/product/deleteProduct/${id}`, {
            method: "DELETE",
        }).then(res => res.json())
            .then(data => {
                setMessage(data.message)
            })
    }

    if (message.length > 1) {
         alert(message)
         setMessage("")
    }

    return (
        <>

            <div className='productCard'>
           { isAdminLogin &&    <div className="productAdminBtnContainer">
                    <button onClick={() => handleDeleteProduct(_id)} className='btn btn-danger  adminBtnIcon'>
                        <AiFillDelete />
                    </button>
                    <button className='btn btn-warning adminBtnIcon'>
                        <AiFillEdit />
                    </button>
                </div>}
                <img src={image || img} alt="" />
                <h5 className='my-3'>{title.slice(0 , 25) + " . . . "}</h5>
                <h6>Price : {price} ৳</h6>
                <p className='text-primary'>Categories : {categorie}</p>
                <p>Decription : {desc.slice(0, 100) + " . . ."}</p>
                <div className="productBtnContainer">
                    <button
                        onClick={() => handleClick(props.product)}
                        className='btn btn-sm btn-warning cartBtn'>
                        <AiOutlineShoppingCart className='addCartIcon' />
                        Add To Cart
                    </button>
                    <Link to={`/details/${_id}`}>
                        <button className='btn btn-outline-info btn-sm cartBtn'>Details <AiOutlineArrowRight /></button>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default ProductList