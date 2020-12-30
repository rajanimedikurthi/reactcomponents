import React from "react";
export default function Ingredients({ ingredients }) {
  return (
    <ul className="ingredients">
      {ingredients.map((ingredient, i) => (
        <li key={i}>{ingredient.name}</li>
      ))}
    </ul>
  );
}
