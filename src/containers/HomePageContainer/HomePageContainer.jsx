import React from "react";
import "../HomePageContainer/HomePageContainer.scss";
import HomepageCard from "../../components/HomepageCard/HomepageCard";

const HomePageContainer = () => {
  return (
    <div className="homepage-container">
      <div className="homepage-container__new-appointment">
        <HomepageCard className="homepage-container__card" heading={"New Appointment"} />
      </div>
      <div className="homepage-container__staff-details">
        <HomepageCard className="homepage-container__card" heading={"Staff Details"} />
      </div>
      <div className="homepage-container__client-details">
        <HomepageCard className="homepage-container__card" heading={"Client Details"} />
      </div>
      <div className="homepage-container__resources">
        <HomepageCard className="homepage-container__card" heading={"Resources"} />
      </div>
      <div className="homepage-container__settings">
        <HomepageCard className="homepage-container__card" heading={"Settings"} />
      </div>
    </div>
  );
};

export default HomePageContainer;
