import React from "react";

function ExperienceItem({ experiences, withIndent = false }) {
  return (
    <div style={{ margin: "20px 0 20px 21px" }}>
      {experiences.map((formation) => (
        <div
          key={formation.period}
          style={{
            display: "grid",
            gridTemplateColumns: "20px auto",
            marginBottom: 10,
          }}
        >
          <div
            style={{
              height: 8,
              width: 8,
              backgroundColor: "black",
              alignSelf: "center",
            }}
          />
          <span style={{ color: "#444", fontWeight: 100, fontSize: 15 }}>
            {formation.period}
          </span>
          <div
            style={{
              display: "flex",
              width: 8,
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
            <span
              style={{
                color: "#888",
                fontSize: 14,
                display: "flex",
                flexDirection: "column",
              }}
            >
              {formation.divers.map((item) => (
                <div
                  style={{ marginLeft: "10px", textIndent: "-10px" }}
                  key={item}
                >
                  {withIndent ? "-" : ""} {item}
                </div>
              ))}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ExperienceItem;
