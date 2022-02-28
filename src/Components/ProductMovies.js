import React, { useState } from "react";
import { data } from "../data";
import ProductCard from "./ProductCard";
import "../App.css";
function ProductList() {
  const [products, setProducts] = useState(data);
  return (
    <div className="productList">
      {products.map((el) => (
        <ProductCard el={el} />
      ))}
    </div>
  );
}

export default ProductList;
