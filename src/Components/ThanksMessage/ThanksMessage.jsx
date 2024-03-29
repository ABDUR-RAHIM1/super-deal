import React from 'react'
import img from "../../images/thanks.jpg"
import {motion} from "framer-motion"

function ThanksMessage() {
  return (
    <motion.div
    initial={{ scale: 0 }}
    whileInView={{ scale: 1 }}
    transition={{ duration: "1" }} 
    className='w-full h-auto md:min-h-screen px-2 bg-gray-200 flex items-center justify-center'>
         <img className='w-full h-[60vh] md:w-[80%] m-auto' src={img} alt="" />
    </motion.div>
  )
}

export default ThanksMessage