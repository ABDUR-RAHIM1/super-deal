import React from 'react'
import { BsInstagram, BsTwitter } from 'react-icons/bs'
import { FaCcMastercard, FaCcPaypal, FaCcVisa, FaFacebook, FaLocationArrow } from 'react-icons/fa'
import { FcCallback } from 'react-icons/fc'
import { MdOutgoingMail } from 'react-icons/md'
import {motion} from "framer-motion"

function Footer1() {
    return (
        <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: "0.5" }} 
        className='footer'>
            <div className="footer-col">
                <h1 className='footer-title'>𝖘𝖚𝖕𝖊𝖗 𝖉𝖊𝖆𝖑</h1>
                <p>Dolore voluptatibus molestias rem aspernatur odit expedita corrupti unde ratione neque nihil dolor, nulla asperiores assumenda sint totam dolores nemo, obcaecati quae ipsam, eius nobis aliquam quos consequatur tempore. Quasi ratione, assumenda inventore libero maxime hic praesentium?</p>

                <div className="text-4xl flex gap-4 my-4">
                    <a href="https://web.facebook.com/Aabdurrahim.17" target="_blank" rel="noreferrer">  <FaFacebook className='fIcon' /></a>
                    <BsInstagram className='fIcon' />
                    <BsTwitter className='fIcon' />
                </div>

            </div>
            <div className="footer-col">
                <h1 className='footer-title'>USEFUL LINK</h1>
                <ul>
                    <li>home</li>
                    <li>Man Fasion</li>
                    <li>Accesoiries</li>
                    <li>Order Tracking</li>
                    <li>Whitlist</li>
                </ul>
            </div>
            <div className="footer-col">
                <h1 className='footer-title'>Account</h1>
                <ul>
                    <li>Cart</li>
                    <li>Woman Fashion</li>
                    <li>My Account</li>
                    <li>Whitlist</li>
                    <li>Terms</li>
                </ul>
            </div>
            <div className="footer-col">
                <h1 className='footer-title'>contact</h1>
                <ul>
                    <li className='flex items-center'> <FaLocationArrow className='fIcon mr-3' /> Lalmonirhat 15 - Rangpur 1200 </li>
                    <li className='flex items-center'> <FcCallback className='fIcon mr-3' /> +88 01321040273 </li>
                    <li className='flex items-center ' > <MdOutgoingMail className='fIcon mr-3' /> <span className='lowercase'>superdealshop@gmail.com</span> </li>
                </ul>
                <div className="flex items-center justify-start gap-3 flex-wrap">
                    <FaCcMastercard className="pyIcon" />
                    <FaCcPaypal className="pyIcon" />
                    <FaCcVisa className="pyIcon" />
                </div>
            </div>
        </motion.div>
    )
}

export default Footer1