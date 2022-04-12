import React, { useState, useEffect } from "react";
import './RatingStars.css';
import { FaStar } from "react-icons/fa";

const RatingStars = (id) => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);


    const onSumbit = (props) => {
        console.log(`rated ${rating} for id ${id.id}`)
    }
   

  return ( 
  <div>{
    [... Array(5)].map((star, i) => {
      const ratingValue = i + 1;


    return (
    <label>
      <input 
      type="radio" 
      name="rating" 
      value={ratingValue} 
      onClick={() => setRating(ratingValue, id.id)}
      />
      <FaStar 
      className="star" 
      color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
      onMouseEnter={() => setHover(ratingValue)}
      onMouseLeave={() => setHover(null)}
      size={25}
      />
    </label>
    );
  })}
  <p>The Rating is {rating} {id.id}</p>
  </div>
  );
};

export default RatingStars;