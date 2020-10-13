import React from "react";

export default function Titles({ img, title }) {
  return (
    <div className="item team">
      <img className="image" src={img} alt="icon of team" />
      <div className="component-title title">{title}</div>
    </div>
  );
}
