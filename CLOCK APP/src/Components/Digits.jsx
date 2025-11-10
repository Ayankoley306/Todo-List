import React from 'react'

function Digits({
    value,
    className = 'text-black bg-transparent',
    ...props
}) {
    return (
        <div className={`${className} text-8xl lg:text-9xl transition delay-150 ease-in border-transparent border-8 `} {...props}>{value}</div>
    )
}

export default Digits