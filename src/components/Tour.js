import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <h4>${price}</h4>

      <p id={`tour-item-para-${id}`}>
        {readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "See less" : "Show more"}
        </button>
      </p>

      <button
        id={`delete-btn-${id}`}
        onClick={() => removeTour(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default Tour;