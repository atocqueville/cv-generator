import React from "react";

import LeftColumn from "./left-column";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <LeftColumn />
      <div className="right">Partie de droite</div>
    </div>
  );
}

export default App;
