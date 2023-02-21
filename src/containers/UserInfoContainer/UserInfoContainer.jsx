import React from 'react'
import "./UserInfoContainer.scss"
import InputField from '../../components/InputField/InputField'
import DropdownField from "../../components/DropdownField/DropdownField"

const UserInfoContainer = () => {

  const handleName =()=>{

  }

  const handleEmail =()=>{

  }

  const handleNumber =()=>{


  }

  const handleDropdown =()=>{
    
  }


  return (
    <div className='input-field-container'>
      <InputField id="first-name" label="First Name" placeholderText="Mark" handleInput={handleName}  />
      <InputField id="last-name" label="Last Name" placeholderText="Birchall" handleInput={handleName}  />
      <InputField id="email" label="Email Address" placeholderText="thiel90@hotmail.com" handleInput={handleEmail}  />
      <InputField id="number" label="Mobile Number" placeholderText="+44 1234 567890" handleInput={handleNumber}  />
      <DropdownField id="staff" label="Staff Member" placeholderText="Mariana" handleInput={handleDropdown}  />
    </div>
  )
}

export default UserInfoContainer