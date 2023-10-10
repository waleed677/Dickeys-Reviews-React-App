import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";

const ratings = [
  { name: 'verypoor', value: 1 },
  { name: 'poor', value: 2 },
  { name: 'happy', value: 3 },
  { name: 'great', value: 4 },
  { name: 'excellent', value: 5 },
];

const Stars = (props) => {

  const handleStarRating = (index) => {
    props.handleStars(index+1)
  };
  
  return (
    <div className="flex justify-center">
      {ratings.map((rating, index) =>
          <StarIcon
            key={rating.name}
            className={`h-10 w-10 cursor-pointer ${
              index < props.stars ? 'text-yellow-400' : 'star-outline-color'
            }`}
            onClick={() => handleStarRating(index)}
          />
       
      )}
    </div>
  );
};

export default Stars;
