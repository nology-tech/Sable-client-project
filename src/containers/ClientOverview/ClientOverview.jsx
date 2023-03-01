import React, { useState } from "react";
import DataCard from "../../components/DataCard/DataCard";
import FilterBar from "../../components/FilterBar/FilterBar";
import mockData from "../../data/mockData";
import "./ClientOverview.scss";
const Client = () => {
  //Will replace with real data passed through props later
  const [query, setQuery] = useState("");
  const [click, setClick] = useState(false);
  const [dataArr, setDataArr] = useState(mockData.clients);

  const handleSort = () => {
    setClick(!click);
    if (click) {
      setDataArr(
        dataArr.sort((x, y) => {
          let a = x.lastName.toUpperCase(),
            b = y.lastName.toUpperCase();
          return a == b ? 0 : a < b ? 1 : -1;
        })
      );
    } else {
      setDataArr(
        dataArr.sort((x, y) => {
          let a = x.lastName.toUpperCase(),
            b = y.lastName.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        })
      );
    }
  };

  const filterArr = dataArr.filter((element) => {
    return (
      element.firstName.toLowerCase().includes(query.toLowerCase()) ||
      element.lastName.toLowerCase().includes(query.toLowerCase())
    );
  });

  const handleInputSearch = (event) => {
    setQuery(event.target.value);
  };
  const clientsListJSX = filterArr.map((client, index) => {
    return <DataCard key={index + 1} cardType="client" cardObject={client} />;
  });

  return (
    <div className="client-overview">
      <FilterBar
        title={"Client List"}
        handleInputSearch={handleInputSearch}
        handleSort={handleSort}
        optionsArr={[
          "Client Name",
          "Email",
          "Consumer",
          "Consultant",
          "Confirmed",
          "Staff Name",
        ]}
      />
      <div className="client-overview__label-container">
        <p className="client-overview__label">Client Name</p>
        <p className="client-overview__label">Email Address</p>
        <p className="client-overview__label">Mobile Number</p>
        <p className="client-overview__label">Consumer/Consultancy</p>
        <p className="client-overview__label">Confirmed</p>
        <p className="client-overview__label">Staff Name</p>
      </div>
      <div className="client-overview__cards-container">{clientsListJSX}</div>
    </div>
  );
};

export default Client;
