import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./TrendingProducts.css"
import { BiShoppingBag } from "react-icons/bi"
import { motion } from "framer-motion"

function TrendingProducts() {
    const [filteredProducts, setFilteredProducts] = useState([])

    useEffect(() => {
        fetch("https://panda-backend.onrender.com/product/all")
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const p = data.products.slice(-6);
                setFilteredProducts(p);

            });
    }, []);


    return (
        <>
            <div className='TrendingProductsConatiner'>
                {
                    filteredProducts.length < 1 ? <p className='text-center my-5 text-red-500'>There Was No Products</p> : filteredProducts.map((pd, i) => {
                        return (
                            <motion.div
                                initial={{ scale: 0 , opacity:0 }}
                                whileInView={{ scale: 1 , opacity :1 }}
                                transition={{ duration: "0.5" }}
                                viewport={{ once: true }}
                                key={i} className='trendProduct'>

                                <div className="imgWrapper">
                                    <img src={pd.image} alt="" />
                                    <div className="productBg" />
                                </div>
                                <div className='flex items-center justify-between flex-wrap my-3'>

                                    <p className='my-2'>{pd.title}</p>
                                    <p className='text-[#4aa5ad] font-medium'>Price : {pd.price}$</p>
                                </div>

                                <Link to="/products">
                                    <button className='button gradColor hover:gradHoverColor text-white w-full flex items-center justify-center gap-3 my-3 hover:bg-[#36a1a9] hover:text-white duration-300'>
                                        <BiShoppingBag className='text-2xl' /> Shop Now
                                    </button>
                                </Link>

                            </motion.div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TrendingProducts