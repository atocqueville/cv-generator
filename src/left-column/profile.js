import React from "react";
import profileIcon from "../assets/profile.png";

function Profile() {
  return (
    <div style={{ margin: "50px 0" }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginLeft: 15,
          marginBottom: 30,
        }}
      >
        <img src={profileIcon} style={{ width: 40 }} alt="profile" />
        <div
          style={{
            marginLeft: 15,
            fontSize: 18,
            fontWeight: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Profil
        </div>
      </div>
      <div style={{ fontWeight: 100, fontSize: 16 }}>
        Lorem ipsum sit amet, consectetur adipiscing elit. Integer a felis
        aliquet, bibendum enim eget, tempus ex. Cras sollicitudin, velit eu
        sollicitudin elementum, leo sapien imperdiet massa, vel commodo metus
        lectus quis turpis. Sed convallis in turpis ac cursus. Aliquam
        vestibulum urna accumsan velit efficitur
      </div>
    </div>
  );
}

export default Profile;
