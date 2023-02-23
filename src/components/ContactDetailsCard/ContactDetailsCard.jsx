import React from 'react'
import "./BookingDetailsCard.scss"

const BookingDetailsCard = (props) => {

  return (
    <div className='card-container'>
      <h1 className='card-container__contact-detals'>contact details</h1>
      <h2 className='card-container__dob'> Date of Birth:</h2>
      <p className='card-container__dob-data'>{cardObject[].dateOfBirth}</p>
      <h2 className='card-container__email'>Email Address:</h2>
      <p className='card-container__email-data'>{cardObject[].email}</p>
      <h2 className='card-container__number'>Mobile Number:</h2>
      <p className='card-container__number-data'>{cardObject[].number}</p>
    </div>
  )
}
export default BookingDetailsCard
