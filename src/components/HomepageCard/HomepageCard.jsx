import React from "react";
import "./HomepageCard.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
const HomepageCard = ({ heading, link }) => {
  return (
    <main className="homepage-card">
      <h2 className="homepage-card__heading">{heading}</h2>
      <div className="homepage-card__button">
        <Link to={`/${link}`} ><Button buttonText={"Go"}/> </Link>
      </div>
      <Link to={`/${link}`}><div className="homepage-card__arrow">  </div></Link>
     
    </main>
  );
};

export default HomepageCard;
