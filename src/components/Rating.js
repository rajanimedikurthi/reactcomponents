import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect }) => {
  return <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />;
};

function Rating({ totalStars = 5, rating = 0, style = {}, onRate = (f) => f }) {
  const ratings = [...Array(totalStars)];
  return (
    <div style={{ padding: "5px", ...style }}>
      {ratings.map((rate, i) => {
        return (
          <Star key={i} selected={rating > i} onSelect={() => onRate(i + 1)} />
        );
      })}
    </div>
  );
}

export default Rating;
