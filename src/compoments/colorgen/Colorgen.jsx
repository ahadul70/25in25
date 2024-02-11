import React, { useEffect, useState } from "react";

const Colorgen = () => {
  const [colorType, setColorType] = useState("hex");
  const [color, setColor] = useState("#000");
  const [secondColor, setSecondColor] = useState("#000");

  function length(length) {
    return Math.floor(Math.random() * length);
  }

  function handleIncrementColor(inputColor) {
    let incrementedColor;

    if (colorType === "hex") {
      incrementedColor =
        "#" +
        inputColor
          .slice(1)
          .split("")
          .map((digit) => (parseInt(digit, 16) + 1) % 16)
          .map((digit) => digit.toString(16))
          .join("");
    } else {
      const [r, g, b] = inputColor
        .substring(4, inputColor.length - 1)
        .split(",")
        .map((value) => parseInt(value.trim(), 10));

      incrementedColor = `rgb(${(r + 1) % 256},${(g + 1) % 256},${
        (b + 1) % 256
      })`;
    }

    console.log("Original Color:", inputColor);
    console.log("Incremented Color:", incrementedColor);

    setSecondColor(incrementedColor);
  }

  function handleCreateRandomColor() {
    if (colorType === "rgb") {
      const r = length(256);
      const g = length(256);
      const b = length(256);
      const rgbColor = `rgb(${r},${g},${b})`;

      setColor(rgbColor);
      handleIncrementColor(rgbColor);
    } else {
      const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let hexColor = "#";
      for (let i = 0; i < 6; i++) {
        hexColor += hex[length(hex.length)];
      }
      setColor(hexColor);
      handleIncrementColor(hexColor);
    }
  }

  useEffect(() => {
    handleCreateRandomColor();
  }, [colorType]);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <button onClick={() => setColorType("hex")}>Toggle Hex Color</button>
      <button onClick={() => setColorType("rgb")}>Toggle RGB Color</button>
      <button onClick={handleCreateRandomColor}>Generate Random Color</button>
      <div style={{ width: "100px", height: "100px", background: color }}></div>
      <div
        style={{ width: "100px", height: "100px", background: secondColor }}
      ></div>
      <div
        style={{ width: "100px", height: "100px", background: secondColor }}
      ></div>
    </div>
  );
};

export default Colorgen;
