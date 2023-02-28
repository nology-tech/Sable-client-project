import React from "react";
import filterIcon from "../../assets/images/functional-icons/filter-icon.png";
import gridIcon from "../../assets/images/functional-icons/gridview-icon.png";
import listIcon from "../../assets/images/functional-icons/listview-icon.png";
import sortIcon from "../../assets/images/functional-icons/sort-icon.png";
import "./FilterBar.scss";

const FilterBar = ({ handleInputSearch, title, handleSort, radioArr }) => {
  const radioJSX = radioArr.map((radioBox, index) => {
    return (
      <>
        <input
          name="searchInput"
          type="radio"
          key={index + 1}
          value={radioBox}
          id={radioBox}
        />
        <label key={index + 1} htmlFor={radioBox}>
          {radioBox}
        </label>
      </>
    );
  });
  return (
    <div className="filters">
      <h2 className="filters--label">{title}</h2>
      <div className="filters--display">
        <img src={listIcon} alt="listIcon" />
        <img src={gridIcon} alt="grid icon" />
      </div>
      <input className="filters--search" onChange={handleInputSearch}></input>
      <div className="filters--sort" onClick={handleSort}>
        <img src={sortIcon} alt="sort icon" />
        <p className="filters--sort-label">Sort</p>
      </div>
      <div className="filters--filter">
        <img src={filterIcon} alt="filter icon" />
        <p className="filters--filter-label">Filter</p>
      </div>
      <div className="filters__dropdown">{radioJSX}</div>
    </div>
  );
};

export default FilterBar;
