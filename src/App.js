import React, { useState } from "react";
import RecipeMenu from "./components/RecipeMenu";
import ColorList from "./components/Color";
import colordata from "./data/colors.json";
function App({ recipes }) {
  const [colors, setColors] = useState(colordata);
  return (
    <>
      <ColorList
        colors={colors}
        onRateColor={(id, rating) => {
          const newColors = colors.map((color) =>
            color.id == id ? { ...color, rating } : color
          );
          setColors(newColors);
        }}
        onRemove={(id) => {
          const newColors = colors.filter((color) => color.id !== id);
          setColors(newColors);
        }}
      />
      <RecipeMenu recipes={recipes} title="Delicious Recipes" />
    </>
  );
}
export default App;
