import React from "react";
import "./BookingDetailsCard.scss";

const BookingDetailsCard = () => {
    // const cardObject = props
  return (
    <div className="booking-card">
      <h1 className="booking-card__heading">Booking Details</h1>

      <div className="booking-card__date">
        <h2 className="booking-card__subheading"> Date:</h2>
        <p className="booking-card__data">11.11.2000</p>
      </div>
      <div className="booking-card_time">
        <h2 className="booking-card__subheading">Time:</h2>
        <p className="booking-card__data">10;20</p>
      </div>
      <div className="booking-card__staff">
        <h2 className="booking-card__subheading">Staff Member:</h2>
        <p className="booking-card__data">staff 01</p>
      </div>
    </div>
  );
};
export default BookingDetailsCard;

