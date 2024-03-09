import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import ProductList from "../ProductList/ProductList";
import Loading from "../Spinner/Spinner";
import { searchcContext } from "../../App";

//  chaild of ProductCOntainer Component
function ProductContainer() {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState([]);
  const [filterProduct, setFilterProduct] = useState([]);
  const [searchText] = useContext(searchcContext)

  useEffect(() => {
    fetch("https://panda-backend.onrender.com/product/all")
      .then((res) => res.json())
      .then((product) => {
        setProduct(product.products);
        setFilterProduct(product.products);
        setLoading(false);
        const search = product.products.filter(pd => pd.categorie === searchText)
        if (searchText.length <= 0) {
          setFilterProduct(product.products);
        } else {
          setFilterProduct(search);
        }

      });
  }, [searchText]);

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
                  className="button text-sm gradColor p-2 px-2"
                >
                  {pd.categorie}
                </button>
              );
            }
            return null;
          })}
      </div>

      <div className="px-2 bg-gray-200 flex items-center justify-between flex-wrap py-10">
        {filterProduct.length < 1 ? <h2 className="text-blue-900 text-2xl font-medium capitalize"> <span className={`text-red-600 lowercase`}>{searchText}</span>  Product not found</h2>
          : filterProduct.slice().reverse().map((pd) => {
            return <ProductList key={pd._id} product={pd} />;
          })}
      </div>
    </>
  );
}

export default ProductContainer;
