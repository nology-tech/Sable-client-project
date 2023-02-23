import React from "react";
import "./BookingDetailsCard.scss";

const BookingDetailsCard = (props) => {
    const cardObject = props
  return (
    <div className="booking-card">
      <h1 className="booking-card__heading">Booking Details</h1>

      <div className="booking-card__date">
        <h2 className="booking-card__subheading"> Date:</h2>
        <p className="booking-card__data">{cardObject[0].bookingDate}</p>
      </div>
      <div className="booking-card_time">
        <h2 className="booking-card__subheading">Time:</h2>
        <p className="booking-card__data">{cardObject[0].bookingTime}</p>
      </div>
      <div className="booking-card__staff">
        <h2 className="booking-card__subheading">Staff Member:</h2>
        <p className="booking-card__data">{cardObject[0].staffMember}</p>
      </div>
    </div>
  );
};
export default BookingDetailsCard;
