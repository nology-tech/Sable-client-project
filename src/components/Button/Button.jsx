import React from 'react'
import "./Button.scss"

const Button=(props)=> {
const {buttonText, handleClick, handleSubmit, buttonStyle, isPlus, plus} = props;

let buttonName = "button";

if (isPlus) {
  plus = <span className='isPlus'>+</span>
}

buttonName += " " + buttonStyle

 return (
   <button
   className= {buttonName} 
   onClick= {handleClick}
   onSubmit= {handleSubmit}>
    {plus}
    {buttonText}
   </button>
  )
}

export default Button;