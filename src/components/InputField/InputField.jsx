import React from 'react'
import "./InputField.scss"

const InputField = (props) => {
    const {label, placeholderText, id, handleInput} = props
  return (
    <div className='input-field'>
        <label className='input-field__label' htmlFor={id}>{label}</label>
        <input className="input-field__input" id={id} type="text" placeholder={placeholderText}  onChange={handleInput}/>
    </div>
  )
}

export default InputField