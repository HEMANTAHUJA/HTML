import React, { useState } from 'react';

const ColorPicker = ({ colors, onColorSelect }) => {
    return (
        <div style={{ display: 'flex', gap: '10px', margin: '20px' }}>
            {colors.map((color) => (
                <button
                    key={color}
                    style={{
                        backgroundColor: color,
                        width: '50px',
                        height: '50px',
                        border: 'none',
                        cursor: 'pointer',
                    }}
                    onClick={() => onColorSelect(color)}
                />
            ))}
        </div>
    );
};

export default ColorPicker;
