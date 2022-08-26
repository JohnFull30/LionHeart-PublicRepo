import React from 'react'

export default function InputField({ label, type, name, active = '', textArea = false }) {
    return (
        <div className='position-relative p-0'>
            <label htmlFor={name}>{label}</label>
            <input
                className={`input-field`}
                type={type}
                name={name}
                placeholder={`Enter ${label.toLowerCase()}...`}
                autoFocus={active === 'focused'}
                textArea={textArea}
            />
            <div className='focus-border position-absolute'></div>
        </div>
    )
}
