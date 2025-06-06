import React from 'react'

export default function InputBox({ label, placeholder, onChange, value, name }) {
    return (
        <div className="flex flex-col space-y-2">
            <label className="text-sm font-medium text-blue-800 pl-1">
                {label}
            </label>
            <input 
                placeholder={placeholder} 
                name={name} 
                value={value} 
                onChange={onChange} 
                className="py-2 px-3 rounded-md border border-blue-200 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none text-blue-900" 
            />
        </div>
    )
}