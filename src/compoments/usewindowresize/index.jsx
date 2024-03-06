import React, { useLayoutEffect, useState } from "react";

const Index = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  function handleResize() {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  }

  useLayoutEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []); // Empty dependency array to run the effect only once during mount

  return windowSize;
};

export default Index;
