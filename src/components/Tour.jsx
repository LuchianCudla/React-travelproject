import { useState } from "react";

const Tour = ({ id, name, info, image, price, removeTour }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="Tour">
      <img src={image} alt={name} />
      <div className="section">
        <div className="info-section">
          <h4 className="name">{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : info.slice(0, 200)}...
          <button className="readmore" onClick={() => setReadMore(!readMore)}>
            {readMore ? "show less" : "read more"}
          </button>
        </p>
        <button className="delete-btn" onClick={() => removeTour(id)}>
          Not for me
        </button>
      </div>
    </article>
  );
};

export default Tour;
