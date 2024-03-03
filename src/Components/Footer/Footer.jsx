import React from 'react'
import "./Footer.css"
import { FaFacebook, FaLocationArrow, FaCcPaypal, FaCcVisa, FaCcMastercard } from "react-icons/fa"
import { BsInstagram, BsTwitter } from "react-icons/bs"
import { FcCallback } from "react-icons/fc"
import { MdOutgoingMail } from "react-icons/md"

function Footer() {
  return (
    <div className='footerContainer '>
      <div className='container wrapper'>
        <div className="leftFooter">
          <div>
            <h1 className='text-5xl my-3 text-[color:var(--special-color)]'>𝖘𝖚𝖕𝖊𝖗 𝖉𝖊𝖆𝖑</h1>
          </div>
          <div className="text">
            <p>Dolore voluptatibus molestias rem aspernatur odit expedita corrupti unde ratione neque nihil dolor, nulla asperiores assumenda sint totam dolores nemo, obcaecati quae ipsam, eius nobis aliquam quos consequatur tempore. Quasi ratione, assumenda inventore libero maxime hic praesentium?</p>
          </div>
          <div className="text-4xl flex gap-3 my-4">
            <a href="https://web.facebook.com/Aabdurrahim.17" target="_blank" rel="noreferrer">  <FaFacebook className='footerIcon' /></a>
            <BsInstagram className='footerIcon' />
            <BsTwitter className='footerIcon' />
          </div>
        </div>
        <div className="centerFooter">
          <div className="centerLeft">
            <h3 className='mb-3 text-3xl uppercase'>useful link</h3>
            <ul className='text-lg font-medium capitalize'>
              <li className='my-3'>home</li>
              <li className='my-3'>man fasion</li>
              <li className='my-3'>accesoiries</li>
              <li className='my-3'>order tracking</li>
              <li className='my-3'>whitlist</li>
            </ul>
          </div>
          <div className="rightLeft">
            <h3 className='mb-3 text-3xl uppercase'>account</h3>
            <ul className='text-lg font-medium capitalize'>
              <li>cart</li>
              <li>woman fasion</li>
              <li>my account</li>
              <li>whitlist</li>
              <li>terms</li>
            </ul>
          </div>
        </div>

        <div className="rightFooter">
          <h3 className='mb-3'>Contact</h3>
          <div className="address">
            <ul className='footerItems'>
              <li> <FaLocationArrow className='contactIcon' /> Dhabnondi 15 - Dahka 1200 </li>
              <li> <FcCallback className='contactIcon' /> +88 01323212189 </li>
              <li> <MdOutgoingMail className='contactIcon' /> superdealshop@gmail.com </li>
            </ul>
          </div>
          <div className="paymentCart">
            <FaCcMastercard className="pyIcon" />
            <FaCcPaypal className="pyIcon" />
            <FaCcVisa className="pyIcon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer

 