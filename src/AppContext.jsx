import { createContext, useState } from "react";
import {
  getProducts,
  postProduct,
  deleteProduct,
} from "./services/ProductServices";
const AppContext = createContext(null);
export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const values = {
    deleteProduct,
    postProduct,
    getProducts,
    products,
    setProducts,
    loading,
    setLoading,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
