import React from "react";

import CardList from "./CardList";

const Products = ({ products }) => {

 

  return (
    <div className="products">
      <div className="products-nav">
        <h3>Products</h3>
      </div>

      <CardList products={products} />
    </div>
  );
};

export default Products;