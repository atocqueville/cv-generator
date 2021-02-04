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
      divers: [
        "TMA sur l’ensemble des fonctionnalités, utilisation de NGRX pour la persistance des data",
        "Interface de plusieurs plateformes B2B pour des éleveurs canins ou des vétérinaires",
        "8 développeurs en méthode Agile Scrum/Kanban",
      ],
    },
    {
      period: "Septembre 2019 – Mars 2020 (7 mois)",
      location: "Unholster, Santiago Chili",
      degree: "Développement React/Python",
      divers: [
        "Application web avec ReactJS et Redux",
        "Cartographie avec Leaflet et data en GEOJSON par GIS",
        "Equipe de 3 développeurs",
      ],
    },
    {
      period: "Avril 2018 – Juin 2019 (1 an et 3 mois)",
      location: "Safran Electronics & Defense",
      degree: "Développement React",
      divers: [
        "Réalisation de l'interface d'une centrale intertielle",
        "5 développeurs en méthode Agile Extreme programming",
      ],
    },
  ];
  return (
    <div>
      <SectionTitle icon={portfolioIcon} text="Expériences" />
      <ExperienceItem experiences={experiences} withIndent />
    </div>
  );
}

export default Employment;
