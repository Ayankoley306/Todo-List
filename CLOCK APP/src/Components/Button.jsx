import React from 'react'

function Button({
    text = "button",
    className = "",
    ...props
}) {
    return (
        <button className={`${className}`} {...props} >{text}</button>
    )
}

export default Button;