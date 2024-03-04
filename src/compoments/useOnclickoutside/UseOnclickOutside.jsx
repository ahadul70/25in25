import React, { useState, useRef } from "react";
import useOutsideClick from "./OnclickIndex";

export default function UseOnClickOutsideTest() {
  const [showContent, setShowContent] = useState(false);
  const ref = useRef();

  useOutsideClick(ref, () => setShowContent(false));

  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is a random</h1>
          <p>Please click outside of this to close this</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>Show Content</button>
      )}
    </div>
  );
}


