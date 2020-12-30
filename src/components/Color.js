import React from "react";
import Rating from "./Rating";
import { FaTrash } from "react-icons/fa";

export default function ColorList({
  colors = [],
  onRemove = (f) => f,
  onRateColor = (f) => f,
}) {
  if (!colors.length) return <div>No Colors Listed.</div>;
  return colors.map((color, i) => (
    <Color key={color.id} {...color} onRemove={onRemove} onRate={onRateColor} />
  ));
}

function Color({
  id,
  title,
  code,
  rating,
  onRemove = (f) => f,
  onRate = (f) => f,
}) {
  return (
    <p>
      <p style={{ backgroundColor: code }}>
        {title},{code}
      </p>
      <Rating
        rating={rating}
        onRate={(rating) => {
          onRate(id, rating);
        }}
      />
      <FaTrash
        onClick={() => {
          onRemove(id);
        }}
      />
    </p>
  );
}
