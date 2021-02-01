import React from "react";

function SectionTitle({ icon, text }) {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <img src={icon} style={{ width: 50 }} alt="section-title" />
      <div style={{ fontSize: 18, margin: "0 20px" }}>{text}</div>
      <div
        style={{
          width: "100%",
          height: 2,
          margin: "10px 0 10px 10px",
          backgroundColor: "black",
        }}
      />
    </div>
  );
}

export default SectionTitle;
