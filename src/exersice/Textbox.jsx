import React, { useState } from "react";

const Textbox = () => {
  const [text, setText] = useState("");
  function handleinputchange(e) {
    console.log(e.target.value);
    setText(e.target.value);
  }
  return (
    <>
      <input type="text" onInput={handleinputchange} />

      <h1>{text}</h1>
    </>
  );
};

export default Textbox;
