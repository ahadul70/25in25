import React from "react";
import Tabs from "./Tabs";
import "./style.css"
const ParentTab = () => {
  function RandomComponent() {
    return <h1>Some random content</h1>;
  }

  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is Tab One</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is Tab Two</div>,
    },
    {
      label: "Tab 3",
      content: <RandomComponent/>,
    },
  ];

  function handleChange(currentTabIndex) {
    console.log(currentTabIndex);
  }

  return <Tabs Tabcontents={tabs} onChange={handleChange} />;
};

export default ParentTab;
