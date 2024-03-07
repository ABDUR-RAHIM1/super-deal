import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./TrendingProducts.css"
import { BiShoppingBag } from "react-icons/bi"

function TrendingProducts(props) {
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
                            <div key={i} className='trendProduct'>

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

                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default TrendingProducts