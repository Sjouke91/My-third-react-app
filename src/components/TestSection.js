import React from "react";
import Line from "../components/Line";

export default function TestSection(props) {
  return (
    <div className="content">
      <div className="section-line">
        <div className="line "></div>
      </div>

      <div className="section section-courses-usp">
        <div className="component-section-header">
          <div className="title-badge">
            <div className="title-badge-title">{props.name}</div>
          </div>

          <h2>
            <div className="component-title ">{props.title}</div>
          </h2>

          <div className="description">{props.description}</div>
        </div>

        <div className="component-usp-row">
          {props.img.map((object) => {
            const { url, title, description } = object;
            return (
              <div className="item team">
                <img className="image" src={url} alt={url} />
                <div className="component-title title">
                  {title ? title : ""}
                </div>
                <div className="component-title title">{description}</div>
              </div>
            );
          })}
        </div>
      </div>
      <Line />
    </div>
  );
}
