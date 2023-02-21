import React, { useEffect, useState } from "react";
import "./DataCard.scss";

const DataCard = (props) => {
  const { cardObject, cardType } = props;

  const [cardJSX, setCardJSX] = useState();

  //Booking, Student, Resource
  useEffect(() => {
    if (cardType === "student") {
      setCardJSX(
        <div className="user-card">
          <h1 className="user-card__name">{cardObject.name}</h1>
          <p className="user-card__email">{cardObject.email}</p>
          <p className="user-card__mobile-number">{cardObject.mobileNumber}</p>
          {cardObject.isConsumer ? (
            <p className="user-card__job">Consumer</p>
          ) : (
            <p className="user-card__job">Consultant</p>
          )}
          {cardObject.isEmployed ? (
            <p className="user-card__employed">YES</p>
          ) : (
            <p className="user-card__employed">NO</p>
          )}
          <p className="user-card__course-name">{cardObject.courseName}</p>
          <figure className="user-card__image-container"></figure>
        </div>
      );
    } else if (cardType === "booking") {
      setCardJSX(
        <div className="booking-card">
          <h1 className="booking-card__name">{cardObject.name}</h1>
          <p className="booking-card__email">{cardObject.email}</p>
          <p className="booking-card__mobile-number">{cardObject.mobileNumber}</p>
          <p className="booking-card__date">{cardObject.bookingDate}</p>
          <p className="booking-card__time">{cardObject.bookingTime}</p>
          <figure className="booking-card__image-container"></figure>
        </div>
      );
    } else if (cardType === "resource") {
      setCardJSX(
        <div className="resource-card">
          <h1 className="resource-card__name">{cardObject.resourceName}</h1>
          <p className="resource-card__quantity">{cardObject.quantity}</p>
          <p className="resource-card__cost">{cardObject.cost}</p>
          {cardObject.isAutoPurchase ? (
            <p className="resource-card__auto-purchase">YES</p>
          ) : (
            <p className="resource-card__auto-purchase">NO</p>
          )}
          <p className="resource-card__level">{cardObject.autoPurchaseLevel}</p>
          <figure className="resource-card__image-container"></figure>
        </div>
      );
    } else {
      alert("Unknown card");
    }
  }, []);

  return <>{cardJSX && cardJSX}</>;
};

export default DataCard;
