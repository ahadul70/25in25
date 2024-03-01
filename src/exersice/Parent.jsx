import React, { createContext } from "react";
import Child from "./child";


const MyContext = createContext();
const contextState = "I love monkeys";

function Parent() {
  return (
    <MyContext.Provider value={contextState}>
      <Child />
    </MyContext.Provider>
  );
}

export default Parent;
export {MyContext}
