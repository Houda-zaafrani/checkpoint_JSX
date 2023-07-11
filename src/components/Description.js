// import of object from file product.js
import  { description } from "../Data/product.js";
import React from "react";
// our component Description 
const Description = () => {
  return (
    <div className="Description">
      {/* get the value of key description of object product */}
{description}
    </div>
  );
};
export default Description;
