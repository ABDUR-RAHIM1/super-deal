import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loading from '../Spinner/Spinner'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import img from "../../images/demo.png"
import "./Details.css"
import { CartContext } from '../../App'
function Details() {
  const { id } = useParams()
  const [cart, setCart] = useContext(CartContext)
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
  const findProduct = product.find(pd => pd._id === id)
  if (loading) {
    return <Loading />
  }
  // add to cart 
  const handleClick = (product) => {
    const newCart = [...cart, product]
    setCart(newCart)
  }
 
  return (
    <div className='container detailsContainer'>
      <div className="detailsImg">
        <img src={findProduct.image || img} alt="" />
      </div>
      <div className="details">
        <h2>{findProduct.title}</h2>
        <h6>Categories : {findProduct.categorie}</h6>
        <p>Avaiilable in Stock : {`${findProduct.title.length} ${findProduct.categorie}`}</p>
        <p>Original Price : {findProduct.price} ৳</p>
        <h6 className='text-danger'>Discount Price : {findProduct.categorie.length +Number("100") } ৳</h6>
        <p>Available Price : {findProduct.price - findProduct.categorie.length} ৳</p>
        <p> <span className='text-primary'>Description</span> : {findProduct.desc}   obcaecati aperiam? Numquam in odit laboriosam laborum, dicta unde illo temporibus assumenda aliquid, esse quis hic? Commodi facilis, debitis libero voluptatem alias molestiae fuga quaerat soluta. Sed cum velit ipsum atque sunt consectetur </p>
        <button
          onClick={() => handleClick(findProduct)}
          className='btn btn-sm btn-warning cartBtn'>
          <AiOutlineShoppingCart className='addCartIcon' />
          add To Cart
        </button>
      </div>

    </div>
  )
}

export default Details