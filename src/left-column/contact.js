import React from "react";
import contactIcon from "../assets/contact.png";
import mailIcon from "../assets/mail.png";
import phoneIcon from "../assets/phone.png";
import githubIcon from "../assets/github.png";
import homeIcon from "../assets/home.png";

function Item({ icon, text }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        marginBottom: 25,
      }}
    >
      <img src={icon} style={{ width: 20 }} alt={`contact-${text}`} />
      <div style={{ marginLeft: 10 }}>{text}</div>
    </div>
  );
}

function Contact() {
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
        <img src={contactIcon} style={{ width: 40 }} alt="profile" />
        <div
          style={{
            marginLeft: 10,
            fontSize: 18,
            fontWeight: 400,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          Contact
        </div>
      </div>
      <div style={{ fontWeight: 100, fontSize: 15 }}>
        <Item icon={mailIcon} text="alex.detocqueville@gmail.com" />
        <Item icon={phoneIcon} text="06.17.67.62.72" />
        <Item icon={homeIcon} text="Paris 2°, France" />
        <Item icon={githubIcon} text="/atocqueville" />
      </div>
    </div>
  );
}

export default Contact;
