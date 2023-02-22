import React from 'react'
import Button from '../Button/Button'
import Logo from '../../assets/images/logo/logo-white.png'
import './PageHeader.scss'

const PageHeader = ({heading}) => {

  return (
    <div className='page-header'>
        <img src = {Logo} alt='Logo' className='page-header__logo'/>
        <h1 className='page-header__heading'>{heading}Staff</h1>
        <Button buttonText={"Edit"} isPlus={true}/>
        {/* <div className='page-header_dropdown'>
            <select/>
        </div> */}
    </div>
  )
}

export default PageHeader