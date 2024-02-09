import React, { useState } from "react";
import { CiStar } from "react-icons/ci";

const Stars = ({ noOfStar = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

    function handleClick(index) {
        console.log("on Click", index);
        setRating(index)
    }

  function handleMouseEnter(index) {
      console.log("on Enter", index);
      setHover(index)
  }

  function handleMouseLeave(index) {
      console.log("on Leave", index);
      setHover(rating)
  }

  return (
    <div className="star-rating">
      {[...Array(noOfStar)].map((_, index) => {
        index += 1;
        return (
          <CiStar
            key={index}
            onClick={() => handleClick(index)}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
            color={index <= (hover || rating) ? "gold" : "gray"}
            size={40}
          />
        );
      })}
    </div>
  );
};

export default Stars;
