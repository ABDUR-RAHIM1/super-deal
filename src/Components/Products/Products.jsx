import React  from 'react'
import TrendingProducts from '../TrendingProducts/TrendingProducts'

function Products() {
  
 
  return (
    <div className='my-20 px-4'> 
        <div className='w-auto'>
          <h2 className='text-3xl font-medium'>NEW ARRIVALS</h2>
          <div className='flex items-center  gap-2'>
            <span className='block w-16 h-1 bg-[color:var(--special-color)]'></span>
            <p>Check our new today!</p>
          </div> 
      </div>

      <TrendingProducts  />
    </div>
  )
}

export default Products