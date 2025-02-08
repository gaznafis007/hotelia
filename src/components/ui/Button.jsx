'use client'
import React from 'react';

const Button = ({children, className, type, handler}) => {
    return (
        <button type={type} onClick={handler} className={`bg-blue-500 hover:bg-blue- px-3 py-2 text-white rounded-lg ${className}`}>
            {children}
        </button>
    );
};

export default Button;