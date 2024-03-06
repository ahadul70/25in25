import React from "react";
import useWindowResize from "./index"; // Corrected import

const Test = () => {
  const windowSize = useWindowResize(); // Corrected variable name
  const { width, height } = windowSize;

  return (
    <div>
      <h1>
        <p>Width is {width} </p>
        <p>Height is {height} </p>
      </h1>
    </div>
  );
};

export default Test;
