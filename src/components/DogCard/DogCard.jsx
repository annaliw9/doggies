import { useNavigate } from "react-router-dom";
import "./DogCard.css";

import React from "react";

const DogCard = ({ dog }) => {
  const navigate = useNavigate();

  const truncateText = (text, maxLength = 100) => {
    if (!text) return "No description available";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  return (
    <div className="card" onClick={() => navigate(`/breed/${dog.id}`)}>
      {/* <img src={dog.image?.url || "Not image found"} alt={dog.name} /> */}
      <div className="card-content">
        <h4>{dog.name}</h4>
        <p>{truncateText(dog.description)}</p>
        <button className="button">View</button>
      </div>
    </div>
  );
};
export default DogCard;
