import React from "react";
import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button
            handleClick={handleClick}
            value=""
            title="All Products"
          ></Button>
          <Button handleClick={handleClick} value="Nike" title="Nike"></Button>
          <Button
            handleClick={handleClick}
            value="Adidas"
            title="Adidas"
          ></Button>
          <Button handleClick={handleClick} value="Puma" title="Puma"></Button>
          <Button handleClick={handleClick} value="Vans" title="Vans"></Button>
        </div>
      </div>
    </>
  );
};

export default Recommended;
