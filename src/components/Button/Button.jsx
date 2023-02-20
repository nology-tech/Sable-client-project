import React from 'react'
import "./Button.scss"

const Button=(props)=> {
const {buttonText, handleClick, handleSubmit, buttonStyle, isPlus} = props;

let buttonName = "button";
let plus = "noPlus"

if(isInputComplete){
  InputComplete
}


if (isPlus) {
  plus = "isPlus"
} else{
  plus = "noPlus"
}

buttonName += " " + buttonStyle

 return (
   <button
   className= {buttonName} 
   onClick= {handleClick}
   onSubmit= {handleSubmit}>
    <span className={plus}>+</span>
    {buttonText}
   </button>
  )
}

export default Button;