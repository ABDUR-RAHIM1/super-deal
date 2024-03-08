import React from 'react'
import "./Categories.css"
import { AiFillStar } from "react-icons/ai"
import categoriesImg from '../../images/categories/image.PNG'
import shoes from "../../images/categories/shoes.jpg"
import jens from "../../images/categories/jens.jpg"
import watch from "../../images/categories/watch.jpg"
import pant from "../../images/categories/pant.jpg"
import cap from "../../images/categories/cap.jpg"
import tShirt from "../../images/categories/t-shirt.jpg"
import { motion } from "framer-motion"

function Categories() {
    return (
        <div className='categories_container bg-gray-100 px-3 py-10 overflow-hidden'>
            <div className="row ">
                <div className="col-md-5">
                    <motion.div
                        initial={{ x: -50 }}
                        whileInView={{ x: 0 }}
                        transition={{ duration: "1" }}
                        viewport={{ once: true }}
                        className="categorie_img_container">
                        <img className='w-100' src={categoriesImg} alt="" />
                    </motion.div>
                </div>
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: "0.5" }}
                    viewport={{ once: true }}
                    className="col-md-7">
                    <div className="row">
                        <div className="col-4">
                            <div className="card">
                                <img src={shoes} alt="" />
                                <h5>Keds For Man</h5>
                                <div className="card-text">
                                    <p>Price : 2999৳</p>
                                    <div className='flex items-center justify-center gap-2 my-3'>
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img src={watch} alt="" />
                                <h5>Watch</h5>
                                <div className="card-text">
                                    <p>Price : 1299৳</p>
                                    <div className='flex items-center justify-center gap-2 my-3'>
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img src={jens} alt="" />
                                <h5>Jens Pant</h5>
                                <div className="card-text">
                                    <p>Price : 1894৳</p>
                                    <div className='flex items-center justify-center gap-2 my-3'>
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img src={tShirt} alt="" />
                                <h5>T-Shirt</h5>
                                <div className="card-text">
                                    <p>Price : 694৳</p>
                                    <div className='flex items-center justify-center gap-2 my-3'>
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img src={pant} alt="" />
                                <h5> Pant</h5>
                                <div className="card-text">
                                    <p>Price : 99৳</p>
                                    <div className='flex items-center justify-center gap-2 my-3'>
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="card">
                                <img src={cap} alt="" />
                                <h5>Cap</h5>
                                <div className="card-text">
                                    <p>Price : 189৳</p>
                                    <div className='flex items-center justify-center gap-2 my-3'>
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                        <AiFillStar className='rating_icon' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Categories