import React from "react";
import Menu_item from "./Menu_item"; // Adjust the import path based on your project structure

const Menu_list = ({ list = [] }) => {
  return (
    <ul className="menu-list-container">
      {list && list.length
        ? list.map((listItem, index) => (
            <Menu_item key={index} item={listItem} />
          ))
        : null}
    </ul>
  );
};

export default Menu_list;
