import React from 'react';

function SelectInput({ id, name, options, className, required }) {
    return (
        <select id={id} name={name} className={`mt-1 block w-full p-2 border border-black ${className}`} required>
            {options.map((option, index) => (
                <option key={index} value={option.value}>
                    {option.label}
                </option>
            ))}
        </select>
    );
}

export default SelectInput
