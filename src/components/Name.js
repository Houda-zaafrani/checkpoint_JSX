// import of object from file product.js
import { name } from "../Data/product.js";
import React from "react";
// our component Name 
const Name = () => {
  return (
    <div className="Name">
      {/* get the value of key name of object product */}
      {name}
    </div>
  );
};
export default Name;
