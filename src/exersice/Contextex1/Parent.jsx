import { createContext, useState } from "react";
import Child from "./Child";

const StringContext = createContext();

function Parent() {
  const [StringState, setStringState] = useState("Start");

  return (
    <StringContext.Provider value={[StringState, setStringState]}>
      <Child />
    </StringContext.Provider>
  );
}
export default Parent;
export { StringContext };
