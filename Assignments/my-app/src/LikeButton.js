import React, { useState } from 'react';

const LikeButton = ({ likeCount }) => {
    
    const [count, setCount] = useState(likeCount);

    const handleLike = () => {
        setCount(count + 1);
    };

    return (
        <div style={{ textAlign: 'center', margin: '20px' }}>
            <h2>Likes: {count}</h2>
            <button onClick={handleLike}>Like</button>
        </div>
    );
};

export default LikeButton;
