import React from 'react';

const TodoList = ({ todos }) => {
    return (
        <div style={{ margin: '20px' }}>
            <h2>Todo List</h2>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {todos.map((todo, index) => (
                    <li key={index} style={{ margin: '10px 0', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
                        {todo}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
