import React from 'react'

const Button = (props) => <button onClick={props.handleOnClick} className="my-button">{props.text}</button>

export default Button
