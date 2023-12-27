import { useState } from "react";
import "./App.css";
import "../src/index.css";

import Products from "./Products/Products";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";
import Navigation from "./Navigation/Navigation";

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  console.log("category", selectedCategory);

  // Input filter start
  const [query, setQuery] = useState("");
  console.log("query", query);
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1
  );
  console.log("filteredItems", filteredItems);
  // Input filter end

  // radio filter start
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };
  // radio filter end

  // Button filter  start
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };
  // Button filter  end

  function filteredData(products, selected, query) {
    let filteredProducts = products;
    console.log("products", filteredProducts);

    // filtering input items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Selected Filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          newPrice={newPrice}
          prevPrice={prevPrice}
        />
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange}></Sidebar>
      <Navigation
        query={query}
        handleInputChange={handleInputChange}
      ></Navigation>
      <Recommended handleClick={handleClick}></Recommended>
      <Products result={result}></Products>
    </>
  );
}

export default App;
