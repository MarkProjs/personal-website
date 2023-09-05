import React from "react";
import "../assets/ContactCard.css";

function ContactCard({ item }) {
  return (
    <div className="contactCard">
      {item.icon}
      <h3>{item.title}</h3>
      <p>{item.desc}</p>
    </div>
  );
}

export default ContactCard;
