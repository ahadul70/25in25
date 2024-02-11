import React from "react";

const ScreenWithDivs = () => {
  // Assuming screenWidth and screenHeight are the dimensions of the screen
  const screenWidth = window.innerWidth;
  const screenHeight = window.innerHeight;

  // Dimensions of each div
  const divWidth = 100;
  const divHeight = 100;

  // Calculate the number of divs horizontally and vertically
  const numDivsHorizontal = Math.floor(screenWidth / divWidth);
  const numDivsVertical = Math.floor(screenHeight / divHeight);
 console.log(numDivsHorizontal,numDivsVertical);
  // Create an array to store div elements
  const divElements = [];
let r = 100,
  b = Math.floor(Math.random() * 256),
  g = 20;
    let incrementedColor;
 
  // Loop to create divs
  for (let row = 0; row < 16; row++) {
    for (let col = 0; col < 25; col++) {
        const key = `div_${row}_${col}`;
         incrementedColor = `rgb(${(r + 15 * col) % 256},${
           (g + 15 * row) % 256
         },${(b + 5 * (row + col)) % 256})`;
      const divNumber = row * 25+ col + 1; // Unique number for each div
      divElements.push(
        <div
          key={key}
          style={{
            width: divWidth,
            height: divHeight,
            background: incrementedColor,
            border: "1px solid white", // Add a border for visibility
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
          }}
        >
          {divNumber}
        </div>
      );
    }
  }

  return <div style={{ display: "flex", flexWrap: "wrap" }}>{divElements}</div>;
};

export default ScreenWithDivs;
