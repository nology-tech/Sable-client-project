import React from "react";
import staffPicture from "../../assets/images/users/staff-picture.png";
import Button from "../../components/Button/Button";
import EmployeeOverviewCard from "../../components/EmployeeOverviewCard/EmployeeOverviewCard";
import UserProfileCard from "../../components/UserProfileCard/UserProfileCard";
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
          <details className="staff-page__content">
            <summary className="staff-page__dropdown-title">Staff 1</summary>
            <div className="staff-page__overview">
              <h3 className="staff-page__subheader">Overview</h3>
              <div className="staff-page__profile-card-container">
                <UserProfileCard
                  image={staffPicture}
                  name={"John Doe"}
                  role={"Full Time Employee"}
                />
                <EmployeeOverviewCard />
              </div>
            </div>
          </details>
        </div>
      </main>
    </div>
  );
};

export default Staff;
