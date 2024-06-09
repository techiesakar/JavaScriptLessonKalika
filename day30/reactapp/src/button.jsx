import React from 'react'

const Button = ({ label, className }) => {
    return (
        <div className={`text-white p-2 rounded  ${className}`}>{label}</div>
    )
}

export default Button