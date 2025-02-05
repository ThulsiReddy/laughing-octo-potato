import React, { useState } from "react";

const Counter = () => {
  // State to manage the count
  const [count, setCount] = useState(0);

  // Function to increment the count
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  // Function to decrement the count
  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  // Function to reset the count and background color
  const reset = () => {
    setCount(0);
  };

  // Calculate the background color intensity based on the count
  const backgroundColorIntensity = Math.min(count * 10, 255); // Linear increase, capped at 255
  const backgroundColor = `rgb(${backgroundColorIntensity}, ${backgroundColorIntensity}, ${backgroundColorIntensity})`;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius:'4rem',
        backgroundColor: backgroundColor, // Dynamic background color
        transition: "background-color 0.3s ease-in-out", // Smooth transition
      }}
    >
      <h1> {count}</h1>
      <h2>Counter</h2>
      <div>
        <button onClick={increment} style={buttonStyle}>
          +
        </button>
        <button onClick={reset} style={buttonStyle}>
          Reset
        </button>
        <button onClick={decrement} style={buttonStyle}>
          -
        </button>
       
      </div>
    </div>
  );
};

// Style for buttons
const buttonStyle = {
  margin: "5px",
  padding: "10px 20px",
  fontSize: "16px",
  cursor: "pointer",
    border: 'none',
    background: '#bfeede',
    borderRadius:'0.5rem'
};

export default Counter;