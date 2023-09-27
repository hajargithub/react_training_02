import React, { useContext, useState } from "react";
import AppContext from "../AppContext";

const ProductForm = () => {
  const { postProduct, setProducts, setLoading } = useContext(AppContext);

  const [title, seTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const submit = (e) => {
    const newproduct = { title, body, image };
    // setProducts(...products, newproduct);
    console.log("newproduct", newproduct);
    e.preventDefault();
    setLoading(true);

    postProduct(newproduct)
      .then((res) => {
        setProducts((prev) => [...prev, res.data]);
        setLoading(false);
        seTitle("");
        setImage("");
        setBody("");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <form onSubmit={submit}>
        <div className="form-group my-2">
          <label htmlFor="title">Title</label>
          <input
            value={title}
            onChange={(e) => seTitle(e.target.value)}
            type="text"
            name="title"
            id="title"
            className="form-control"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="body">Body</label>
          <input
            value={body}
            onChange={(e) => setBody(e.target.value)}
            type="text"
            name="body"
            id="body"
            className="form-control"
          />
        </div>
        <div className="form-group my-2">
          <label htmlFor="body">Image</label>
          <input
            value={image}
            onChange={(e) => setImage(e.target.value)}
            type="url"
            name="image"
            id="image"
            className="form-control"
          />
        </div>
        <div className="d-grid m-2 ">
          <button className="btn btn-primary">Save</button>
        </div>
      </form>
    </>
  );
};

export default ProductForm;
