import React from "react";
import filterIcon from "../../assets/images/functional-icons/filter-icon.png";
import gridIcon from "../../assets/images/functional-icons/gridview-icon.png";
import listIcon from "../../assets/images/functional-icons/listview-icon.png";
import sortIcon from "../../assets/images/functional-icons/sort-icon.png";
import DataCard from "../../components/DataCard/DataCard";
import { usersData } from "../../mockData";
import "./ClientOverview.scss";
const Client = () => {
  //Will replace with real data passed through props later

  return (
    <div className="client-overview">
      <div className="client-overview__filters">
        <h2 className="client-overview__filters--label">Client List</h2>
        <div className="client-overview__filters--display">
          <img src={listIcon} alt="listIcon" />
          <img src={gridIcon} alt="grid icon" />
        </div>
        <input className="client-overview__filters--search"></input>
        <div className="client-overview__filters--sort">
          <img src={sortIcon} alt="sort icon" />
          <p className="client-overview__filters--sort-label">Sort</p>
        </div>
        <div className="client-overview__filters--filter">
          <img src={filterIcon} alt="filter icon" />
          <p className="client-overview__filters--filter-label">Filter</p>
        </div>
      </div>

      <div className="client-overview__label-container">
        <p className="client-overview__label">Client Name</p>
        <p className="client-overview__label">Email Address</p>
        <p className="client-overview__label">Mobile Number</p>
        <p className="client-overview__label">Consumer/Consultancy</p>
        <p className="client-overview__label">RSVPd</p>
        <p className="client-overview__label">Staff Name</p>
      </div>
      <div className="client-overview__cards-container">
        <DataCard cardType="student" cardObject={usersData[0]} />
        <DataCard cardType="student" cardObject={usersData[1]} />
        <DataCard cardType="student" cardObject={usersData[2]} />
        <DataCard cardType="student" cardObject={usersData[3]} />
      </div>
    </div>
  );
};

export default Client;
