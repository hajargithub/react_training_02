import React, { useContext } from "react";
import AppContext from "../AppContext";

const ProductCard = ({ product }) => {
  const { deleteProduct, getProducts, setProducts, setLoading } =
    useContext(AppContext);
  const deleteP = (id) => {
    deleteProduct(id)
      .then((res) => {
        console.log(res);
        getProducts()
          .then((resp) => {
            setProducts(resp.data);
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  };
  const destroyProduct = (id) => {
    setLoading(true);

    deleteProduct(id)
      .then((res) => {
        setProducts((currentProduct) =>
          currentProduct.filter((p) => p.id != id)
        );
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="card my-2">
        <img className="card-img-top " src={product.image} alt="Title" />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <p className="card-text">{product.body}</p>
          <div className="div my-2  text-center">
            <button
              type="button"
              class="btn btn-danger rounded-pill "
              onClick={() => {
                destroyProduct(product.id);
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
