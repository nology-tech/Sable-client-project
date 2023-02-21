import React from "react";
import "./EmployeeOverviewCard.scss";
import divide from "../../assets/images/functional-icons/overview-divide-icon.png";

const EmployeeOverviewCard = ({ startDate, courseCompletion, manager, description }) => {
  return (
    <div className="employee-overview-card">
      <h3 className="employee-overview-card__title">Employee Overview</h3>
      <p className="employee-overview-card__text">    {description}
      </p>
      <img src={divide} alt="diving-line" className="employee-overview-card__divide"/>
      <div className="employee-overview-card__bottom">
        <div className="employee-overview-card__left">
          <p className="employee-overview-card__left--date">
            Employee Start Date:
          </p>
          <p className="employee-overview-card__left--course">
            Course Completion:
          </p>
          <p className="employee-overview-card__left--manager">Manager:</p>
        </div>

        <div className="employee-overview-card__right">
          <p className="employee-overview-card__right--date">
            {startDate}
          </p>
          <p className="employee-overview-card__right--course">
            {courseCompletion}
          </p>
          <p className="employee-overview-card__right--manager">
            {manager}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOverviewCard;
