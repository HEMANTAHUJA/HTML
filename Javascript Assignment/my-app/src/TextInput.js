import React, { useState } from 'react';

const TextInput = ({ onChange }) => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        const value = event.target.value;
        setInputValue(value);
        onChange(value); 
    };

    return (
        <div style={{ margin: '20px' }}>
            <input
                type="text"
                value={inputValue} // Controlled input
                onChange={handleChange}
                placeholder="Type something..."
                style={{ padding: '10px', width: '200px' }}
            />
        </div>
    );
};

export default TextInput;
