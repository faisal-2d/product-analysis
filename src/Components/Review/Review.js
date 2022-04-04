import { faQuoteLeft, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Review = (props) => {
  const { name, rating, comment } = props.review; 

  return (
    <div className="text-left">
      <h3 className="text-3xl">{name}</h3>
      
      <h3>Rating: {rating}<FontAwesomeIcon className="text-orange-400" icon={faStar}></FontAwesomeIcon></h3>
      <p><FontAwesomeIcon className="text-green-400 mr-4" icon={faQuoteLeft}></FontAwesomeIcon>{comment}</p>
    </div>
  );
};

export default Review;
