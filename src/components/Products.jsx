import React, { useContext, useEffect } from "react";
import AppContext from "../AppContext";
import ProductCard from "./ProductCard";

const Products = () => {
  const { getProducts, state, dispatch, setLoading, loading } =
    useContext(AppContext);
  useEffect(() => {
    setLoading(true);

    getProducts()
      .then((resp) => {
        dispatch({
          type: "GET_PRODUCTS",
          payload: resp.data,
        });
        // setProducts(resp.data);
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
        {state.products.map((product) => (
          <div className="col-md-3" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
