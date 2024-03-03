import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import ProductList from '../ProductList/ProductList'
import Loading from '../Spinner/Spinner'

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
    <div className='container my-2'>
      <div className="row">
        {
          product.map(pd => {
            return (
              <div className="col-md-4" key={pd._id}>
                <ProductList product={pd} />
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default ProductContainer