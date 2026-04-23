import { useFavorites } from "../../context/FavoritesContext";
import "./DogCard.css";
import { useNavigate } from "react-router-dom";

export const DogCard = ({ dog }) => {
  const navigate = useNavigate();
  const { addFavorite } = useFavorites();

  const truncateText = (text, maxLength = 100) => {
    if (!text) return "No description available";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  const handleSave = (e) => {
    e.stopPropagation();
    addFavorite(dog);
  };

  return (
    <div className="card" onClick={() => navigate(`/dog/${dog.id}`)}>
      <img src={dog.image?.url} alt={dog.name} />
      <div className="card-content">
        <div>
          <h4>{dog.name}</h4>
          <p>{truncateText(dog.description)}</p>
        </div>
        <div className="card-button">
          <button>Adopt</button>
          <button onClick={handleSave}>Save &#10084;</button>
        </div>
      </div>
    </div>
  );
};
