import React from "react";
import graduationIcon from "../assets/graduation-cap.png";
import ExperienceItem from "./experienceItem";
import SectionTitle from "./sectionTitle";

function Formation() {
  const formations = [
    {
      period: "2004 - 2012",
      location: "Passy Saint-Nicolas Buzenval",
      degree: "Baccalauréat ES",
      divers: [],
    },
    {
      period: "2012 - 2018",
      location: "EFREI Paris",
      degree: "Diplôme d'Ingénieur",
      divers: ["Génie Logiciel"],
    },
  ];

  return (
    <div>
      <SectionTitle icon={graduationIcon} text="Formation" />
      <ExperienceItem experiences={formations} />
    </div>
  );
}

export default Formation;
