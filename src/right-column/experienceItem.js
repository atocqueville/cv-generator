import React from "react";

function ExperienceItem({ experiences }) {
  return (
    <div style={{ margin: "20px 0 20px 21px" }}>
      {experiences.map((formation) => (
        <div
          key={formation.period}
          style={{
            display: "flex",
            flexDirection: "column",
            marginBottom: 10,
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                height: 8,
                width: 8,
                backgroundColor: "black",
                marginRight: 20,
                marginTop: 3,
              }}
            />
            <span style={{ color: "#444", fontWeight: 100, fontSize: 15 }}>
              {formation.period}
            </span>
          </div>
          <div style={{ display: "flex" }}>
            <div
              style={{
                display: "flex",
                width: 8,
                marginRight: 20,
                justifyContent: "center",
              }}
            >
              <div
                style={{
                  width: 2,
                  backgroundColor: "black",
                }}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <span style={{ fontWeight: 500, margin: "3px 0" }}>
                {formation.location}
              </span>
              <span>{formation.degree}</span>
              <span style={{ color: "#888", fontSize: 14 }}>
                {formation.divers.map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceItem;
