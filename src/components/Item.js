import React from "react";
import { useState } from "react";

function Item({ name, category }) {
  const [addToCart, setAddToCart] = useState(false);
  function toggleAddToCart() {
    setAddToCart(!addToCart);
  }
  return (
    <li className={addToCart?"in-cart":""} >
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
      className={addToCart? "remove": "add"} 
      onClick={toggleAddToCart}>
        {addToCart ? "Remove from Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
