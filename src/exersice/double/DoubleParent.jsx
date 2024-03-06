import React, { createContext } from "react";
import DoubleChild from "./DoubleChild";
const StringContext = createContext();
const NumberContext = createContext();

const name = "Ahadul Islam";
const age = 20;
function DoubleParent() {
  return (
    <StringContext.Provider value={name}>
      <NumberContext.Provider value={age}>
        <DoubleChild />
      </NumberContext.Provider>
    </StringContext.Provider>
  );
}
export default DoubleParent;
export { StringContext, NumberContext };
