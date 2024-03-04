import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductList from '../ProductList/ProductList'
import Loading from '../Spinner/Spinner'

//  chaild of ProductCOntainer Component
function ProductContainer() {
  const [loading, setLoading] = useState(true)
  const [product, setProduct] = useState([])
  useEffect(() => {
    fetch("https://panda-backend.onrender.com/product/all")
      .then(res => res.json())
      .then(product => { 
        setProduct(product.products)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <Loading />
  }
  return (
    <div className='px-2 bg-gray-200 flex items-center justify-between flex-wrap py-10'> 
        {
          product.map(pd => {
            return ( 
                <ProductList  key={pd._id} product={pd} /> 
            )
          })
        } 
    </div>
  )
}

export default ProductContainer