import React from 'react'

const Button = ({ login, children, errors, ...atr }) => {

  return (
    <button
      className={`py-1 hover:bg-blue-500 transition text-white bg-blue-400 rounded-3xl px-6`}
      {...atr}
    >
      {children}
    </button>
  )
}

export default Button
