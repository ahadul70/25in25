import React from "react";

const Mapsex1 = () => {
  const numbers = [25, 26, 27, 28, 29, 30];
  const squares = numbers.map((number) => {
    return number * number;
  });
    console.log({ squares });
  return (
    <div>
      <p>These are the numbers: {numbers.join(", ")}</p>
      <p>These are the squares: {squares.join(", ")}</p>
    </div>
  );
 
};

export default Mapsex1;
