import React from "react";
import Item from "./Item";
import { useState } from "react";

function ShoppingList({ items }) {
  const [ addToCategory, setAddToCategory ] = useState("All");
  function toggleAddToCategory (e) {
    setAddToCategory(e.target.value);
    //e.target.innerText
  }

  const itemsToDisplay = items.filter(item => {
    if (addToCategory === "All") { return true; }
    return item.category === addToCategory;
  }
  );
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={toggleAddToCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
