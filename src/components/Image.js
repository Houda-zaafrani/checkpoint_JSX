// import of object from file product.js
import { image } from "../Data/product.js";
import React from "react";
// our component Image 
const Image = () => {
  return (
    <div className="Image">
      {/* get the value of key image of object product */}
      <img src={image} alt="" />
    </div>
  );
};
export default Image;
