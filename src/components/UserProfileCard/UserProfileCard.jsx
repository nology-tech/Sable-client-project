import React from "react";
import "./UserProfileCard.scss";
import staffPicture from "../../assets/images/users/staff-picture.png";

const UserProfileCard = () => {
  return (
    <div className="card-staff">
      <img
        src={staffPicture}
        alt="staff-picture"
        className="card-staff__image"
      ></img>
      <h1 className="card-staff__name">Staff 01</h1>
      <h2 className="card-staff__role">Full-Time Employee</h2>
    </div>
  );
};

export default UserProfileCard;
