import React, { useRef } from "react";

const Scrolltopart = () => {
  const data = [
    {
      label: "First Card",
      style: {
        color: "red",
        width: "50%",
        height: "200px",
      },
    },
    {
      label: "Second Card",
      style: {
        color: "blue",
        width: "50%",
        height: "200px",
      },
    },
    {
      label: "Third Card",
      style: {
        color: "yellow",
        width: "50%",
        height: "200px",
      },
    },
    {
      label: "Fourth Card",
      style: {
        color: "orange",
        width: "100%",
        height: "200px",
      },
    },
    {
      label: "Fifth Card",
      style: {
        color: "teal",
        width: "50%",
        height: "200px",
      },
    },
  ];

  const sectionRef = useRef(null);

  const scrollToSection = () => {
    if (sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <h1>Scroll to the section </h1>
      <button onClick={scrollToSection}>Click to Scroll</button>

      {data.map((dataItem, index) => (
        <div
          key={index}
          style={dataItem.style}
          ref={index === 4 ? sectionRef : null}
        >
          <h3>{dataItem.label}</h3>
        </div>
      ))}
    </div>
  );
};

export default Scrolltopart;
