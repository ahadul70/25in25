import React from "react";

const Mapsex2 = () => {
  const bools = [true, false, true, false, true];
  const colors = bools.map((bool, index) => {
    if (bool === true) {
      return (
        <div
          key={index}
          style={{
            width: "100px",
            height: "100px",
            background: "white",
            color: "black",
          }}
        >
          {bool.toString()}
        </div>
      );
    } else {
      return (
        <div
          key={index}
          style={{
            width: "100px",
            height: "100px",
            background: "black",
            color: "white",
          }}
        >
          {bool.toString()}
        </div>
      );
    }
  });

  return <div>{colors}</div>;
};

export default Mapsex2;
