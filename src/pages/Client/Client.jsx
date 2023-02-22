import React from "react";
import filterIcon from "../../assets/images/functional-icons/filter-icon.png";
import gridIcon from "../../assets/images/functional-icons/gridview-icon.png";
import listIcon from "../../assets/images/functional-icons/listview-icon.png";
import sortIcon from "../../assets/images/functional-icons/sort-icon.png";
import DataCard from "../../components/DataCard/DataCard";
import NavContainer from "../../containers/NavContainer/NavContainer";
import "./Client.scss";
const Client = () => {
  const studentTestObject = {
    name: "Test",
    email: "hello",
    mobileNumber: 2423789,
    isConsumer: true,
    isEmployed: false,
    courseName: "whatever",
  };

  return (
    <div className="client-page">
      <NavContainer />
      <main className="client-page__content">
        <div className="client-page__header">
          <h1>Client Page</h1>
          <button>Will replace</button>
        </div>
        <div className="client-page__filters">
          <h2 className="client-page__filters--label">Client List</h2>
          <img src={listIcon} alt="listIcon" />
          <img src={gridIcon} alt="grid icon" />
          <input className="client-page__filters--search"></input>
          <img src={sortIcon} alt="sort icon" />
          <p className="client-page__filters--sort">Sort</p>
          <img src={filterIcon} alt="filter icon" />
          <p className="client-page__filters--filter">Filter</p>
        </div>

        <div className="client-page__label-container">
          <p>Client Name</p>
          <p>Email Address</p>
          <p>Mobile Number</p>
          <p>Consumer/Consultancy</p>
          <p>RSVPd</p>
          <p>Staff Name</p>
        </div>
        <div className="client-page__cards-container">
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
          <DataCard cardType="student" cardObject={studentTestObject} />
        </div>
      </main>
    </div>
  );
};

export default Client;
