import React from "react";
import Button from "../Button/Button";
import "./ClientHeadCard.scss";
import ClientImage from "../../assets/images/users/client-picture.png";

const ClientHeadCard = ({ name, text, role }) => {
  return (
    <div className="card-client">
      <div className="card-client__image-container">
        <img
          src={ClientImage}
          alt="client-picture"
          className="card-client__image-container--image"
        ></img>
      </div>
      <div className="card-client__info-container">
        <h1 className="card-client__info-container--name">Client 01{name}</h1>
        <h2 className="card-client__info-container--role">{role}</h2>
        <div className="card-client__info-container--button">
          <Button buttonText={text} />
        </div>
      </div>
    </div>
  );
};

export default ClientHeadCard;
