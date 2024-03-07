import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { CartContext } from "../../App";
import dummyImg from "../../images/demo.png";
import ProductList from "../ProductList/ProductList";

function Details() {
  const state = useLocation().state;
  const { _id, title, desc, image, price, categorie } = state;
  const [reletedProducts, setReletedProducts] = useState([]);
  const [cart, setCart] = useContext(CartContext);

  const handleClick = (product) => {
    const newCart = [...cart, product];
    setCart(newCart);
  };

  //  fetch releted products
  useEffect(() => {
    fetch("https://panda-backend.onrender.com/product/all")
      .then((res) => res.json())
      .then((product) => { 
        const products = product.products;

        const relatedProducts = products.filter(
          (pd) => pd.categorie === categorie && pd._id !== _id
        );
        setReletedProducts(relatedProducts);
      });
  }, []);

  return (
    <div className="productDetails">
      <div className="detailsContainer">
        <div className="details">
          <div className="w-[40%]">
            <img src={image || dummyImg} alt={title} />
          </div>
          <div className="text">
            <h2 className="text-2xl my-3">{title}</h2>

            <p className="mb-4">{desc}</p>

            <p>
              Brand :{" "}
              <span className="text-blue-600 cursor-pointer">{categorie}</span>{" "}
            </p>
            <hr className="my-2 text-gray-400" />

            <h1 className="text-3xl my-3 text-red-500 uppercase font-normal">
              Price : {price} BDT{" "}
            </h1>

            <p className="font-medium">Quantity : {cart.length}</p>

            <button
              onClick={() => handleClick(state)}
              className="button py-2 capitalize bg-red-500 my-3 text-white font-medium"
            >
              Add To Cart With Quantity
            </button>
          </div>
        </div>

        {/*  releted product filtering with categories */}
        <div className="reletedProductContainer">
          <h2 className="text-2xl italic my-3">
            Related Products Of{" "}
            <span className="text-red-500">{categorie}</span>{" "}
          </h2>

          <div>
            {reletedProducts.length < 1 ? (
              <h2 className="text-red-500 my-3">
                Releted Product Are Not Found
              </h2>
            ) : (
              <div className="flex items-center justify-between flex-wrap">
                {reletedProducts.map((rpd) => (
                  <ProductList key={rpd._id} product={rpd} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/*  sidebar right */}
      <div className="sidebar">
        <div>
          <small>Delivery :</small>
          <p className=" mb-2">
            <span className="font-medium"> Rangpur Sadar, </span>
            Road No. 12 - 19
          </p>
        </div>
        <hr className="text-gray-400" />

        <div className="my-3">
          <p>
            <span className="font-medium"> Standard Delivery</span> 5-12 day(s)
          </p>
        </div>

        <div className="mb-4">
          <p>Cash on Delivery Available</p>

          <p className="my-3 text-slate-800">
            14 days free & easy return Change of mind is not applicable
          </p>
        </div>
        <img className="w-full h-44" src={image || dummyImg} alt="" />
      </div>
    </div>
  );
}

export default Details;

// import React, { useContext, useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'
// import Loading from '../Spinner/Spinner'
// import { AiOutlineShoppingCart } from 'react-icons/ai'
// import img from "../../images/demo.png"
// import "./Details.css"
// import { CartContext } from '../../App'
// function Details() {
//   const { id } = useParams()
//   const [cart, setCart] = useContext(CartContext)
//   const [loading, setLoading] = useState(true)
//   const [product, setProduct] = useState([])
//   useEffect(() => {
//     fetch("https://panda-backend.onrender.com/product/all")
//       .then(res => res.json())
//       .then(product => {
//         setProduct(product.products)
//         setLoading(false)
//       })
//   }, [])
//   const findProduct = product.find(pd => pd._id === id)
//   if (loading) {
//     return <Loading />
//   }
//   // add to cart
//   const handleClick = (product) => {
//     const newCart = [...cart, product]
//     setCart(newCart)
//   }

//   return (
//     <div className='container detailsContainer'>
//       hshahshas
//       <div className="detailsImg">
//         <img src={findProduct.image || img} alt="" />
//       </div>
//       <div className="details">
//         <h2>{findProduct.title}</h2>
//         <h6>Categories : {findProduct.categorie}</h6>
//         <p>Avaiilable in Stock : {`${findProduct.title.length} ${findProduct.categorie}`}</p>
//         <p>Original Price : {findProduct.price} ৳</p>
//         <h6 className='text-danger'>Discount Price : {findProduct.categorie.length +Number("100") } ৳</h6>
//         <p>Available Price : {findProduct.price - findProduct.categorie.length} ৳</p>
//         <p> <span className='text-primary'>Description</span> : {findProduct.desc}   obcaecati aperiam? Numquam in odit laboriosam laborum, dicta unde illo temporibus assumenda aliquid, esse quis hic? Commodi facilis, debitis libero voluptatem alias molestiae fuga quaerat soluta. Sed cum velit ipsum atque sunt consectetur </p>
//         <button
//           onClick={() => handleClick(findProduct)}
//           className='btn btn-sm btn-warning cartBtn'>
//           <AiOutlineShoppingCart className='addCartIcon' />
//           add To Cart
//         </button>
//       </div>

//     </div>
//   )
// }

// export default Details
