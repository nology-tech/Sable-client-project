import React from "react";
import "./StaffResourcesContainer.scss";
import StaffResources from "../../components/StaffResources/StaffResources";
import { mockData } from "../../data/mockData";
const StaffResourcesContainer = ({ isAdmin /*resourcesRequestArr*/ }) => {
  const staffResourceList = (isAdmin) => {
    let category = "";
    isAdmin ? (category = "Admin") : (category = "Health");
    const arrayOfStaff = mockData.staff.map((staff) => {
      const staffResources = mockData.resourcesRequest.filter(
        //rRA goes in here
        (resourcesRequest) => {
          return (
            resourcesRequest.staffMember == staff.name &&
            resourcesRequest.category == category
          );
        }
      );
      return [staff.name, staffResources];
    });
    const staffRequests = arrayOfStaff.filter((staff) => {
      //when there is no match then it doesn't display
      return staff[1].length != 0;
    });
    return staffRequests;
  };

  console.log(staffResourceList(isAdmin));

  const staffJSX = staffResourceList(isAdmin).map((staff, index) => {
    return (
      <StaffResources
        key={index}
        staffName={staff[0]}
        cardsArray={staff[1]}
        id={index}
      /> // [staff.name, stafresources, isfirst]
    );
  });

  return <div className="staff-resource-container">{staffJSX}</div>;
};
export default StaffResourcesContainer;
