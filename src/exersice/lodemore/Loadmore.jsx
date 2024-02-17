import React, { useEffect, useState } from "react";
import "./loadmore.css"
const Loadmore = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const maxProducts = 100; // Set the maximum number of products

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const result = await response.json();

      if (result && result.products && result.products.length) {
        // Append new products to the existing list
        setProducts((prevProducts) => [...prevProducts, ...result.products]);
        setCount(count + 1);
        setLoading(false);

        // Scroll to the bottom of the page
        window.scrollTo(0, document.body.scrollHeight);

        // Disable loading after reaching the maximum number of products
        if (products.length >= maxProducts) {
          setLoading(true);
        }
      }
      console.log(result);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  return (
    <div className="loadmorecontainer">
      <div className="product-container">
        {products && products.length
          ? products.map((item, index) => (
              <div key={index} className="products" style={{ display: "grid" }}>
                {/* Use the 'item' object to set the 'src' attribute */}
                <img
                  src={item.thumbnail}
                  alt="products"
                  width="200px"
                  height="200px"
                />
                <p>{item.title}</p>
              </div>
            ))
          : null}
      </div>
      <div>
        {products.length < maxProducts && (
          <button onClick={fetchProducts}>Load More</button>
        )}
      </div>
    </div>
  );
};

export default Loadmore;
