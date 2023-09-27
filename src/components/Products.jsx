import React, { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const { getProducts, products, setProducts, setLoading, loading } =
    useContext(AppContext);
  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((resp) => {
        setProducts(resp.data);
        setLoading(false);
        console.log(loading);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <div className="row">
        {products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
