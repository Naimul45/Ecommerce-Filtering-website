import React from "react";
import "./Sidebar.css";
import Category from "./category/Category";
import Price from "./Price/Price";
import Colors from "./colors/Colors";
const Sidebar = ({ handleChange }) => {
  
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>shopping cart</h1>
        </div>

        <Category handleChange={handleChange}></Category>
        <Price handleChange={handleChange}></Price>
        <Colors handleChange={handleChange}></Colors>
      </section>
    </>
  );
};

export default Sidebar;
