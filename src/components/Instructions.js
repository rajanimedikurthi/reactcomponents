import React from "react";
export default function Instructions({ title, steps }) {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((step, id) => (
        <p key={id}>{step}</p>
      ))}
    </section>
  );
}
