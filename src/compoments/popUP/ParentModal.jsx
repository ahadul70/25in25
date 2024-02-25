import React, { useState } from "react";
import Modal from "./modal";
import "./modal.css"

const ParentModal = () => {
  const [showModal, setShowModal] = useState(false);
  function handleToggle() {
    setShowModal(!showModal);
  }

  return (
    <div>
      <button onClick={handleToggle}> Open Modal PopUp</button>

      {showModal && <Modal />}
    </div>
  );
};

export default ParentModal;
