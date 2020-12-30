import React, { useState } from "react";
import { FaStar, FaTable } from "react-icons/fa";

const Star = ({ selected = false, onSelect = (f) => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

const createArray = (length) => [...Array(length)];

const createStars_New = (totalStars, selectedStars, setSelectedStars) => {
  return createArray(totalStars).map((n, i) => (
    <Star
      key={i}
      selected={selectedStars > i}
      onSelect={() => setSelectedStars(i + 1)}
    />
  ));
};

export default function StarRating({ totalRatings: totalStars = 5 }) {
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <>
      {createStars_New(totalStars, selectedStars, setSelectedStars)}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}
