import React, { useState } from "react";

const Tabs = ({ Tabcontents, onChange }) => {
  const [currentTabIndex, setCurentTabIndex] = useState(0);

  function handleonClick(getCurrentIndex) {
    setCurentTabIndex(getCurrentIndex);
    onChange(getCurrentIndex);
  }

  return (
    <div className="wrapper">
      <div className="heading">
        {Tabcontents.map((Tabcontent, index) => (
          <div onClick={() => handleonClick(index)} key={Tabcontent.label}>
            <span className="label">{Tabcontent.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {Tabcontents[currentTabIndex] && Tabcontents[currentTabIndex].content}
      </div>
    </div>
  );
};

export default Tabs;
