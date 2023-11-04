import React from 'react';

function FileInput({ id, name, className, required, onChange }) {
    return (
        <input id={id} type="file" name={name} onChange={onChange} className={`mt-1 block w-full p-2 border border-black ${className}`} required />
    );
}

export default FileInput
