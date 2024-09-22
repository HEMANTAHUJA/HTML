import React, { useState, useEffect } from 'react';

const Timer = ({ start }) => {
    const [time, setTime] = useState(start);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime((prevTime) => prevTime - 1);
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Time Left: {time > 0 ? time : 'Time is up!'}</h2>
        </div>
    );
};

export default Timer;
