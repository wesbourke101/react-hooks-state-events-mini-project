import React from "react";
import { v4 as uuid } from "uuid";

function CategoryFilter({categories}) {
  let isSelected = false;
function changeClassName() {
  return (
    isSelected != isSelected,
    console.log(categories.className)
    )

}

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={uuid()} className={isSelected ? "selected" : ""} onClick={changeClassName} >{category}</button>))}
    </div>
  );
}

export default CategoryFilter;
