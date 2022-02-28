import { Route, Routes } from "react-router-dom";
import "./App.css";

import Details from "./Components/Details";
import Home from "./Components/Home";
import Navigation from "./Components/Navigation";
import ProductMovies from "./Components/ProductMovies";
import { data } from "./data";
import { useState } from "react";

function App() {
  const [products] = useState(data);
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/home" element={<Home />} />
      
        <Route path="/products" element={<ProductMovies />} />
        <Route path="/products/:id" element={<Details products={products} />} />
      </Routes>
    </div>
  );
}

export default App;
