import React from "react";
import FilterIcon from "../../assets/images/functional-icons/filter-icon.png";
import gridview from "../../assets/images/functional-icons/gridview-icon.png";
import listview from "../../assets/images/functional-icons/listview-icon.png";
import SortIcon from "../../assets/images/functional-icons/sort-icon.png";
import StaffImage from "../../assets/images/users/staff-picture.png";
import EmployeeOverviewCard from "../../components/EmployeeOverviewCard/EmployeeOverviewCard.jsx";
import UserProfile from "../../components/UserProfileCard/UserProfileCard.jsx";
import "./StaffOverview.scss";
const StaffOverview = () => {
  return (
    <div className="staff-overview">
      <h2 className="staff-overview__title">Overview</h2>
      <div className="staff-overview__card-container">
        <UserProfile image={StaffImage} name={"John Doe"} role={"MAN"} />
        <EmployeeOverviewCard
          startDate={"10/10/2022"}
          courseCompletion={"20/04/2024"}
          manager={"Morgan Freeman"}
          description={"hello"}
        />
      </div>
      <div className="staff-overview__display-view">
        <h2 className="staff-overview__title">Staff bookings</h2>
        <div className="staff-overview__display--icons">
          <img
            className="staff-overview__icon"
            src={listview}
            alt="List view icon"
          />
          <img
            className="staff-overview__icon"
            src={gridview}
            alt="Grid view icon"
          />
        </div>
        <input className="staff-overview__searchbar" type="text" name="" id="" />
        <div className="staff-overview__sort">
          <img className="staff-overview__icon" src={SortIcon} alt="sort icon" />
          <p className="staff-overview__subheading">Sort</p>
        </div>
        <div className="staff-overview__filter">
          <img className="staff-overview__icon" src={FilterIcon} alt="filter icon" />
          <p className="staff-overview__subheading">Filter</p>
        </div>
      </div>
    </div>
  );
};

export default StaffOverview;
