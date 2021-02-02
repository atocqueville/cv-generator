import React from "react";
import Formation from "./formation";
import Employment from "./employment";
import Skills from "./skills";

function RightColumn() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "30px 70px 30px 60px",
      }}
    >
      <Formation />
      <Skills />
      <Employment />
    </div>
  );
}

export default RightColumn;
