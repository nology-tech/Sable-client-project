import React from "react";
import "../HomePageContainer/HomePageContainer.scss";
import HomepageCard from "../../components/HomepageCard/HomepageCard";

const HomePageContainer = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-container__new-appointment">
        <HomepageCard heading={"New Appointment"} />
      </div>
      <div className="homepage-container__staff-details">
        <HomepageCard heading={"Staff Details"} />
      </div>
      <div className="homepage-container__client-details">
        <HomepageCard heading={"Client Details"} />
      </div>
      <div className="homepage-container__resources">
        <HomepageCard heading={"Resources"} />
      </div>
      <div className="homepage-container__settings">
        <HomepageCard heading={"Settings"} />
      </div>
    </div>
  );
};

export default HomePageContainer;
