import React from 'react'
import "./Button.scss"

const Button=(props)=> {
const {buttonText, handleClick, handleSubmit, isSecondary, buttonStyle} = props;

let buttonName = "button";

if (isSecondary) {
  buttonName += " secondary";
} else {
  buttonName += " primary";
}

buttonName += " " + {buttonStyle} 

 return (
   <button
   className= {buttonName} 
   onClick= {handleClick}
   onSubmit= {handleSubmit}>
    {buttonText}
   </button>
  )
}

export default Button;