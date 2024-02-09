import React, { useEffect, useState } from "react";

const Colorgen = () => {
  const [typeofcolor, setTypeofcolor] = useState("hex");
  const [color, setColor] = useState("#000");

  function length(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomhexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
      hexColor += hex[length(hex.length)];
    }
    setColor(hexColor);
  }

  function handleCreateRandomrgbColor() {
    const r = length(256);
    const g = length(256);
    const b = length(256);

    setColor(`rgb(${r},${g}, ${b})`);
  }

  useEffect(() => {
    if (typeofcolor === "rgb") handleCreateRandomrgbColor();
    else handleCreateRandomhexColor();
  }, [typeofcolor]);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        background: color,
      }}
    >
      <button onClick={() => setTypeofcolor("hex")}> Create Hex Color </button>
      <button onClick={() => setTypeofcolor("rgb")}> Create RGB Color </button>
      <button
        onClick={
          typeofcolor === "hex"
            ? handleCreateRandomhexColor
            : handleCreateRandomrgbColor
        }
      >
        {" "}
        Generate Random Color{" "}
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "60px",
          marginTop: "50px",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <h3>{typeofcolor === "rgb" ? "RGB Color" : "HEX COLOR"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default Colorgen;
