import React from "react";
import "./HomepageCard.scss";
import Button from "../Button/Button";

const HomepageCard = ({ heading }) => {
  return (
    <div className="homepage-card">
      <h2 className="homepage-card__heading">{heading}</h2>
      <Button buttonText={"Go"} />
    </div>
  );
};

export default HomepageCard;
