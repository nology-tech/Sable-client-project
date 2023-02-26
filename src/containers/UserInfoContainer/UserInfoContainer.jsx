import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import Button from "../../components/Button/Button";
import DropdownField from "../../components/DropdownField/DropdownField";
import InputField from "../../components/InputField/InputField";

import "./UserInfoContainer.scss";

const UserInfoContainer = () => {
  //You can use the day from the calendar with this useState
  const [day, setDay] = useState(new Date());
  //console.log(day);

  const handleName = () => {};

  const handleEmail = () => {};

  const handleNumber = () => {};

  const handleDropdown = () => {};

  const handleSubmit = () => {};

  return (
    <form className="input-field-container">
      <InputField id="first-name" label="First Name" handleInput={handleName} />
      <InputField id="last-name" label="Last Name" handleInput={handleName} />
      <InputField id="email" label="Email Address" handleInput={handleEmail} />
      <InputField id="number" label="Mobile Number" handleInput={handleNumber} />
      <div className="input-field-container__staff-dropdown">
        <DropdownField
          id="staff"
          label="Staff Member"
          handleInput={handleDropdown}
        />
      </div>
      <div className="input-field-container__buttons">
        <Button
          buttonText="Cancel"
          handleSubmit={handleSubmit}
          buttonStyle="isCancel--grey"
        />
        <Button buttonText="Save" handleSubmit={handleSubmit} />
      </div>

      <div id="datePicker" className="input-field-container__date-picker">
        <label
          htmlFor="datePicker"
          className="input-field-container__date-picker--label"
        >
          Date
        </label>
        <DatePicker
          onChange={setDay}
          value={day}
          format={"d/M/y"}
          minDate={new Date()}
          dayPlaceholder={"dd"}
          monthPlaceholder={"mm"}
          yearPlaceholder={"yyyy"}
          maxDate={new Date("2026/12/31")}
          minDetail={"decade"}
          required
        />
      </div>
      <div className="input-field-container__calendar">
        <Calendar
          onChange={setDay}
          value={day}
          minDate={new Date()}
          maxDate={new Date("2026/12/31")}
          minDetail={"decade"}
          required
        />
      </div>
      <div className="input-field-container__time-dropdown">
        <DropdownField id="time" label="Time" handleInput={handleDropdown} />
      </div>
      <div className="input-field-container__submit">
        <Button
          buttonText="Submit"
          handleSubmit={handleSubmit}
          buttonStyle="isMobileDefault"
        />
      </div>
    </form>
  );
};

export default UserInfoContainer;
