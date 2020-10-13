import React from "react";
// import Titles from "./components/Titles";

// const object = [
//   {
//     img: "https://learntocodetogether.nl/assets/team.svg",
//     text: "Get help from experienced developers",
//   },
//   {
//     img: "https://learntocodetogether.nl/assets/community.svg",
//     text: "share with our community",
//   },
//   {
//     img: "https://learntocodetogether.nl/assets/personal-speed.svg",
//     text: "at your own speed",
//   },
// ];

// function Titles({ img, text }) {
//   return (
//     <div className="item team">
//       <img className="image" src={img} alt="icon of team" />
//       <div className="component-title title">{title}</div>
//     </div>
//   );
// }

export default function FirstSection() {
  return (
    <div className="section section-what-usp">
      <div className="component-section-header">
        <div className="title-badge">
          <div className="title-badge-title">Do you want to</div>
        </div>

        <h2>
          <div className="component-title ">Learn how to code</div>
        </h2>

        <div className="description">
          Awesome! Let’s do this together. We are here to support you in your
          coding journey.
        </div>
      </div>

      <div className="component-usp-row">
        <div className="item team">
          <img
            className="image"
            src="https://learntocodetogether.nl/assets/team.svg"
            alt="icon of team"
          />
          <div className="component-title title">
            Get help from experienced developers
          </div>
        </div>
        <div className="item team">
          <img
            className="image"
            src="https://learntocodetogether.nl/assets/community.svg"
            alt="icon of community"
          />
          <div className="component-title title">
            Learn &amp; share with our community
          </div>
        </div>
        <div className="item team">
          <img
            className="image"
            src="https://learntocodetogether.nl/assets/personal-speed.svg"
            alt="icon of speed"
          />
          <div className="component-title title">Personal & nog iets</div>
        </div>
      </div>
    </div>
  );
}
