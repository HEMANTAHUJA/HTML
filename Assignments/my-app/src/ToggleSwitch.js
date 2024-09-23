import React from 'react';

const ToggleSwitch = ({ toggleState }) => {
    return (
        <div style={{ margin: '20px' }}>
            <label style={{ cursor: 'pointer' }}>
                <input
                    type="checkbox"
                    onChange={toggleState}
                />
                <span style={{ marginLeft: '10px' }}>Toggle</span>
            </label>
        </div>
    );
};

export default ToggleSwitch;
