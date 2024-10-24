import React from 'react'

const Input = ({ title, name, handleChange , value }) => {
    return (
        <div className='flex items-center gap-1'>
            <input
                id={value}
                type="radio"
                onChange={handleChange}
                value={value}
                name={name}
                className="w-4 h-4 bg-gray-100 border-gray-300 focus:ring-violet-700 rounded-full accent-violet-600"
            />
            <label htmlFor={value} className='cursor-pointer capitalize'>{title}</label>
        </div>
    )
}

export default Input;