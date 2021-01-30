import React from "react";
import photo from "../assets/photo.png";

function Header() {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={photo} style={{ width: 200 }} alt="alexandre" />
      </div>
      <div
        style={{
          margin: "20px 0 10px 0",
          fontSize: 18,
          fontWeight: 500,
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div>ALEXANDRE</div>
        <div>GROUARD DE TOCQUEVILLE</div>
      </div>
      <div
        style={{
          width: "100%",
          margin: "10px 0 10px 10px",
          border: "2px solid white",
          borderRadius: "50px 0 0 50px",
        }}
      ></div>
      <div
        style={{
          margin: "20px 0 10px 0",
          fontSize: 18,
          fontWeight: 400,
          color: "white",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        INGÉNIEUR LOGICIEL
      </div>
    </div>
  );
}

export default Header;
