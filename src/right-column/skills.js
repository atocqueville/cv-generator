import React from "react";
import skillsIcon from "../assets/elearning.png";
import ExperienceItem from "./experienceItem";
import SectionTitle from "./sectionTitle";

function Skills() {
  const skills = [
    {
      period: "Front-end",
      degree: "React, Angular, Gatsby, NextJS",
      divers: [],
    },
    {
      period: "Bibliothèques JS",
      degree: "Redux, saga, Rxjs, Leaflet, Webpack, Jest, Cypress",
      divers: [],
    },
    {
      period: "Web Hosting",
      degree: "Netlify, Firebase, Heroku",
      divers: [],
    },
    {
      period: "Back-end",
      degree: "Node.js, Java, C# .NET, C++",
      divers: [],
    },
  ];

  return (
    <>
      <SectionTitle icon={skillsIcon} text="Compétences" />
      <ExperienceItem experiences={skills} />
    </>
  );
}

export default Skills;
