import React, { useState } from "react";

const Form = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [number, setNumber] = useState("");
  const [h1text, setH1text] = useState("");

  function handleinputchangeFame(e) {
    setFname(e.target.value);
  }
  function handleinputchangeLname(e) {
    setLname(e.target.value);
  }
  function handleinputchangeNumber(e) {
    setNumber(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    console.log(fname, lname, number);
    setH1text(`${fname} ${lname} ${number}`);
    setFname("");
    setLname("");
    setNumber("");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" onInput={handleinputchangeFame} value={fname} />
        <input type="text" onInput={handleinputchangeLname} value={lname}/>
        <input type="text" onInput={handleinputchangeNumber} value={number}/>

        <button type="submit">Submit</button>
      </form>
      <h1>{h1text}</h1>
    </>
  );
};

export default Form;
