import React from 'react'
import NavItem from '../../components/NavItem/NavItem'
import "./NavContainer.scss"


const NavContainer = () => {
  return (
    <nav className='nav-container'>
    <div className="nav-container__logo">Logo</div>
    <div className='nav-container__menu-options'>
      <NavItem image={} itemText={}/>
      <NavItem image={} itemText={}/>
      <NavItem image={} itemText={}/>
      <NavItem image={} itemText={}/>

    </div>
    <div className="nav-container__line-break">Line break</div>
    <div className="nav-container__settings">Setting options</div>
    </nav>
  )
}

export default NavContainer