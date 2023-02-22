import React from 'react'
import "./UserInfoContainer.scss"
import InputField from '../../components/InputField/InputField'
import DropdownField from "../../components/DropdownField/DropdownField"
import Button from '../../components/Button/Button'
import Calendar from '../../assets/images/appointments-temporary/Calendar.png'

const UserInfoContainer = () => {

  const handleName =()=>{
  }

  const handleEmail =()=>{
  }

  const handleNumber =()=>{
  }

  const handleDropdown =()=>{
  }

  const handleSubmit =()=>{
  }

  return (
    <div className='input-field-container'>
        <InputField id="first-name" label="First Name" handleInput={handleName}  />
        <InputField id="last-name" label="Last Name"  handleInput={handleName}  />
        <InputField id="email" label="Email Address"  handleInput={handleEmail}  />
        <InputField id="number" label="Mobile Number"  handleInput={handleNumber}  />
        <div className='input-field-container__staff-dropdown'>
          <DropdownField id="staff" label="Staff Member" handleInput={handleDropdown}  />
        </div>
        <div className='buttons'>
          <Button buttonText = "Cancel" handleSubmit = {handleSubmit} buttonStyle="isCancel--grey"/>
          <Button buttonText = "Save" handleSubmit = {handleSubmit}/>
        </div>
        <img className='calendar' src= {Calendar} alt="Calendar"/>
        <div className="input-field-container__time-dropdown">
          <DropdownField  id="time" label="Time" handleInput={handleDropdown}  />
        </div>
    </div>
  )
}

export default UserInfoContainer