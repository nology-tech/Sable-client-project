import React from "react";
import "./EmployeeOverviewCard.scss";

const EmployeeOverviewCard = ({ startDate, courseCompletion, manager }) => {
  return (
    <div className="employee-overview-card">
      <div className="employee-overview-card__top">
        <h3 className="employee-overview-card__top--title">
          Employee Overview
        </h3>
        <p className="employee-overview-card__top--text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          deserunt, natus aliquid labore possimus similique molestiae architecto
          voluptate consequatur veritatis ut, quam amet atque ducimus,
          necessitatibus accusamus sequi recusandae perferendis?
        </p>
      </div>
      <div className="employee-overview-card__bottom">
        <p className="employee-overview-card__bottom--date">
          Employee Start Date: {startDate}
        </p>
        <p className="employee-overview-card__bottom--completion">
          Course Completion: {courseCompletion}
        </p>
        <p className="employee-overview-card__bottom--manager">
          Manager: {manager}
        </p>
      </div>
    </div>
  );
};

export default EmployeeOverviewCard;
