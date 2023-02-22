import React from 'react'
import Button from '../Button/Button'
import Logo from '../../assets/images/logo/logo-white.png'
import './PageHeader.scss'

const PageHeader = ({headerType, heading, text }) => {

    const SingleJSX = () => {
        <div className='single-header'>
            <h1 className='header__heading'>{heading}</h1>
        </div>
    }

    const DoubleJSX = () => {
        <div className='double-header'>
            <h1 className='header__heading'>{heading}</h1>
            <Button buttonText = {text}/>
        </div>
    }

    const TripleJSX = () => {
        <div className='double-header'>
            <h1 className='header__heading'>{heading}</h1>
            <Button buttonText = {text}/>
            <div>
                <select>
                    <option value = "">
                        select option
                    </option>
                </select>
            </div>
        </div>
    }

  return (
    <>
      {headerType === "home" || "book appointment" || "settings" || "edit resource" || "request resource"
        ? SingleJSX()
        : headerType === "clients" || "resources" || "add client" || "edit client"
        ? DoubleJSX()
        : headerType === "staff"
        ? TripleJSX()
        : alert("Unkown card")}
    </>
  )
}

export default PageHeader