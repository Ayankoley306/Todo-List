import React from 'react'

function Button({
    value,
    className = "",
    ...props
}) {
    return (
        <button className={`${className}`} {...props} >{value}</button>
    )
}

export default Button;