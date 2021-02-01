import React from "react";
import ExperienceItem from "./experienceItem";
import SectionTitle from "./sectionTitle";
import portfolioIcon from "../assets/portfolio.png";

function Employment() {
  const experiences = [
    {
      period: "Depuis Mai 2020",
      location: "Ekino/ Royal Canin",
      degree: "Développement Angular",
      divers: ["Équipe de 8 développeurs, méthodologie Agile Scrum/Kanban"],
    },
    {
      period: "Septembre 2019 – Mars 2020 (7 mois)",
      location: "Unholster, Santiago Chili",
      degree: "Développement React/Python",
      divers: ["Equipe de 3 développeurs"],
    },
    {
      period: "Avril 2018 – Juin 2019 (1 an et 3 mois)",
      location: "Safran Electronics & Defense",
      degree: "Développement React",
      divers: ["Equipe de 5 développeurs en méthode Agile"],
    },
    {
      period: "Avril – Aout 2017 (5 mois) Sopra Steria",
      location: "Sopra Steria / Natixis",
      degree: "Développement Angular",
      divers: ["Développement frontend (Angular 4) et backend (Java)"],
    },
  ];
  return (
    <div>
      <SectionTitle icon={portfolioIcon} text="Expériences" />
      <ExperienceItem experiences={experiences} />
    </div>
  );
}

export default Employment;
