import { createContext, useReducer, useState } from "react";
import ProductReducer, { initState } from "./reducers/ProductReducer";
import {
  getProducts,
  postProduct,
  deleteProduct,
} from "./services/ProductServices";
const AppContext = createContext(null);
export const ProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(ProductReducer, initState);
  const [loading, setLoading] = useState(true);

  const values = {
    deleteProduct,
    postProduct,
    getProducts,
    state,
    dispatch,
    loading,
    setLoading,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
