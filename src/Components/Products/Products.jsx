import React, { useState } from 'react'
import TrendingProducts from '../TrendingProducts/TrendingProducts'

function Products() {
  const buttons = [
    "headphone", "smartphone", "laptop", "Power Bank"
  ]

  const [filterText , setFilterText] = useState("")
  const handleClickBtn =(e)=>{ 
     const btnText = (e.target.innerText).toLowerCase();
     setFilterText(btnText)
  }


  return (
    <div className='my-20 px-4'>
      <div className="flex items-center justify-between flex-wrap ">
        <div className='w-auto'>
          <h2 className='text-3xl font-medium'>NEW ARRIVALS</h2>
          <div className='flex items-center justify-center gap-2'>
            <span className='block w-16 h-1 bg-[color:var(--special-color)]'></span>
            <p>Check our new today!</p>
          </div>
        </div>
        <div className="flex items-center justify-center flex-wrap my-3 md:my-0 gap-4 font-medium overflow-auto">
          {
            buttons.map((btn, i) => (
              <button onClick={handleClickBtn} key={i} className='filterBtn'>
                {btn}
              </button>
            ))
          }
        </div>
      </div>

      <TrendingProducts filterText={filterText} />
    </div>
  )
}

export default Products