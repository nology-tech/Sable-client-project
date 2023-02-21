import React from "react";
import "./DataCard.scss";

const DataCard = (props) => {
  const {
    name,
    email,
    mobileNumber,
    isConsumer,
    isEmployed,
    courseName,
    resourceName,
    quantity,
    cost,
    isAutoPurchase,
    autoPurchaseLevel,
  } = props;

  return name ? (
    <div className="user-card">
      <h1 className="user-card__name">{name}</h1>
      <p className="user-card__email">{email}</p>
      <p className="user-card__mobile-number">{mobileNumber}</p>
      {isConsumer ? (
        <p className="user-card__job">Consumer</p>
      ) : (
        <p className="user-card__job">Consultant</p>
      )}
      {isEmployed ? (
        <p className="user-card__employed">YES</p>
      ) : (
        <p className="user-card__employed">NO</p>
      )}
      <p className="user-card__course-name">{courseName}</p>
      <a className="user-card__link" href="#">{`>`}</a>
    </div>
  ) : (
    <div className="resource-card">
      <h1 className="resource-card__name">{resourceName}</h1>
      <p className="resource-card__quantity">{quantity}</p>
      <p className="resource-card__cost">{cost}</p>
      {isAutoPurchase ? (
        <p className="resource-card__auto-purchase">YES</p>
      ) : (
        <p className="resource-card__auto-purchase">NO</p>
      )}
      <p className="resource-card__level">{autoPurchaseLevel}</p>
      <a className="resource-card__link" href="#">{`>`}</a>
    </div>
  );
};

export default DataCard;
