// import of object from file product.js
import React from "react";
import { price } from "../Data/product";

// our component Name
const Price = () => {
  return (
    <div className="Prices">
      {/* get the value of key name of object product */}
      {price}
    </div>
  );
};
export default Price;
