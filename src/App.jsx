import "./App.css";

import { ProductProvider } from "./AppContext";
import Project from "./components/Project";
import NavBar from "./shared/NavBar";
function App() {
  return (
    <>
      <NavBar />
      <ProductProvider>
        <div className="container">
          <Project />
        </div>
      </ProductProvider>
    </>
  );
}

export default App;
