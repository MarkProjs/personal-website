import React from "react";
import "./styles/ContactCard.css";

function ContactCard({ item }) {
  return (
    <div className="contactCard">
      {item.icon}
      <h3>{item.title}</h3>
      {item.link.startsWith('https://')? (
        <a href={item.link} target="_blank" rel="noreferrer">
          Check it out!
        </a>
      ) : (
        <p>{item.link}</p>
      )}
    </div>
  );
}

export default ContactCard;
