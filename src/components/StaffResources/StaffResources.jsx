import React from "react";
import "./StaffResources.scss";
import DataCard from "../DataCard/DataCard";
//import resourceData from "../../mockData.js"

const StaffResources = ({ staffName, cardsArray }) => {
  const cardJSX = cardsArray.map((object, index) => {
    return (
      <div key={index} className="staff-resources__cards-card">
        <DataCard cardType="resource" cardObject={object} />
      </div>
    );
  });

  return (
    <div className="staff-resources">
      <h1 className="staff-resources__staff-member">{staffName}</h1>
      <div className="staff-resources__cards">{cardJSX && cardJSX}</div>
    </div>
  );
};

export default StaffResources;
