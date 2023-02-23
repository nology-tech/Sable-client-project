import React from "react";
import "./ContactDetailsCard.scss";

const ContactDetailsCard = () => {
    // const cardObject = props
  return (
    <div className="contact-card">
      <h1 className="contact-card__heading">Contact Details</h1>

      <div className="contact-card__birth-date">
        <h2 className="contact-card__subheading"> Date of Birth:</h2>
        <p className="contact-card__data">11.11.2000</p>
      </div>
      <div className="contact-card_email">
        <h2 className="contact-card__subheading">Email Address:</h2>
        <p className="contact-card__data">mikolaj@gmail.com</p>
      </div>
      <div className="contact-card__number">
        <h2 className="contact-card__subheading">Mobile Number:</h2>
        <p className="contact-card__data">07424002004</p>
      </div>
    </div>
  );
};
export default ContactDetailsCard;
