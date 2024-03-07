import React from 'react'
import img from "../../images/thanks.jpg"

function ThanksMessage() {
  return (
    <div className='w-full h-auto md:min-h-screen px-2 bg-gray-200 flex items-center justify-center'>
         <img className='w-full h-[60vh] md:w-[80%] m-auto' src={img} alt="" />
    </div>
  )
}

export default ThanksMessage