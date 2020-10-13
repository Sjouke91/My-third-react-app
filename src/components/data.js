export default sections;

const sections = [
  {
    section: 1,
    name: "Do you want to",
    title: "Learn how to code",
    description:
      "Awesome! Let’s do this together. We are here to support you in your coding journey.",
    img: [
      {
        url: "https://learntocodetogether.nl/assets/team.svg",
        title: "",
        description: "Get help from experienced developers",
      },
      {
        url: "https://learntocodetogether.nl/assets/community.svg",
        title: "",
        description: "share with our community",
      },
      {
        url: "https://learntocodetogether.nl/assets/personal-speed.svg",
        title: "",
        description: "Personal & nog iets",
      },
    ],
  },
  {
    section: 2,
    name: "Courses",
    title: "Our Courses",
    description:
      "We have created courses to help you learn, with easy to follow steps and some sparks of fun!",
    img: [
      {
        url: "https://learntocodetogether.nl/assets/expand-horizon.svg",
        title: "",
        description: "Learn new skills and expand your horizon",
      },
      {
        url: "https://learntocodetogether.nl/assets/developers.svg",
        title: "",
        description: "Follow courses created by experienced developers",
      },
      {
        url: "https://learntocodetogether.nl/assets/step-by-step.svg",
        title: "",
        description: "Fun, hands on and easy to follow",
      },
    ],
  },

  {
    section: 3,
    name: "Why?",
    title: "Why do we do this",
    description:
      "It’s really simple actually. We just love to combine our passion for code with our love for teaching. Coding is so much fun when doing it together.",
    img: [
      {
        url: "https://learntocodetogether.nl/assets/expand-horizon.svg",
        title: "Technology",
        description:
          "We love to experiment and create awesome stuff from the comfort of our couch.",
      },
      {
        url: "https://learntocodetogether.nl/assets/developers.svg",
        title: "Teaching",
        description:
          "It’s always fun to do things together, the excitement and the collaborations.",
      },
      {
        url: "https://learntocodetogether.nl/assets/step-by-step.svg",
        title: "Technology",
        description: "We like to learn and to teach others the stuff we know.",
      },
    ],
  },
];

sections.map((section) => {
  return (
    <TestSection
      name={section.name}
      title={section.title}
      description={section.description}
      img={sections.img}
    />
  );
});

{
  /* <TestSection
name={"Courses"}
title="Our Courses"
description="We have created courses to help you learn, with easy to follow steps and some sparks of fun!"
img={[
  {
    url: "https://learntocodetogether.nl/assets/expand-horizon.svg",
    description: "Learn new skills and expand your horizon",
  },
  {
    url: "https://learntocodetogether.nl/assets/developers.svg",
    description: "Follow courses created by experienced developers",
  },
  {
    url: "https://learntocodetogether.nl/assets/step-by-step.svg",
    description: "Fun, hands on and easy to follow",
  },
]} */
}

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
            const { url, description } = object;
            return (
              <div className="item team">
                <img className="image" src={url} alt={url} />
                <div className="component-title title">{description}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
