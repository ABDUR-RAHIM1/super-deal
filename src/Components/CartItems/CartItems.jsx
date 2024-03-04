import React from 'react'
import dummyImg from "../../images/demo.png"
function CartItems(props) {
    const { title, desc, image , price, _id , categorie } = props.cart;
 
    return (
        <div className='flex items-center justify-start gap-3 my-5 bg-gray-50 border-b border-gray-200'>
            <div className="cartImg">
                <img src={image || dummyImg} alt="" />
            </div>
            <div className="cartText">
                <h4 className='text-2xl my-2'>{title}</h4>
                <h6 className='font-medium my-2'>Price : {price} BDT</h6>
                <p className='my-3'>Categories : {categorie}</p>
                <p>{desc.slice(0,100) + " . . ."}</p>
                <button onClick={()=>props.handleRemove(_id)} className='button bg-red-500 py-2 text-white my-3 font-medium hover:bg-red-600 duration-200'>Remove items</button>
            </div>
        </div>
    )
}

export default CartItems