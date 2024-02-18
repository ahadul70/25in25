import React, { useState } from "react";
import Menu_list from "./menu_list";

const Menu_item = ({ item }) => {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  function handleToggleClick(getCurrentlabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentlabel]: !displayCurrentChildren[getCurrentlabel],
    });
  }

  console.log(displayCurrentChildren);

  return (
    <li>
      <div style={{ display: "flex", gap: "20px" }}>
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleClick(item.label)}>
            {displayCurrentChildren[item.label] ? "-" : "+"}
          </span>
        ) : null}
      </div>
      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
        <Menu_list list={item.children} />
      ) : null}
    </li>
  );
};

export default Menu_item;
