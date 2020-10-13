import React from "react";

export default function ThirdSection() {
  return (
    <div className="section section-why-usp">
      <div className="component-section-header">
        <div className="title-badge">
          <div className="title-badge-title">Why?</div>
        </div>

        <h2>
          <div className="component-title ">Why do we do this</div>
        </h2>

        <div className="description">
          It’s really simple actually. We just love to combine our passion for
          code with our love for teaching. Coding is so much fun when doing it
          together.
        </div>
      </div>

      <div className="component-usp-row">
        <div className="item team">
          <img
            className="image"
            src="https://learntocodetogether.nl/assets/technology.svg"
            alt="icon of technology"
          />
          <div className="component-title title">Technology</div>
          <div className="description">
            We love to experiment and create awesome stuff from the comfort of
            our couch.
          </div>
        </div>
        <div className="item team">
          <img
            className="image"
            src="https://learntocodetogether.nl/assets/community.svg"
            alt="icon of comunity"
          />
          <div className="component-title title">People</div>
          <div className="description">
            It’s always fun to do things together, the excitement and the
            collaborations.
          </div>
        </div>
        <div className="item team">
          <img
            className="image"
            src="https://learntocodetogether.nl/assets/personal-speed.svg"
            alt="icon of persspeed"
          />
          <div className="component-title title">Teaching</div>
          <div className="description">
            We like to learn and to teach others the stuff we know.
          </div>
        </div>
      </div>
    </div>
  );
}
