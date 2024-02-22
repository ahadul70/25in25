import React from "react";
import items from "./Sidebardata";
import Sidebaritems from "./Sidebaritems";

const Sidebar = () => {
  return (
    <div className="sidebar">
      {" "}
      {/* Add a class or styles for the sidebar container */}
      {items.map((item, index) => (
        <Sidebaritems key={index} item={item} />
      ))}
    </div>
  );
};

export default Sidebar;
