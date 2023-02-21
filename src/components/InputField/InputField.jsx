import React from 'react'
import "./InputField.scss"

const InputField = (props) => {
    const {label, placeholderText, id, handleInput} = props
  return (
    <div>
        <label htmlFor={id}>{label}</label>
        <input className="input-field" id={id} type="text" placeholder={placeholderText} value={id} onChange={handleInput}/>
    </div>
  )
}

export default InputField