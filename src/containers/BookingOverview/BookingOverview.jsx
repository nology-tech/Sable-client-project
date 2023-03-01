import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import DatePicker from "react-date-picker";
import Button from "../../components/Button/Button";
import DropdownField from "../../components/DropdownField/DropdownField";
import InputField from "../../components/InputField/InputField";
import mockData from "../../data/mockData"
import "./BookingOverview.scss";
const UserInfoContainer = () => {
  const [day, setDay] = useState(new Date());
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [staff, setStaff] = useState("Stefania");
  const [time, setTime] = useState("09:00");
  const time_slots =  ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
  '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30',
  '17:00']

  const handleInput = (event) => {
    switch (event.target.id){
      case "first-name":
        setFirstName(event.target.value);
        break;
      
      case "last-name": 
        setLastName(event.target.value);
        break; 
      
      case "email": 
        setEmail(event.target.value);
        break;

      case "number":
        setNumber(event.target.value);
        break;

      case "staff":
        setStaff(event.target.value); 
        break;

      case "time":
        setTime(event.target.value);
        break; 
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault(); 
    const objectToAdd = {
      client: (firstName + " " + lastName),
      bookingDate: day,
      bookingTime: time,
      confirmed: true,
      Staff: staff,
      email: email, 
      number: number,
      
    }
    mockData.bookings.push(objectToAdd)
  };

  return (
    <form className="input-field-container">
      <div className="input-field-container__firstName">
        <InputField id="first-name" label="First Name" handleInput={handleInput} />
      </div>
      <div className="input-field-container__lastName">
        <InputField id="last-name" label="Last Name" handleInput={handleInput} />
      </div>
      <div className="input-field-container__email">
        <InputField id="email" label="Email Address" handleInput={handleInput} />
      </div>
      <div className="input-field-container__mobile">
        <InputField id="number" label="Mobile Number" handleInput={handleInput} />
      </div>
      <div className="input-field-container__staff-dropdown">
        <DropdownField
          id="staff"
          label="Staff Member"
          handleInput={handleInput}
          options={mockData.staff.map((staffMember) => {
            return staffMember.name; 
          })}
        />
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
        <DropdownField id="time" label="Time" handleInput={handleInput} options={time_slots}/>
      </div>
      <div className="input-field-container__submit">
        <Button
          buttonText="Submit"
          handleClick={handleSubmit}
          buttonStyle="isMobileDefault"
        />
      </div>
      <div className="input-field-container__buttons">
        <Button
          buttonText="Cancel"
          handleClick={handleSubmit}
          buttonStyle="isCancel--grey"
        />
        <Button buttonText="Save" handleClick={handleSubmit} />
      </div>
    </form>
  );
};

export default UserInfoContainer;
