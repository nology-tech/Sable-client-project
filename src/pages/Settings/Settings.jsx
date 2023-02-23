import React from 'react'
import './Settings.scss'
import NavContainer from '../../containers/NavContainer/NavContainer'
import PageHeader from '../../components/PageHeader/PageHeader'
import Button from '../../components/Button/Button'
import Sun from '../../assets/images/lightmode/sun-light.png'
import Moon from '../../assets/images/lightmode/monn-light.png'
import Toggle from '../../assets/images/lightmode/toggle-light-icon.png'

const Settings = () => {

    const settingsJSX = () => {
        <div className='setings-card'>
            <div className='setings-card__mode'>
                <h1 className='settings-card__option'>Light/Dark Mode:</h1>
            </div>
            <div className='setings-card__theme'>
                <h1 className='settings-card__option'>Select Theme:</h1>
            </div>
            <Button buttonText={"Apply"}/>
        </div>
    }
    
  return (
    <div className='settings-container'>
        <NavContainer/>
        <PageHeader headerType="headingButton" heading="Settings" text = 'Apply' />
        <settingsJSX/>
    </div>
  )
}

export default Settings