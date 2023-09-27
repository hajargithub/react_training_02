import React, { useContext } from "react";
import AppContext from "../AppContext";
import ProductForm from "./ProductForm";
import Products from "./Products";
import Spinner from "./Spinner";

const Project = () => {
  const { loading } = useContext(AppContext);
  console.log(loading);
  return (
    <>
      {/* {`Londing on project ${loading}`} */}
      {loading && (
        <Spinner>
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </Spinner>
      )}
      <>
        <div className="row my-3">
          <div className="col-6 mx-auto">
            <h1 className=" text-center my-3 text-primary">Create a Course</h1>
            <ProductForm />
          </div>
        </div>
        <div className="row my-3">
          <div className="col-12 my-4 mx-auto">
            <h1 className=" text-center my-3 text-primary">List of Courses</h1>
            <Products />
          </div>
        </div>
      </>
    </>
  );
};

export default Project;
