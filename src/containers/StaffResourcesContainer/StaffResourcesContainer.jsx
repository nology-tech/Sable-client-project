import React from "react";
import "./StaffResourcesContainer.scss";
import StaffResources from "../../components/StaffResources/StaffResources";
import { mockData } from "../../data/mockData"
const StaffResourcesContainer = () => {
  let resourceData = mockData.resources
  let resourceDataCopy = [...resourceData];
  return (
    <div className="staff-resource-container">
      <StaffResources
        staffName={"Staff 01"}
        renderLabels={true}
        cardsArray={resourceDataCopy}
      />
      <StaffResources staffName={"Staff 02"} cardsArray={resourceDataCopy} />
    </div>
  );
};

export default StaffResourcesContainer;
