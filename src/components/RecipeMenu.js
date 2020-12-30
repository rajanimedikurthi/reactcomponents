import React from "react";
import Instructions from "./Instructions";
import Ingredients from "./Ingredients";
import StarRating from "./StarRating";
import Rating from "./Rating";
import RatingAsClass from "./RatingAsClass";
// A function component for an individual Recipe
function Recipe({ name, ingredients, steps }) {
  return (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
      <h1>{name}</h1>
      <Ingredients ingredients={ingredients} />
      <Instructions steps={steps} title="Cooking instructions" />
      <StarRating style={{ backgroundColor: "lightblue" }} />
      <Rating style={{ backgroundColor: "lightblue" }} />
      <p>RatingAsClass</p>
      <RatingAsClass totalStars="5" />
    </section>
  );
}

// A function component for the Menu of Recipes
function RecipeMenu({ title, recipes }) {
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>

      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe {...recipe} key={i} />
        ))}
      </div>
    </article>
  );
}

export default RecipeMenu;
