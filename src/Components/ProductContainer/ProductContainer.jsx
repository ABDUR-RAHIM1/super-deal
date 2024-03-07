import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductList from "../ProductList/ProductList";
import Loading from "../Spinner/Spinner";

//  chaild of ProductCOntainer Component
function ProductContainer() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  useEffect(() => {
    fetch("https://panda-backend.onrender.com/product/all")
      .then((res) => res.json())
      .then((product) => {
        setProduct(product.products);
        setFilterProduct(product.products);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }
  const uniqueCategories = new Set();

  const handleFilterClick = (e) => {
    const categorie = e.target.innerText.toLowerCase();
    const pd = product.filter(pd => pd.categorie.toLowerCase() === categorie);

    if (!categorie) {
      setFilterProduct(product);
    } else {
      setFilterProduct(pd);
    }
  };
  return (
    <>
     <h2 className="text-center my-4 text-2xl md:text-3xl uppercase font-normal italic">List Of Categories</h2>
      <div className="productFilterArea">
        {product &&
          product.map((pd) => {
            if (!uniqueCategories.has(pd.categorie)) {
             
              uniqueCategories.add(pd.categorie);  
              return (
                <button
                onClick={handleFilterClick}
                  key={pd.categorie}
                  className="button gradColor p-2 px-2"
                >
                  {pd.categorie}
                </button>
              );
            }
            return null;  
          })}
      </div>

      <div className="px-2 bg-gray-200 flex items-center justify-between flex-wrap py-10">
        {filterProduct.length < 1 ? <h2 className="text-red-500 text-2xl font-medium">This Product Are Not Found</h2> 
        : filterProduct.map((pd) => {
          return <ProductList key={pd._id} product={pd} />;
        })}
      </div>
    </>
  );
}

export default ProductContainer;
