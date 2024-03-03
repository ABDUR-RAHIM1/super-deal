import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./TrendingProducts.css"
import { BiShoppingBag } from "react-icons/bi"

function TrendingProducts(props) {

    const { filterText } = props

    const [filteredProducts, setFilteredProducts] = useState([])

    const trendProduct = [
        {
            id: "1",
            name: "headphone",
            title: "Bluetooth headphone",
            price: 488,
            image: "https://i.postimg.cc/62Lzd00R/headphone.jpg"
        },
        {
            id: "2",
            name: "Power Bank",
            title: "chargeable Power Bank",
            price: 388,
            image: "https://i.ibb.co/MckgCNR/power-bank.jpg"
        },
        {
            id: "3",
            name: "smartphone",
            title: "Best smartphone",
            price: 22388,
            image: "https://i.ibb.co/JHrZgf9/smartphone.jpg"
        },

        {
            id: "4",
            name: "Power Bank",
            title: "chargeable Power Bank",
            price: 388,
            image: "https://i.ibb.co/MckgCNR/power-bank.jpg"
        },
        {
            id: "5",
            name: "smartphone",
            title: "Best smartphone",
            price: 22388,
            image: "https://i.ibb.co/JHrZgf9/smartphone.jpg"
        },
        {
            id: "6",
            name: "smart watch",
            title: "GPS Smart Watch",
            price: 1388,
            image: "https://i.ibb.co/dBbrBg6/smart-watch.jpg"
        },
    ];


    const filteredProduct = trendProduct.filter(fp => (fp.name.toLowerCase()) === filterText)

    useEffect(() => {
        if (filterText.length < 1) {
            setFilteredProducts(trendProduct)
        } else {
            setFilteredProducts(filteredProduct)
        }
    }, [filterText])


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

                                    <h5 className='text-lg font-medium hover:text-[color:var(--special-color)] cursor-pointer'>{pd.name}</h5>
                                    <p className='my-2'>{pd.title}</p>
                                </div>
                                <p className='text-[#4aa5ad] font-medium'>Price : {pd.price}$</p>
                                <Link to="/allProducts">

                                    <button className='button bg-[color:var(--special-color)]   w-full flex items-center justify-center gap-3 my-3 hover:bg-[#36a1a9] hover:text-white duration-200'>
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