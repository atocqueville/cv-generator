import React from "react";

import LeftColumn from "./left-column";
import RightColumn from "./right-column";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <LeftColumn />
      <RightColumn />
    </div>
  );
}

export default App;
