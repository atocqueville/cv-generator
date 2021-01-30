import React from "react";
import photo from "../assets/profile.png";

function Profile() {
  return (
    <div style={{ margin: "40px 0" }}>
      <div style={{ display: "flex", alignItems: "center", marginLeft: 30 }}>
        <img src={photo} style={{ width: 30 }} alt="profile" />
        <div
          style={{
            marginLeft: 15,
            fontSize: 18,
            fontWeight: 400,
            color: "white",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Profil
        </div>
      </div>
    </div>
  );
}

export default Profile;
