import React from "react";
import "./EmployeeOverviewCard.scss";
import divide from "../../assets/images/functional-icons/overview-divide-icon.png";

const EmployeeOverviewCard = ({ startDate, courseCompletion, manager }) => {
  return (
    <div className="employee-overview-card">
      <h3 className="employee-overview-card__title">Employee Overview</h3>
      <p className="employee-overview-card__text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        deserunt, natus aliquid labore possimus similique molestiae architecto
        voluptate consequatur veritatis ut, quam amet atque ducimus,
        necessitatibus accusamus sequi recusandae perferendis?
      </p>
      <img src={divide} alt="diving-line" />
      <div className="employee-overview-card__bottom">
        <div className="employee-overview-card__left">
          <p className="employee-overview-card__left--date">
            Employee Start Date:
          </p>
          <p className="employee-overview-card__left--course">
            Course Completion:
          </p>
          <p className="employee-overview-card__left--manager">Manager:</p>{" "}
        </div>

        <div className="employee-overview-card__right">
          <p className="employee-overview-card__right--date">
            {startDate} start date
          </p>
          <p className="employee-overview-card__right--course">
            {courseCompletion} completion
          </p>
          <p className="employee-overview-card__right--manager">
            {manager} manager
          </p>
        </div>
      </div>
    </div>
  );
};

export default EmployeeOverviewCard;
