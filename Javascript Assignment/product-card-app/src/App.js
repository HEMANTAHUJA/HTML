import React from 'react';
import './App.css';
import ProductCardList from './ProductCardList'; // Import the component

function App() {
  return (
    <div className="App">
      <h1>Product Store</h1>
      <ProductCardList />  {/* Render the component */}
    </div>
  );
}

export default App;
