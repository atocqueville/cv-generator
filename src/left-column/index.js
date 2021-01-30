import React from "react";
import Header from "./header";
import Profile from "./profile";

function LeftColumn() {
  return (
    <div style={{ flexBasis: "35%", margin: "30px 0" }}>
      <Header />
      <Profile />
    </div>
  );
}

export default LeftColumn;
