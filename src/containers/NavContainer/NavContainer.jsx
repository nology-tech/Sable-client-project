import React from 'react'
import "./NavContainer.scss"


const NavContainer = () => {
  return (
    <div className='nav-container'>
    <div className="nav-container__logo">Logo</div>
    <div className="nav-container__line-break">Line break</div>
    <div className='nav-container__menu-options'>Menu options</div>
    <div className="nav-container__line-break">Line break</div>
    <div className="nav-container__settings">Setting options</div>
    </div>
  )
}

export default NavContainer