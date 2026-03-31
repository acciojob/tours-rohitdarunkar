import React, { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div>
      <img src={image} alt={name} width="300" />

      <h3>{name}</h3>
      <h4>${price}</h4>

      <p>
        {readMore ? info : `${info.substring(0, 200)}...`}
<button onClick={() => setReadMore(!readMore)}>
  {readMore ? "Show less" : "Show more"}
</button>
<button onClick={() => removeTour(id)}>Not Interested</button></p>
    </div>
    
  );
};
export default Tour;