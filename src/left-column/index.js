import React from "react";
import Contact from "./contact";
import Header from "./header";
import Profile from "./profile";

function LeftColumn() {
  return (
    <div style={{ flexBasis: "35%", margin: "30px 0", color: "white" }}>
      <Header />
      <div style={{ margin: "0 20px" }}>
        <Profile />
        <Contact />
      </div>
    </div>
  );
}

export default LeftColumn;
