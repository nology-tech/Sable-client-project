import React from 'react'
import "./NewAppointment.scss"
import UserInfoContainer from '../../containers/UserInfoContainer/UserInfoContainer'
import NavContainer from '../../containers/NavContainer/NavContainer'

const NewAppointment = () => {
  return (
    <div className="new-appointment">
        <NavContainer />
        <div className='header'>
            Header
        </div>
        <UserInfoContainer />
    </div>
  )
}

export default NewAppointment