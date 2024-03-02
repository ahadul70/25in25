import { useContext } from "react";
import { StringContext } from "./Parent";

function Child() {
  const [StringState, setStringState] = useContext(StringContext);
  return (
    <>
      <h1>{StringState}</h1>
      <button onClick={() => setStringState("Finish")}>Change text!</button>
    </>
  );
}

export default Child;
