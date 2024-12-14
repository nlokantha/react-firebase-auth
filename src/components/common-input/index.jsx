import React from 'react'

export default function CommonInput({type,placeholder,value,onClick,className}) {
  return (
    <input
    type={type || 'text'}
    placeholder={placeholder || "Enter Value here"}
    value={value}
    onClick={onClick}
    className={className || "w-full block px-5 py-2 mt-2 text-black border rounded-lg"}
    />
  )
}
