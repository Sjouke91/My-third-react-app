import React from "react";

export default function SecondSection() {
  return (
    <div className="content">
      <div className="section-line">
        <div className="line "></div>
      </div>

      <div className="section section-courses-usp">
        <div className="component-section-header">
          <div className="title-badge">
            <div className="title-badge-title">Courses</div>
          </div>

          <h2>
            <div className="component-title ">Our Courses</div>
          </h2>

          <div className="description">
            We have created courses to help you learn, with easy to follow steps
            and some sparks of fun!
          </div>
        </div>

        <div className="component-usp-row">
          <div className="item team">
            <img
              className="image"
              src="https://learntocodetogether.nl/assets/expand-horizon.svg"
              alt="icon of horizon"
            />
            <div className="component-title title">
              Learn new skills and expand your horizon
            </div>
          </div>
          <div className="item team">
            <img
              className="image"
              src="https://learntocodetogether.nl/assets/developers.svg"
              alt="icon of developer"
            />
            <div className="component-title title">
              Follow courses created by experienced developers
            </div>
          </div>
          <div className="item team">
            <img
              className="image"
              style={{ width: "200px" }}
              src="https://learntocodetogether.nl/assets/step-by-step.svg"
              alt="icon of stepbystep"
            />
            <div className="component-title title">
              Fun, hands on and easy to follow
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
