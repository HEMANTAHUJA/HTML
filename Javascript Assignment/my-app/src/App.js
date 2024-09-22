// import React from 'react';
// import Greeting from './Greetings'; 
// import ProfileCard from './ProfileCard'; 
// import StatusMessage from './StatusMessage';
// import Counter from './Counter';
// import LikeButton from './LikeButton';
// import Timer from './Timer';
import React, { useState } from 'react';
// import ColorPicker from './ColorPicker';
// import TextInput from './TextInput'; 
// import ToggleSwitch from './ToggleSwitch';
import TodoList from './TodoList';

const App = () => {
    // 7
    // const [selectedColor, setSelectedColor] = useState('');

    // const handleColorSelect = (color) => {
    //     setSelectedColor(color);
    // };

    // const colors = ['red', 'green', 'blue', 'yellow', 'orange'];
    
    
    // 8
    // const [text, setText] = useState('');

    // const handleInputChange = (value) => {
    //     setText(value);
    // };


    // 9
    // const [isToggled, setIsToggled] = useState(false);

    // const handleToggleState = () => {
    //     setIsToggled((prev) => !prev); // Toggle the state
    // };
    const todos = [
        'Learn React',
        'Build a Todo App',
        'Understand Props and State',
        'Practice with Components',
        'Deploy the App'
    ];

    return (
        // 1
        // <div>
        //     <Greeting name="Alice" />
        //     <Greeting name="Bob" />
        // </div>
        
        // 2
    //     <div>
    //     <ProfileCard name="Hemant" age={30} location="New York" />
    //     <ProfileCard name="Ayush" age={25} location="San Francisco" />
    //     <ProfileCard name="Priyesh" age={28} location="Los Angeles" />
    // </div>

    // 3
//     <div>
//     <StatusMessage status="success" />
//     <StatusMessage status="error" />
//     <StatusMessage status="unknown" />
// </div>


// 4
//  <div>
// <h1>Simple Counter App</h1>
// <Counter />
// </div> 

// 5
// <div>
// <h1>Like Button Example</h1>
// <LikeButton likeCount={0} />
// </div> 

// 6
//<div>
//<h1>Countdown Timer Example</h1>
//<Timer start={10} />
//</div>

// <div style={{ textAlign: 'center', margin: '20px' }}>
//<h1>Color Picker Example</h1>
//<ColorPicker colors={colors} onColorSelect={handleColorSelect} />
//{selectedColor && (
//    <h2 style={{ marginTop: '20px' }}>
//        Selected Color: <span style={{ color: selectedColor }}>{selectedColor}</span>
//    </h2>
//)}
 //</div> 

//  8
// <div style={{ textAlign: 'center', margin: '20px' }}>
// <h1>Controlled vs Uncontrolled Component Example</h1>
// <TextInput onChange={handleInputChange} />
// <h2 style={{ marginTop: '20px' }}>
//     Current Input: {text}
// </h2>
//</div>

// 9
//<div style={{ textAlign: 'center', margin: '20px' }}>
//<h1>Toggle Switch Example</h1>
//<ToggleSwitch toggleState={handleToggleState} />
//<h2 style={{ marginTop: '20px' }}>
//    Switch is {isToggled ? 'ON' : 'OFF'}
//</h2>
//</div>

// 10
<div style={{ textAlign: 'center', margin: '20px' }}>
<h1>Todo List Example</h1>
<TodoList todos={todos} />
</div>
);
};

export default App;
