import React from 'react'
import '../NavItem/NavItem.scss'

const NavItem = () => {
  return (
    <div className='nav-item'>
        <div className='nav-item__image'>Image</div>
        <div className='nav-item__text'>
            <p>Text</p>
        </div>
    </div>
  )
}

export default NavItem