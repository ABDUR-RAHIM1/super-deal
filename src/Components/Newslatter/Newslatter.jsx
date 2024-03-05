import React from 'react'
import { Link } from 'react-router-dom'

function Newslatter() {
    return (
        <div className='newslatter px-5'>
            <div className='text-center'>
                <h1 className='text-2xl md:text-3xl font-medium'> Premier Delivery - Only <span className='bg-yellow-500 px-3 py-1 text-black'> $12.45</span> </h1>
                <p className='my-5 w-full md:w-[60%] m-auto'>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.
                    Nullam malesuada erat ut turpis.
                </p>

                <Link to={'/allProducts'} className='button py-2 md:py-3 px-5 gradColor hover:gradHoverColor duration-300 text-white font-medium hover:bg-slate-700'>Shop Now</Link>
            </div>
        </div>
    )
}

export default Newslatter