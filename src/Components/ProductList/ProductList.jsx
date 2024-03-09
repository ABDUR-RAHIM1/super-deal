import React, { useContext } from 'react'
import { AiOutlineShoppingCart, AiOutlineArrowRight  } from 'react-icons/ai'
import img from "../../images/demo.png"
import { CartContext } from '../../App'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"

function ProductList(props) {
    const [cart, setCart] = useContext(CartContext)
    const { title, price, categorie, image} = props.product
    const handleClick = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }



    return (
        <>

            <motion.div
             initial={{opacity:0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: "1" }}
            className='productCard'>
                {/*  product cards */}
                <div className='px-2'>

                    <div className='w-full overflow-hidden'>
                        <img src={image || img} alt="" />
                    </div>

                    <motion.div
                        initial={{ x: 10 }}
                        whileInView={{ x: 1 }}
                        transition={{ duration: "0.5" }}
                        viewport={{ once: true }}
                    >
                        <h5 className='my-3 font-medium capitalize'>{title.slice(0, 25) + " . . . "}</h5>
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
                    </motion.div>

                </div>
            </motion.div>
        </>
    )
}

export default ProductList