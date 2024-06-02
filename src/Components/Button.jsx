import React from 'react'

const Button = ({className, children, hover}) => {
  return (
    <button className={`${
        className || ""
    } text-xl grid justify-center items-center px-4 py-2 font-semibold rounded-md ${
        hover ? "hover:gradient" : ""
    }`}>
        {children}
    </button>
  )
}

export default Button
