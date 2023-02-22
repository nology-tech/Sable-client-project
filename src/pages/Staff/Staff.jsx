import React from "react";
import Button from "../../components/Button/Button";
import StaffOverview from "../../containers/StaffOverview/StaffOverview";

import NavContainer from "../../containers/NavContainer/NavContainer";
import "./Staff.scss";

const Staff = () => {
  return (
    <div className="staff-page">
      <NavContainer />
      <main className="staff-page__body">
        <div className="staff-page__container">
          <header className="staff-page__header">
            <h1 className="staff-page__title">Staff</h1>
            <Button
              buttonText={"Edit"}
              handleClick={() => console.log("Get to Edit")}
              isPlus={true}
            />
          </header>
          <StaffOverview />
        </div>
      </main>
    </div>
  );
};

export default Staff;
