import React, { useState } from "react";
import QRCode from "react-qr-code";
const Qr = () => {
  const [text, setText] = useState("");
  const [qr, setQr] = useState("");
  function handleclick() {
    setQr(text);
  }
  return (
    <>
      <h1>Qr generator</h1>
      <input
        type="text"
        placeholder="Enter name "
        text={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={handleclick}> Generate</button>
      <div>
        <QRCode id="qr_code" value={qr} />
      </div>
    </>
  );
};

export default Qr;
