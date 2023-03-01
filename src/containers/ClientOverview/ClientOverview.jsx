import React, { useEffect, useState } from "react";
import DataCard from "../../components/DataCard/DataCard";
import FilterBar from "../../components/FilterBar/FilterBar";
import mockData from "../../data/mockData";
import "./ClientOverview.scss";
const Client = () => {
  //Will replace with real data passed through props later
  // const [query, setQuery] = useState("");
  const [click, setClick] = useState(0);
  const [dataArr, setDataArr] = useState([...mockData.clients]);
  // const [selectQuery, setSelectQuery] = useState("")

  useEffect(() => {
    // handleSelect()
  }, []);

  const handleSort = () => {
    setClick(Number(click) + 1);
    if (click == 2) {
      setClick(0);
    }
    if (click == 1) {
      setDataArr(
        dataArr.sort((x, y) => {
          let a = x.lastName.toUpperCase(),
            b = y.lastName.toUpperCase();
          return a == b ? 0 : a < b ? 1 : -1;
        })
      );
    } else if (click == 2) {
      setDataArr(
        dataArr.sort((x, y) => {
          let a = x.lastName.toUpperCase(),
            b = y.lastName.toUpperCase();
          return a == b ? 0 : a > b ? 1 : -1;
        })
      );
    } else {
      setDataArr([...mockData.clients]);
    }
  };

  const handlefilter = (event) =>{
    // setDataArr(
    //   dataArr.filter((element) => {
    //     return (
    //       element.firstName.toLowerCase().includes(query.toLowerCase()) ||
    //       element.lastName.toLowerCase().includes(query.toLowerCase())
    //     );
    //   })
    // );
    if (event.target.value == "Consultant") {
      setDataArr(dataArr.filter((element) => {
        return element.query.includes("consultant");
      }))
      console.log("this is the consultant array", dataArr);
      return;
    } else if (event.target.value == "Consumer") {
      setDataArr(dataArr.filter((element) => {
        return element.query.includes("consumer");
      }))
      console.log("this is the consumer array ", dataArr);
      return
    } else if (event.target.value == "Confirmed") {
      setDataArr(dataArr.filter((element) => {
        return element.confirmedAppoinment;
      }))
      console.log("This is the cinfirmed array", dataArr);
      return
    }
  }

  const handleInputSearch = () => {
    // setQuery(event.target.value);
  };
  console.log("just before client list",dataArr)
  const clientsListJSX = dataArr.map((client, index) => {
    return <DataCard key={index + 1} cardType="client" cardObject={client} />;
  });

  return (
    <div className="client-overview">
      <FilterBar
        title={"Client List"}
        handleInputSearch={handleInputSearch}
        handleSort={handleSort}
        handleSelect={handlefilter}
        optionsArr={["Consumer", "Consultant", "Confirmed"]}
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
