import React from 'react'
import "./Button.scss"

const Button=(props)=> {
const {buttonText} = props;

 return (
   <button>
    {buttonText}
   </button>
  )
}

export default Button;