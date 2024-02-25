import React from "react";

const Modal = ({ id, header, body, footer }) => {
  return (
    <div id={id || "Modal"} className="modal">
      <div className="content">
        <div className="header">
          <span className="close-modal-icon">&times;</span>
          <h2>{header ? header : "Header"}</h2>
        </div>

        <div className="body">{body ? body : <div>This is body</div>}</div>
        <div className="footer">{footer ? footer : "footer"}</div>
      </div>
    </div>
  );
};

export default Modal;
